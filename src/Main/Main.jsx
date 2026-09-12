import React from 'react';
import "./main.css"

const categories = [
    { id: 1, name: 'Электроника', count: '120 товаров', icon: '📱' },
    { id: 2, name: 'Одежда', count: '340 товаров', icon: '👕' },
    { id: 3, name: 'Обувь', count: '86 товаров', icon: '👟' },
    { id: 4, name: 'Для дома', count: '210 товаров', icon: '🏠' },
];

const products = [
    {
        id: 1,
        category: 'Обувь',
        title: 'Кроссовки Nike Air',
        price: '4 990 с',
        oldPrice: '5 990',
        discount: '-17%',
        icon: '👟',
    },
    {
        id: 2,
        category: 'Электроника',
        title: 'Наушники Sony WH',
        price: '7 500 с',
        icon: '🎧',
    },
    {
        id: 3,
        category: 'Электроника',
        title: 'Смарт-часы Watch 7',
        price: '12 900 с',
        isNew: true,
        icon: '⌚',
    },
    {
        id: 4,
        category: 'Аксессуары',
        title: 'Рюкзак городской',
        price: '2 300 с',
        icon: '🎒',
    },
];

const Main = () => {
    return (
        <div>
            <div className="home-container">
                <div>
                    <span className="page-badge">PAGE · /</span>
                    <h1 className="page-title">Главная страница</h1>
                    <p className="page-subtitle">
                        Первый экран: шапка, баннер акции, категории, популярные товары, подвал.
                    </p>
                </div>

                <div className="main-content">
                    <header>
                        <div className="header-top">
                            <a href="#" className="logo">
                                <div className="logo-icon">S</div>
                                <span className="logo-text">Shop</span>
                            </a>

                            <div className="search-box">
                                <input
                                    type="text"
                                    placeholder="Поиск товаров..."
                                    className="search-input"
                                />
                                <button className="search-button">🔍</button>
                            </div>

                            <div className="header-actions">
                                <button className="action-btn">👤 Войти</button>
                                <button className="action-btn">
                                    🛒 Корзина
                                    <span className="cart-badge">3</span>
                                </button>
                            </div>
                        </div>

                        <nav className="header-nav">
                            <a href="#" className="nav-link">Каталог</a>
                            <a href="#" className="nav-link">Электроника</a>
                            <a href="#" className="nav-link">Одежда</a>
                            <a href="#" className="nav-link">Обувь</a>
                            <a href="#" className="nav-link">Акции</a>
                        </nav>
                    </header>

                    <div className="page-body">
                        <div className="promo-banner">
                            <div>
                                <h2 className="promo-title">Скидки до −50%</h2>
                                <p className="promo-text">
                                    Сезонная распродажа на популярные категории. Успей купить!
                                </p>
                                <button className="btn-promo">В каталог</button>
                            </div>
                            <div className="promo-image-box">🔥</div>
                        </div>

                        <section className="categories-section">
                            <div className="section-header">
                                <h3 className="section-title">Категории</h3>
                                <a href="#" className="link-all">Все →</a>
                            </div>
                            <div className="categories-grid">
                                {categories.map((cat) => (
                                    <div key={cat.id} className="category-card">
                                        <div className="category-icon">{cat.icon}</div>
                                        <div className="category-name">{cat.name}</div>
                                        <div className="category-count">{cat.count}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="products-section">
                            <div className="section-header">
                                <h3 className="section-title">Популярные товары</h3>
                                <a href="#" className="link-all">Все →</a>
                            </div>
                            <div className="products-grid">
                                {products.map((item) => (
                                    <div key={item.id} className="product-card">
                                        <div className="product-image-container">
                                            {item.discount && <span className="badge-discount">{item.discount}</span>}
                                            {item.isNew && <span className="badge-new-item">NEW</span>}
                                            <span>{item.icon}</span>
                                        </div>
                                        <div className="product-info">
                                            <span className="product-category">{item.category}</span>
                                            <h4 className="product-title">{item.title}</h4>
                                            <div className="product-footer">
                                                <div className="product-price">
                                                    {item.price}
                                                    {item.oldPrice && <span className="old-price">{item.oldPrice}</span>}
                                                </div>
                                                <button className="btn-add-cart">+</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <footer className="footer">
                        <div className="footer-col">
                            <h4>Shop</h4>
                            <ul>
                                <li>О магазине</li>
                                <li>Контакты</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Покупателям</h4>
                            <ul>
                                <li>Доставка</li>
                                <li>Оплата</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Помощь</h4>
                            <ul>
                                <li>FAQ</li>
                                <li>Возврат</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Контакты</h4>
                            <ul>
                                <li>+996 700 000 000</li>
                                <li>info@shop.kg</li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Main;