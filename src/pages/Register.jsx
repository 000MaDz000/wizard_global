import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import logo from '../assets/wazir.png'

const Register = ({ setIsAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
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

        if (formData.password !== formData.confirmPassword) {
            setError('كلمة المرور غير متطابقة');
            return;
        }

        try {
            // هنا سيتم الاتصال مع Strapi لتسجيل المستخدم الجديد
            // هذا مثال فقط - سيتم استبداله بالاتصال الفعلي مع الخادم
            if (formData.name && formData.email && formData.password) {
                setIsAuthenticated(true);
                navigate('/');
            } else {
                setError('جميع الحقول مطلوبة');
            }
        } catch (err) {
            setError('حدث خطأ أثناء التسجيل. يرجى المحاولة لاحقاً');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <Link to={'/'}>
                    <h1 className='h1_logo'><img src={logo} alt="" /></h1>

                </Link>
                <h2>إنشاء حساب جديد</h2>
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>الاسم الكامل</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

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

                    <div className="form-group">
                        <label>تأكيد كلمة المرور</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button type="submit" className="auth-button">إنشاء حساب</button>
                </form>

                <div className="auth-footer">
                    <p>لديك حساب بالفعل؟ <span onClick={() => navigate('/login')}>سجل الدخول</span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;