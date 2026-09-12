import React from 'react';
import "./chek.css"

const Chek = () => {
    const orderId = '100245';
    return (
        <div>
            <div className="success-container">
                <div>
                    <span className="page-badge">PAGE · /checkout/success</span>
                    <h1 className="page-title">Спасибо за заказ</h1>
                </div>

                <div className="success-card">
                    <div className="success-icon-circle">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                    </div>

                    <h2 className="success-headline">Заказ успешно оформлен!</h2>
                    <div className="order-number">№ {orderId}</div>

                    <p className="success-description">
                        Мы свяжемся с вами по телефону для подтверждения. Статус заказа можно
                        отслеживать в личном кабинете.
                    </p>

                    <div className="actions-group">
                        <button className="btn-primary">Мои заказы</button>
                        <button className="btn-secondary">На главную</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chek;