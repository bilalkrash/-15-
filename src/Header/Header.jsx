import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    const [language, setLanguage] = useState("ru");

    return (
        <aside className="sidebar">

            <div className="logo">
                🛍️ <span>ShopUI Kit</span>
            </div>

            <p className="subtitle">
                ДИЗАЙН ДЛЯ СТАЖЕРОВ
            </p>

            <div className="languages">

                <button
                    className={`language ${language === "ru" ? "active" : ""}`}
                    onClick={() => setLanguage("ru")}
                >
                    Русский
                </button>

                <button
                    className={`language ${language === "kg" ? "active" : ""}`}
                    onClick={() => setLanguage("kg")}
                >
                    Кыргызча
                </button>

            </div>

            <div className="menu-section">
                <p className="section-title">ОСНОВА</p>

                <Link to="/">
                    <div className="menu-item selected">
                        <span>●</span>
                        🎨 <p>Дизайн-система</p>
                    </div>
                </Link>
            </div>

            <div className="menu-section">
                <p className="section-title">ЭКРАНЫ</p>

                <Link to='/main'>
                    <div className="menu-item">
                        <span>●</span>
                        🏠 <p>Главная</p>
                    </div>
                </Link>

                <Link to="/katalog">
                    <div className="menu-item">
                        <span>●</span>
                        📦 <p>Каталог</p>
                    </div>
                </Link>

                <Link to="/towar">
                    <div className="menu-item">
                        <span>●</span>
                        🏷️ <p>Карточка товара</p>
                    </div>
                </Link>

                <Link to="/korzina">
                    <div className="menu-item">
                        <span>●</span>
                        🛒 <p>Корзина</p>
                    </div>
                </Link>

                <Link to="/oformlenie">
                    <div className="menu-item">
                        <span>●</span>
                        📝 <p>Оформление</p>
                    </div>
                </Link>

                <Link to="/chek">
                    <div className="menu-item">
                        <span>●</span>
                        ✅ <p>Спасибо за заказ</p>
                    </div>
                </Link>

                <Link to="/register">
                    <div className="menu-item">
                        <span>●</span>
                        🔐 <p>Вход / Регистрация</p>
                    </div>
                </Link>

                <Link to="/lichka">
                    <div className="menu-item">
                        <span>●</span>
                        👤 <p>Личный кабинет</p>
                    </div>
                </Link>
            </div>

        </aside>
    );
};

export default Header;