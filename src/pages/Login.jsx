import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import logo from '../assets/wazir.png'
import { Link } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            // هنا سيتم الاتصال مع Strapi للتحقق من بيانات الدخول
            // هذا مثال فقط - سيتم استبداله بالاتصال الفعلي مع الخادم
            if (formData.email && formData.password) {
                setIsAuthenticated(true);
                navigate('/');
            } else {
                setError('البريد الإلكتروني وكلمة المرور مطلوبان');
            }
        } catch (err) {
            setError('بيانات الدخول غير صحيحة');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <Link to={'/'}>
                    <h1 className='h1_logo'><img src={logo} alt="" /></h1>

                </Link>
                <h2>تسجيل الدخول</h2>
                {error && <div className="error-message">{error}</div>}
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>البريد الإلكتروني</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>كلمة المرور</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="auth-button">تسجيل الدخول</button>
                </form>
                
                <div className="auth-footer">
                    <p>ليس لديك حساب؟ <span onClick={() => navigate('/register')}>سجل الآن</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;