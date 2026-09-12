import React, { useState } from 'react';
import "./ofor.css"
import { Link } from 'react-router-dom';

const Oformlenie = () => {



    const [deliveryMethod, setDeliveryMethod] = useState('courier');
    const [paymentMethod, setPaymentMethod] = useState('cash');

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: 'invalid-email',
        address: 'г. Бишкек, ул. Чуй 1',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (

        <div>


            <div className="checkout-container">
                <div>
                    <span className="page-badge">PAGE · /checkout</span>
                    <h1 className="page-title">Оформление заказа</h1>
                    <p className="page-subtitle">
                        Форма данных, выбор доставки и оплаты, сводка заказа.
                    </p>
                </div>

                <div className="checkout-card">
                    <div className="checkout-form">
                        <h2 className="section-title">Данные получателя</h2>

                        <div className="form-group">
                            <label className="input-label">
                                ФИО <span className="sub-label">Аты-жөнү</span>
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                className="text-input"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="input-label">Телефон</label>
                            <input
                                type="tel"
                                name="phone"
                                className="text-input"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="input-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="text-input invalid"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <span className="error-message">Введите корректный email</span>
                        </div>

                        <div className="form-group" style={{ marginBottom: '28px' }}>
                            <label className="input-label">
                                Адрес доставки <span className="sub-label">Жеткирүү дареги</span>
                            </label>
                            <input
                                type="text"
                                name="address"
                                className="text-input"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>

                        <h2 className="section-title">Способ доставки</h2>
                        <div className="options-grid">
                            <button
                                type="button"
                                className={`option-btn ${deliveryMethod === 'courier' ? 'active' : ''}`}
                                onClick={() => setDeliveryMethod('courier')}
                            >
                                <span className="option-icon">🚚</span>
                                <span>Курьер</span>
                            </button>

                            <button
                                type="button"
                                className={`option-btn ${deliveryMethod === 'pickup' ? 'active' : ''}`}
                                onClick={() => setDeliveryMethod('pickup')}
                            >
                                <span className="option-icon">🏪</span>
                                <span>Самовывоз</span>
                            </button>
                        </div>

                        <h2 className="section-title">Оплата</h2>
                        <div className="options-grid">
                            <button
                                type="button"
                                className={`option-btn ${paymentMethod === 'cash' ? 'active' : ''}`}
                                onClick={() => setPaymentMethod('cash')}
                            >
                                <span className="option-icon">💵</span>
                                <span>Наличными</span>
                            </button>

                            <button
                                type="button"
                                className={`option-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                                onClick={() => setPaymentMethod('card')}
                            >
                                <span className="option-icon">💳</span>
                                <span>Картой при получении</span>
                            </button>
                        </div>
                    </div>

                    <aside className="order-summary">
                        <h3 className="summary-title">Ваш заказ</h3>

                        <div className="summary-items">
                            <div className="summary-item">
                                <div className="item-name-count">
                                    <span>👟</span>
                                    <span>Nike Air ×1</span>
                                </div>
                                <strong>4 990 с</strong>
                            </div>

                            <div className="summary-item">
                                <div className="item-name-count">
                                    <span>🎧</span>
                                    <span>Sony WH ×1</span>
                                </div>
                                <strong>7 500 с</strong>
                            </div>

                            <div className="summary-item">
                                <div className="item-name-count">
                                    <span>🎒</span>
                                    <span>Рюкзак ×2</span>
                                </div>
                                <strong>4 600 с</strong>
                            </div>
                        </div>

                        <div className="summary-row" style={{ marginTop: '16px' }}>
                            <span>Доставка</span>
                            <span className="delivery-free">Бесплатно</span>
                        </div>

                        <div className="summary-total">
                            <span>Итого</span>
                            <span>17 090 с</span>
                        </div>

                        <Link to="/chek"><button className="btn-submit-order">Подтвердить заказ</button></Link>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Oformlenie;