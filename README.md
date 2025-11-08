# Zerodha Clone

A full-stack clone of Zerodha's trading platform featuring real-time stock tracking, portfolio management, and order placement.

## Features

- 📈 Real-time stock tracking
- 💼 Portfolio management (Holdings & Positions)
- 🔄 Buy/Sell order placement
- 📊 Interactive charts and graphs
- 👤 User authentication
- 💰 Fund management
- 📱 Responsive design

## Tech Stack

### Frontend
- React.js
- Axios for API calls
- Chart.js for data visualization
- Context API for state management
- CSS3 for styling

### Backend
- Node.js
- Express.js
- MongoDB for database
- JWT for authentication
- Mongoose ODM

## Project Structure

```
ZERODHA-Clone/
├── backend/                # Backend server
│   ├── model/             # MongoDB models
│   ├── schemas/           # Database schemas
│   └── index.js          # Server entry point
│
├── frontend/              # Public frontend
│   ├── public/           # Static files
│   └── src/
│       ├── landing_page/ # Landing pages
│       └── components/   # Reusable components
│
└── dashboard/            # Trading dashboard
    ├── public/
    └── src/
        ├── components/   # Dashboard components
        └── data/        # Mock data
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas URI)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/manoharm65/ZERODHA-Clone.git
cd ZERODHA-Clone
```

2. Install Backend Dependencies
```bash
cd backend
npm install
```

3. Setup Environment Variables
Create a `.env` file in the backend directory:
```env
MONGO_URL=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=3002
```

4. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

5. Install Dashboard Dependencies
```bash
cd ../dashboard
npm install
```

### Running the Application

1. Start Backend Server
```bash
cd backend
npm start
```

2. Start Frontend
```bash
cd frontend
npm start
```

3. Start Dashboard
```bash
cd dashboard
npm start
```

Access the application:
- Frontend: http://localhost:3000
- Dashboard: http://localhost:3001
- Backend API: http://localhost:3002

## Features in Detail

### Authentication
- User registration with email verification
- Secure login with JWT
- Password reset functionality

### Dashboard Features
- Holdings view with profit/loss tracking
- Position tracking for day trading
- Real-time order placement
- Fund management
- Portfolio analytics

### Market Data
- Stock price visualization
- Historical data tracking
- Technical indicators
- Market trends

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by [Zerodha](https://zerodha.com/)
- Charts powered by Chart.js
- Icons from Material Icons

## Screenshots

[Add your application screenshots here]

## Contact

Your Name - [manoharm65](https://github.com/manoharm65)

Project Link: [https://github.com/manoharm65/ZERODHA-Clone](https://github.com/manoharm65/ZERODHA-Clone)