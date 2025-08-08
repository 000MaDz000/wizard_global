import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import logo from '../assets/wazir.png';
import { Link } from 'react-router-dom';
import { useAuth, useLogin } from '../api/hooks/useAuth';
import Loading from '../components/Loading';
import { useLoginPage } from '../api/hooks/useLoginPage';
import LanguageSelector from '../components/LanguageSelector';

const Login = () => {
    const navigate = useNavigate();
    const loginpageRes = useLoginPage();
    const { data: user, isLoading: isAuthLoading } = useAuth();
    const { mutate, isPending, error: loginError } = useLogin();

    const isLoading = isAuthLoading || loginpageRes.isLoading;
    const data = loginpageRes.data?.data;

    const formRef = useRef({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

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
                setError(data.email_and_password_required_text);
                return;
            }

            mutate(
                { identifier: email, password },
                {
                    onSuccess: () => {
                        navigate('/');
                    },
                    onError: () => {
                        setError(data.invalid_data_provided_text);
                    },
                }
            );
        },
        [mutate, navigate, data, formRef]
    );


    if (isLoading) return <Loading />;

    if (!data) return;

    return (
        <div className="auth-container">
            <div className="auth-card">
                <Link to={'/'}>
                    <h1 className="h1_logo">
                        <img src={logo} alt="Logo" />
                    </h1>
                </Link>
                <h2>{data.title} <LanguageSelector /></h2>
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>{data.email.label}</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleInputChange}
                            placeholder={data.email.placeholder}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>{data.password.label}</label>
                        <input
                            type="password"
                            name="password"
                            placeholder={data.password.placeholder}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button type="submit" className="auth-button" disabled={isPending}>
                        {isPending ? data.loading_submit_button_text : data.submit_button_text}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        {data.dont_have_account_text}{' '}
                        <span onClick={() => navigate('/register')}>{data.register_now_text}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
