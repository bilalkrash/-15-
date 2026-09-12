import React, { useState } from 'react';
import "./Lichka.css"

const ordersData = [
    {
        id: '100245',
        date: '30.05.2026',
        itemsCount: 3,
        totalPrice: '17 090 с',
        status: 'new',
        statusText: 'Новый',
    },
    {
        id: '100231',
        date: '24.05.2026',
        itemsCount: 1,
        totalPrice: '12 900 с',
        status: 'processing',
        statusText: 'В обработке',
    },
    {
        id: '100198',
        date: '12.05.2026',
        itemsCount: 2,
        totalPrice: '5 600 с',
        status: 'delivered',
        statusText: 'Доставлен',
    },
];

const Lichka = () => {
    const [activeTab, setActiveTab] = useState('orders');
    return (
        <div>
            <div className="profile-container">
                <div>
                    <span className="page-badge">PAGE · /profile</span>
                    <h1 className="page-title">Личный кабинет</h1>
                    <p className="page-subtitle">
                        Данные пользователя и история заказов со статусами.
                    </p>
                </div>

                <div className="profile-main-card">
                    <aside className="profile-sidebar">
                        <div className="avatar-circle">И</div>
                        <h3 className="user-name">Иван Иванов</h3>
                        <span className="user-email">ivan@mail.com</span>

                        <nav className="sidebar-menu">
                            <button
                                className={`menu-item ${activeTab === 'orders' ? 'active' : ''}`}
                                onClick={() => setActiveTab('orders')}
                            >
                                <span>📦</span> Мои заказы
                            </button>
                            <button
                                className={`menu-item ${activeTab === 'profile' ? 'active' : ''}`}
                                onClick={() => setActiveTab('profile')}
                            >
                                <span>⚙️</span> Профиль
                            </button>
                            <button className="menu-item logout">
                                <span>↪</span> Выйти
                            </button>
                        </nav>
                    </aside>

                    <main className="orders-content">
                        <h2 className="section-heading">История заказов</h2>

                        <div className="orders-list">
                            {ordersData.map((order) => (
                                <div key={order.id} className="order-item-card">
                                    <div className="order-info-group">
                                        <span className="order-number">№ {order.id}</span>
                                        <span className="order-meta-details">
                                            {order.date} · {order.itemsCount} товара · {order.totalPrice}
                                        </span>
                                    </div>

                                    <span className={`status-badge ${order.status}`}>
                                        {order.statusText}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Lichka;