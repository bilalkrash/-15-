import React, { useState } from 'react';
import "./korzina.css"
import { Link } from 'react-router-dom';

const initialItems = [
    {
        id: 1,
        title: 'Кроссовки Nike Air Max',
        sku: 'SKU: NK-001',
        price: 4990,
        quantity: 1,
        icon: '👟',
    },
    {
        id: 2,
        title: 'Наушники Sony WH',
        sku: 'SKU: SN-220',
        price: 7500,
        quantity: 1,
        icon: '🎧',
    },
    {
        id: 3,
        title: 'Рюкзак городской',
        sku: 'SKU: BG-014',
        price: 2300,
        quantity: 2,
        icon: '🎒',
    },
];

const Korzina = () => {
    const [items, setItems] = useState(initialItems);

    const handleQuantityChange = (id, delta) => {
        setItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const newQty = item.quantity + delta;
                    return { ...item, quantity: newQty > 0 ? newQty : 1 };
                }
                return item;
            })
        );
    };
    const handleRemove = (id) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
        <div>
            <div className="cart-page-container">

                <div>
                    <span className="page-badge">PAGE · /cart</span>
                    <h1 className="page-title">Корзина</h1>
                    <p className="page-subtitle">
                        Список товаров с изменением количества и итоговой суммой.
                    </p>
                </div>

                <div className="cart-card-main">
                    <h2 className="cart-header-title">Корзина ({items.length} товара)</h2>

                    <div className="cart-layout">
                        <div className="cart-items-list">
                            {items.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-image">{item.icon}</div>

                                    <div className="item-details">
                                        <h3 className="item-title">{item.title}</h3>
                                        <span className="item-sku">{item.sku}</span>
                                        <button
                                            className="btn-remove"
                                            onClick={() => handleRemove(item.id)}
                                        >
                                            ✕ Удалить / Өчүрүү
                                        </button>
                                    </div>

                                    <div className="item-stepper">
                                        <button
                                            className="stepper-btn"
                                            onClick={() => handleQuantityChange(item.id, -1)}
                                        >
                                            −
                                        </button>
                                        <div className="stepper-value">{item.quantity}</div>
                                        <button
                                            className="stepper-btn"
                                            onClick={() => handleQuantityChange(item.id, 1)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div className="item-total-price">
                                        {(item.price * item.quantity).toLocaleString()} с
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary-box">
                            <h3 className="summary-title">Итого</h3>

                            <div className="summary-row">
                                <span>Товары ({totalCount})</span>
                                <span>{totalPrice.toLocaleString()} с</span>
                            </div>

                            <div className="summary-row">
                                <span>Доставка</span>
                                <span className="delivery-free">Бесплатно</span>
                            </div>

                            <div className="summary-row total">
                                <span>К оплате</span>
                                <span>{totalPrice.toLocaleString()} с</span>
                            </div>

                            <Link to="/oformlenie"><button className="btn-checkout">Оформить заказ</button></Link>
                            <Link to="/katalog"><button className="btn-back-catalog">← В каталог</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Korzina;