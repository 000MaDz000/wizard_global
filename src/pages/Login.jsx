import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import logo from '../assets/wazir.png';
import { Link } from 'react-router-dom';
import { useAuth, useLogin } from '../api/hooks/useAuth';

const Login = () => {
    const navigate = useNavigate();
    const { data: user, isLoading } = useAuth();
    const { mutate, isPending, error: loginError } = useLogin();

    const formRef = useRef({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    // ✅ إعادة التوجيه إذا كان هناك مستخدم
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

            const { email, password } = formRef.current;

            if (!email || !password) {
                setError('البريد الإلكتروني وكلمة المرور مطلوبان');
                return;
            }

            mutate(
                { identifier: email, password },
                {
                    onSuccess: () => {
                        navigate('/');
                    },
                    onError: () => {
                        setError('بيانات الدخول غير صحيحة');
                    },
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
                <h2>تسجيل الدخول</h2>
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit}>
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

                    <button type="submit" className="auth-button" disabled={isPending}>
                        {isPending ? 'جارٍ تسجيل الدخول...' : 'تسجيل الدخول'}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        ليس لديك حساب؟{' '}
                        <span onClick={() => navigate('/register')}>سجل الآن</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
