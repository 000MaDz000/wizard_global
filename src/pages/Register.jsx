import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import logo from '../assets/wazir.png';
import { useAuth, useSignup } from '../api/hooks/useAuth';

const Register = () => {
    const navigate = useNavigate();
    const { data: user, isLoading } = useAuth();
    const { mutate, isPending } = useSignup();

    const formRef = useRef({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');

    // ✅ إعادة التوجيه إذا كان هناك مستخدم بالفعل
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        formRef.current[name] = value;
    };

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            setError('');

            const { name, email, password, confirmPassword } = formRef.current;

            if (!name || !email || !password || !confirmPassword) {
                setError('جميع الحقول مطلوبة');
                return;
            }

            if (password !== confirmPassword) {
                setError('كلمة المرور غير متطابقة');
                return;
            }

            mutate(
                { username: name, email, password },
                {
                    onSuccess: () => {
                        navigate('/');
                    },
                    onError: () => {
                        setError('حدث خطأ أثناء التسجيل. يرجى المحاولة لاحقاً');
                    }
                }
            );
        },
        [mutate, navigate]
    );

    if (isLoading) return <p>جاري التحقق من الجلسة...</p>;

    return (
        <div className="auth-container">
            <div className="auth-card">
                <Link to={'/'}>
                    <h1 className="h1_logo">
                        <img src={logo} alt="Logo" />
                    </h1>
                </Link>

                <h2>إنشاء حساب جديد</h2>
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>الاسم الكامل</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>البريد الإلكتروني</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>كلمة المرور</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>تأكيد كلمة المرور</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button type="submit" className="auth-button" disabled={isPending}>
                        {isPending ? 'جاري التسجيل...' : 'إنشاء حساب'}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        لديك حساب بالفعل؟{' '}
                        <span onClick={() => navigate('/login')}>سجل الدخول</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
