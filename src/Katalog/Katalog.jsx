import React from 'react';
import "./katalog.css"

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
        icon: '⌚',
    },
    {
        id: 4,
        category: 'Аксессуары',
        title: 'Рюкзак городской',
        price: '2 300 с',
        icon: '🎒',
    },
    {
        id: 5,
        category: 'Электроника',
        title: 'Смартфон Galaxy A',
        price: '18 700 с',
        icon: '📱',
    },
    {
        id: 6,
        category: 'Одежда',
        title: 'Футболка хлопок',
        price: '890 с',
        icon: '👕',
    },
];

const Katalog = () => {
    return (
        <div>
            <div className="catalog-container">
                <div>
                    <span className="page-badge">PAGE · /catalog</span>
                    <h1 className="page-title">Каталог</h1>
                    <p className="page-subtitle">
                        Сетка товаров + фильтры слева + сортировка + пагинация.
                    </p>
                </div>

                <div className="catalog-card">
                    <aside className="filters-sidebar">
                        <h3 className="filters-title">Фильтры</h3>

                        <div className="filter-group">
                            <span className="filter-label">Категория</span>
                            <label className="checkbox-label">
                                <input type="checkbox" /> Электроника
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" /> Одежда
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" /> Обувь
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" /> Для дома
                            </label>
                        </div>

                        <div className="filter-group">
                            <span className="filter-label">Цена, сом</span>
                            <div className="price-inputs">
                                <input type="text" placeholder="от / баштап" className="price-input" />
                                <input type="text" placeholder="до / чейин" className="price-input" />
                            </div>
                        </div>

                        <div className="filter-group">
                            <span className="filter-label">Наличие</span>
                            <label className="checkbox-label">
                                <input type="checkbox" defaultChecked /> В наличии
                            </label>
                        </div>

                        <button className="btn-apply">Применить</button>
                    </aside>

                    <main className="catalog-content">
                        <div className="catalog-header">
                            <span className="count-text">Найдено 48 товаров</span>
                            <select className="sort-select">
                                <option>Сначала дешёвые</option>
                                <option>Сначала дорогие</option>
                                <option>По популярности</option>
                            </select>
                        </div>

                        <div className="products-grid">
                            {products.map((item) => (
                                <div key={item.id} className="product-card">
                                    <div className="product-image">
                                        {item.discount && <span className="badge-discount">{item.discount}</span>}
                                        <span>{item.icon}</span>
                                    </div>
                                    <div className="product-info">
                                        <span className="product-cat">{item.category}</span>
                                        <h4 className="product-title">{item.title}</h4>
                                        <div className="product-footer">
                                            <div className="price">
                                                {item.price}
                                                {item.oldPrice && <span className="old-price">{item.oldPrice}</span>}
                                            </div>
                                            <button className="btn-add">+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pagination">
                            <button className="page-btn">&lt;</button>
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <button className="page-btn">4</button>
                            <button className="page-btn">&gt;</button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Katalog;