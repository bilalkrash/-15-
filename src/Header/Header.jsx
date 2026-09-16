import React, { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [language, setLanguage] = useState("ru");

    return (
        <aside className="sidebar">
            <div className="logo">
                🛍️ <span>ShopUI Kit</span>
            </div>

            <p className="subtitle">ДИЗАЙН ДЛЯ СТАЖЁРОВ</p>

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

                <NavLink to="/" end className="menu-item">
                    <span className="dot">●</span>
                    🎨 <p>Дизайн-система</p>
                </NavLink>
            </div>

            <div className="menu-section">
                <p className="section-title">ЭКРАНЫ</p>

                <NavLink to="/main" className="menu-item">
                    <span className="dot">●</span>
                    🏠 <p>Главная</p>
                </NavLink>

                <NavLink to="/katalog" className="menu-item">
                    <span className="dot">●</span>
                    📦 <p>Каталог</p>
                </NavLink>

                <NavLink to="/towar" className="menu-item">
                    <span className="dot">●</span>
                    🏷️ <p>Карточка товара</p>
                </NavLink>

                <NavLink to="/korzina" className="menu-item">
                    <span className="dot">●</span>
                    🛒 <p>Корзина</p>
                </NavLink>

                <NavLink to="/oformlenie" className="menu-item">
                    <span className="dot">●</span>
                    📝 <p>Оформление</p>
                </NavLink>

                <NavLink to="/chek" className="menu-item">
                    <span className="dot">●</span>
                    ✅ <p>Спасибо за заказ</p>
                </NavLink>

                <NavLink to="/register" className="menu-item">
                    <span className="dot">●</span>
                    🔐 <p>Вход / Регистрация</p>
                </NavLink>

                <NavLink to="/lichka" className="menu-item">
                    <span className="dot">●</span>
                    👤 <p>Личный кабинет</p>
                </NavLink>
            </div>
        </aside>
    );
};

export default Header;