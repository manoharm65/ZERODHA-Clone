require("dotenv").config();
const express = require("express");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { UserModel } = require("./model/UserModel");
const { authenticateToken } = require("./middleware/auth");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3002;

const uri = process.env.MONGO_URL;

const {OrdersModel} =require("./model/OrdersModel");

//   app.get("/addPositions", async (req, res) => {

//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach(async (item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss
//     });

//     await newPosition.save();
//   });

//   res.send("Positions added successfully");
// });

// Authentication Routes
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, mobile, pan, password } = req.body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({
      $or: [
        { email: email.toLowerCase() },
        { mobile },
        { pan: pan.toUpperCase() }
      ]
    });

    if (existingUser) {
      let field = existingUser.email === email.toLowerCase() ? 'email' :
                 existingUser.mobile === mobile ? 'mobile' : 'PAN';
      return res.status(400).json({ 
        message: `User with this ${field} already exists.` 
      });
    }

    // Create new user
    const user = new UserModel({
      name,
      email,
      mobile,
      pan,
      password
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: "Error creating user" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await UserModel.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check password
    const validPassword = await user.comparePassword(password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      message: "Logged in successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: "Error logging in" });
  }
});

// Protected Routes - example
// Create order and update holdings accordingly
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // Save order record
    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });
    await newOrder.save();

    // If it's a buy order, update holdings
    if (mode && mode.toUpperCase() === 'BUY') {
      const existing = await HoldingsModel.findOne({ name });

      if (existing) {
        // Recalculate average price
        const existingQty = Number(existing.qty) || 0;
        const buyQty = Number(qty) || 0;
        const existingAvg = Number(existing.avg) || 0;
        const newQty = existingQty + buyQty;
        const newAvg = newQty > 0 ? ((existingAvg * existingQty) + (Number(price) * buyQty)) / newQty : Number(price);

        existing.qty = newQty;
        existing.avg = Number(newAvg.toFixed(2));
        existing.price = Number(price);

        await existing.save();
      } else {
        // Create new holding
        const holding = new HoldingsModel({
          name,
          qty: Number(qty),
          avg: Number(price),
          price: Number(price),
          net: '+0.00%',
          day: '+0.00%'
        });
        await holding.save();
      }
    }

    res.json({ message: 'Order placed' });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Failed to create order' });
  }
});

// Return all holdings
app.get('/allHoldings', async (req, res) => {
  try {
    const holdings = await HoldingsModel.find();
    res.json(holdings);
  } catch (error) {
    console.error('Error fetching holdings:', error);
    res.status(500).json({ message: 'Failed to fetch holdings' });
  }
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Backend server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log("❌ DB connection error", err));







// // app.get("/addHoldings", async (req, res) => {
// //   try {
// //     const tempHoldings = [
// //       {
// //         name: "BHARTIARTL",
// //         qty: 2,
// //         avg: 538.05,
// //         price: 541.15,
// //         net: "+0.58%",
// //         day: "+2.99%",
// //       },
// //       {
// //         name: "HDFCBANK",
// //         qty: 2,
// //         avg: 1383.4,
// //         price: 1522.35,
// //         net: "+10.04%",
// //         day: "+0.11%",
// //       },
// //       {
// //         name: "HINDUNILVR",
// //         qty: 1,
// //         avg: 2335.85,
// //         price: 2417.4,
// //         net: "+3.49%",
// //         day: "+0.21%",
// //       },
// //       {
// //         name: "INFY",
// //         qty: 1,
// //         avg: 1350.5,
// //         price: 1555.45,
// //         net: "+15.18%",
// //         day: "-1.60%",
// //         isLoss: true,
// //       },
// //       {
// //         name: "ITC",
// //         qty: 5,
// //         avg: 202.0,
// //         price: 207.9,
// //         net: "+2.92%",
// //         day: "+0.80%",
// //       },
// //       {
// //         name: "KPITTECH",
// //         qty: 5,
// //         avg: 250.3,
// //         price: 266.45,
// //         net: "+6.45%",
// //         day: "+3.54%",
// //       },
// //       {
// //         name: "M&M",
// //         qty: 2,
// //         avg: 809.9,
// //         price: 779.8,
// //         net: "-3.72%",
// //         day: "-0.01%",
// //         isLoss: true,
// //       },
// //       {
// //         name: "RELIANCE",
// //         qty: 1,
// //         avg: 2193.7,
// //         price: 2112.4,
// //         net: "-3.71%",
// //         day: "+1.44%",
// //       },
// //       {
// //         name: "SBIN",
// //         qty: 4,
// //         avg: 324.35,
// //         price: 430.2,
// //         net: "+32.63%",
// //         day: "-0.34%",
// //         isLoss: true,
// //       },
// //       {
// //         name: "SGBMAY29",
// //         qty: 2,
// //         avg: 4727.0,
// //         price: 4719.0,
// //         net: "-0.17%",
// //         day: "+0.15%",
// //       },
// //       {
// //         name: "TATAPOWER",
// //         qty: 5,
// //         avg: 104.2,
// //         price: 124.15,
// //         net: "+19.15%",
// //         day: "-0.24%",
// //       },
// //       {
// //         name: "TCS",
// //         qty: 1,
// //         avg: 3041.7,
// //         price: 3194.8,
// //         net: "+5.03%",
// //         day: "-0.25%",
// //         isLoss: true,
// //       },
// //       {
// //         name: "WIPRO",
// //         qty: 4,
// //         avg: 489.3,
// //         price: 577.75,
// //         net: "+18.08%",
// //         day: "+0.32%",
// //       },
// //     ];

// //     await HoldingsModel.insertMany(tempHoldings);

// //     res.send("✅ Holdings added successfully");
// //   } catch (error) {
// //     console.log(error);
// //     res.status(500).send("❌ Error inserting holdings");
// //   }
// });