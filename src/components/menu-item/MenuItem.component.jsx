import React from 'react';
import './MenuItem.styles.scss';

export const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`menu-item ${size}`} style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
};
