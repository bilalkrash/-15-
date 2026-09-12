import React from 'react';
import "./dizain.css"

const colors = [
    { name: 'Primary', hex: '#2563EB', bg: '#2563EB' },
    { name: 'Primary dark', hex: '#1E40AF', bg: '#1E40AF' },
    { name: 'Accent', hex: '#F59E0B', bg: '#F59E0B' },
    { name: 'Success', hex: '#22C55E', bg: '#22C55E' },
    { name: 'Danger', hex: '#EF4444', bg: '#EF4444' },
    { name: 'Text', hex: '#0F172A', bg: '#0F172A' },
    { name: 'Muted', hex: '#64748B', bg: '#64748B' },
    { name: 'Border', hex: '#E2E8F0', bg: '#E2E8F0' },
    { name: 'Background', hex: '#F4F6FB', bg: '#F4F6FB' },
    { name: 'Surface', hex: '#FFFFFF', bg: '#FFFFFF', border: true },
];

const typography = [
    { level: 'H1 · 25/800', sample: 'Заголовок страницы', className: 'ds-h1' },
    { level: 'H2 · 19/700', sample: 'Заголовок раздела', className: 'ds-h2' },
    { level: 'H3 · 16/600', sample: 'Подзаголовок', className: 'ds-h3' },
    { level: 'Body · 14/400', sample: 'Основной текст параграфа, описание товара.', className: 'ds-body' },
    { level: 'Caption · 12/400', sample: 'Мелкий текст, подписи, артикул.', className: 'ds-caption' },
];

const Dizain = () => {
    return (
        <div className="ds-container">

            <div>
                <span className="ds-badge-kit">UI Kit</span>
                <h1 className="ds-title">Дизайн-система</h1>
                <p className="ds-description">
                    Базовые цвета, шрифты и компоненты. Используй эти значения во всём проекте, чтобы интерфейс был единым.
                </p>
            </div>

            <section className="ds-card">
                <h2 className="ds-section-title">Цвета</h2>
                <div className="ds-color-grid">
                    {colors.map((color) => (
                        <div key={color.name} className="ds-color-item">
                            <div
                                className="ds-color-swatch"
                                style={{
                                    backgroundColor: color.bg,
                                    border: color.border ? '1px solid var(--color-border)' : 'none',
                                }}
                            />
                            <span className="ds-color-name">{color.name}</span>
                            <span className="ds-color-hex">{color.hex}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="ds-card">
                <h2 className="ds-section-title">Типографика</h2>
                <div>
                    {typography.map((item) => (
                        <div key={item.level} className="ds-typography-row">
                            <span className="ds-typography-meta">{item.level}</span>
                            <span className={item.className}>{item.sample}</span>
                        </div>
                    ))}
                </div>
                <div className="ds-typography-footer">
                    Шрифт: system-ui / Segoe UI. На реальном проекте можно подключить Inter или Roboto.
                </div>
            </section>

            <section className="ds-card">
                <h2 className="ds-section-title">Кнопки и компоненты</h2>

                <div className="ds-row">
                    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-ghost">Ghost</button>
                    <button className="btn btn-accent">Accent</button>
                    <button className="btn btn-disabled" disabled>Disabled</button>

                    <span className="badge badge-new">Новый</span>
                    <span className="badge badge-pending">В обработке</span>
                    <span className="badge badge-success">Доставлен</span>
                </div>

                <div className="ds-row">
                    <div className="ds-stepper">
                        <button>-</button>
                        <span>2</span>
                        <button>+</button>
                    </div>

                    <div className="ds-input-wrapper">
                        <input
                            type="text"
                            placeholder="Поле ввода / Input field"
                            className="ds-input"
                        />
                        <span className="ds-input-badge">3</span>
                    </div>
                </div>

                <div className="ds-info-box">
                    💡 Радиус скругления — 10–14px, тень — мягкая. Отступы кратны 4px (8, 12, 16, 22).
                </div>
            </section>
        </div>
    );
}

export default Dizain;