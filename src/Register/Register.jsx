import React, { useState } from 'react';
import "./reg.css"

const Register = () => {
    const [activeTab, setActiveTab] = useState('login'); // 'login' | 'register'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <div className="auth-container">
                <div>
                    <span className="page-badge">PAGE · /login · /register</span>
                    <h1 className="page-title">Вход и регистрация</h1>
                    <p className="page-subtitle">
                        Две вкладки в одном окне. Показана валидация поля.
                    </p>
                </div>

                <div className="auth-main-card">
                    <div className="auth-box">
                        <div className="tabs-header">
                            <button
                                className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
                                onClick={() => setActiveTab('login')}
                            >
                                Вход
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
                                onClick={() => setActiveTab('register')}
                            >
                                Регистрация
                            </button>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label className="input-label">Email</label>
                                <input
                                    type="email"
                                    className="text-input"
                                    placeholder="you@mail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label className="input-label">
                                    Пароль
                                    <span className="sub-label">Сырсөз</span>
                                </label>
                                <input
                                    type="password"
                                    className="text-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn-submit">
                                {activeTab === 'login' ? 'Войти' : 'Зарегистрироваться'}
                            </button>
                        </form>

                        {/* Ссылка снизу */}
                        <div className="auth-footer-text">
                            {activeTab === 'login' ? (
                                <>
                                    Нет аккаунта?{' '}
                                    <button
                                        className="toggle-link"
                                        onClick={() => setActiveTab('register')}
                                    >
                                        Зарегистрироваться
                                    </button>
                                </>
                            ) : (
                                <>
                                    Уже есть аккаунт?{' '}
                                    <button
                                        className="toggle-link"
                                        onClick={() => setActiveTab('login')}
                                    >
                                        Войти
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="info-note">
                        💡 После входа сервер возвращает JWT-токены (access + refresh).
                        access сохраняем и шлём в заголовке Authorization к защищённым запросам.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;