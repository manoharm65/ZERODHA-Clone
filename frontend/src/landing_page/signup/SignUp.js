import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        pan: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prevState => ({
                ...prevState,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) {
            tempErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            tempErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
        }
        if (!formData.mobile.trim()) {
            tempErrors.mobile = 'Mobile number is required';
        } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
            tempErrors.mobile = 'Mobile number should be 10 digits';
        }
        if (!formData.pan.trim()) {
            tempErrors.pan = 'PAN is required';
        } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan.toUpperCase())) {
            tempErrors.pan = 'Invalid PAN format';
        }
        if (!formData.password) {
            tempErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            tempErrors.password = 'Password must be at least 8 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = 'Passwords do not match';
        }
        return tempErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tempErrors = validateForm();
        
        if (Object.keys(tempErrors).length === 0) {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:3002/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        mobile: formData.mobile,
                        pan: formData.pan,
                        password: formData.password
                    })
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || 'Something went wrong');
                }

                // Redirect to verification or dashboard page
                navigate('/email-verification');
            } catch (error) {
                setErrors({ 
                    submit: error.message || 'Failed to create account. Please try again.' 
                });
            } finally {
                setLoading(false);
            }
        } else {
            setErrors(tempErrors);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-nav">
                {/* <img src="/media/images/logo.png" alt="Zerodha" className="logo" />
                <a href="/login" className="login-link">Login</a> */}
            </div>
            
            <div className="signup-content">
                <div className="signup-form-container">
                    <h1>Sign up</h1>
                    <p className="subtitle">Create your free Zerodha trading and Demat account</p>
                    
                    <form onSubmit={handleSubmit} className="signup-form">
                        <div className="form-group">
                            <label htmlFor="name">Full name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className={errors.name ? 'error' : ''}
                                disabled={loading}
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className={errors.email ? 'error' : ''}
                                disabled={loading}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="mobile">Mobile number</label>
                                <input
                                    id="mobile"
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="10 digit mobile number"
                                    className={errors.mobile ? 'error' : ''}
                                    disabled={loading}
                                />
                                {errors.mobile && <span className="error-message">{errors.mobile}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="pan">PAN number</label>
                                <input
                                    id="pan"
                                    type="text"
                                    name="pan"
                                    value={formData.pan}
                                    onChange={handleChange}
                                    placeholder="AAAAA1234A"
                                    className={errors.pan ? 'error' : ''}
                                    disabled={loading}
                                />
                                {errors.pan && <span className="error-message">{errors.pan}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Create password</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Minimum 8 characters"
                                className={errors.password ? 'error' : ''}
                                disabled={loading}
                            />
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm password</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Enter password again"
                                className={errors.confirmPassword ? 'error' : ''}
                                disabled={loading}
                            />
                            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                        </div>

                        {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

                        <button 
                            type="submit" 
                            className="signup-button"
                            disabled={loading}
                        >
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>

                        <p className="terms">
                            By clicking Create Account, you agree to our <a href="/terms">Terms and Conditions</a>
                        </p>
                    </form>
                </div>

                <div className="signup-info">
                    <div className="info-box">
                        <h3>Why choose Zerodha?</h3>
                        <ul>
                            <li>₹0 investments and flat ₹20 intraday trades</li>
                            <li>The fastest trading platform</li>
                            <li>Open an account in minutes</li>
                            <li>Modern and intuitive trading platforms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;