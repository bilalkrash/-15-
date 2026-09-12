import React, { useState } from 'react';
import "./tovar.css"

const relatedProducts = [
    {
        id: 1,
        category: 'Обувь',
        title: 'Кроссовки Adidas',
        price: '4 200 с',
        icon: '👟',
    },
    {
        id: 2,
        category: 'Обувь',
        title: 'Кеды Puma',
        price: '3 100 с',
        icon: '👟',
    },
    {
        id: 3,
        category: 'Обувь',
        title: 'Ботинки Timber',
        price: '6 800 с',
        icon: '👟',
    },
    {
        id: 4,
        category: 'Аксессуары',
        title: 'Носки спорт (3 пары)',
        price: '350 с',
        icon: '🧦',
    },
];

const Tovar = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedThumb, setSelectedThumb] = useState(0);

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };
    return (
        <div>
            <div className="product-page-container">
                <div>
                    <span className="page-badge">PAGE · /product/:id</span>
                    <h1 className="page-title">Карточка товара</h1>
                    <p className="page-subtitle">
                        Галерея, цена, наличие, выбор количества, кнопка в корзину, описание.
                    </p>
                </div>

                <div className="product-card-main">
                    <div className="product-details-grid">
                        <div className="product-gallery">
                            <div className="main-image-box">👟</div>
                            <div className="thumbnails-row">
                                {[0, 1, 2, 3].map((index) => (
                                    <div
                                        key={index}
                                        className={`thumb-box ${selectedThumb === index ? 'active' : ''}`}
                                        onClick={() => setSelectedThumb(index)}
                                    >
                                        👟
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="product-info-col">
                            <span className="product-breadcrumb">Обувь · Nike</span>
                            <h2 className="product-main-title">Кроссовки Nike Air Max</h2>

                            <div className="product-meta">
                                <span>SKU: NK-001</span>
                                <span className="rating-stars">★★★★☆ <span style={{ color: '#0f172a' }}>4.5</span></span>
                            </div>

                            <div className="product-price-row">
                                <span className="current-price">4 990 с</span>
                                <span className="original-price">5 990 с</span>
                            </div>

                            <div className="stock-status">
                                <span className="stock-dot"></span>
                                <span>В наличии (7 шт.)</span>
                            </div>

                            <div className="purchase-controls">
                                <div className="stepper-box">
                                    <button className="stepper-btn" onClick={handleDecrease}>−</button>
                                    <div className="stepper-value">{quantity}</div>
                                    <button className="stepper-btn" onClick={handleIncrease}>+</button>
                                </div>
                                <button className="btn-add-to-cart">
                                    🛒 Добавить в корзину
                                </button>
                            </div>

                            <div className="description-block">
                                <h3>Описание</h3>
                                <p>
                                    Лёгкие и удобные кроссовки для бега и повседневной носки. Дышащий
                                    материал, амортизирующая подошва, доступны размеры 38–45.
                                </p>
                            </div>
                        </div>
                    </div>

                    <section className="related-section">
                        <h3 className="related-section-title">Похожие товары</h3>
                        <div className="related-grid">
                            {relatedProducts.map((item) => (
                                <div key={item.id} className="related-card">
                                    <div className="related-image">{item.icon}</div>
                                    <div className="related-info">
                                        <span className="related-cat">{item.category}</span>
                                        <h4 className="related-title">{item.title}</h4>
                                        <div className="related-footer">
                                            <span className="related-price">{item.price}</span>
                                            <button className="btn-related-add">+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Tovar;