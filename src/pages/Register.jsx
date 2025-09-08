import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import logo from '../assets/wazir.png';
import { useAuth, useSignup } from '../api/hooks/useAuth';
import Loading from '../components/Loading';
import { useRegisterPage } from '../api/hooks/useRegisterPage';
import LanguageSelector from '../components/LanguageSelector';

const Register = () => {
    const navigate = useNavigate();
    const { data: user, isLoading: isAuthLoading } = useAuth();
    const { mutate, isPending } = useSignup();
    const registerPageRes = useRegisterPage();


    const isLoading = isAuthLoading || registerPageRes.isLoading;

    const formRef = useRef({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        country: ''
    });

    const [error, setError] = useState('');
    const data = registerPageRes.data?.data;

    // ✅ redirect if user already logged in
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

            const { name, email, password, confirmPassword, phone, country } = formRef.current;

            if (!name || !email || !password || !confirmPassword || !phone || !country) {
                setError(data.all_fields_required_text);
                return;
            }

            if (password !== confirmPassword) {
                setError(data.password_mismatch_text);
                return;
            }

            mutate(
                {
                    full_name: name,
                    username: email, // ⚡ using email as username
                    email,
                    password,
                    phone,
                    country
                },
                {
                    onSuccess: () => {
                        navigate('/');
                    },
                    onError: () => {
                        setError(data.unexpected_error_text);
                    }
                }
            );
        },
        [mutate, navigate, data]
    );

    if (isLoading) return <Loading />;
    if (!data) return null;

    return (
        <div className="auth-container">
            <div className="auth-card">
                <Link to={'/'}>
                    <h1 className="h1_logo">
                        <img src={logo} alt="Logo" />
                    </h1>
                </Link>

                <h2>{data.title}</h2>
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>{data.full_name.label}</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleInputChange}
                            placeholder={data.full_name.placeholder}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>{data.email.label}</label>
                        <input
                            type="email"
                            name="email"
                            placeholder={data.email.placeholder}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>{data.phone.label ?? "Phone"}</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder={data.phone.placeholder ?? "Enter phone"}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>{data.country.label ?? "Country"}</label>
                        <input
                            type="text"
                            name="country"
                            placeholder={data.country.placeholder ?? "Enter country"}
                            onChange={handleInputChange}
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

                    <div className="form-group">
                        <label>{data.password_confirmation.label}</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder={data.password_confirmation.placeholder}
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
                        {data.already_have_account_text}{' '}
                        <span onClick={() => navigate('/login')}>{data.login_now_text}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
