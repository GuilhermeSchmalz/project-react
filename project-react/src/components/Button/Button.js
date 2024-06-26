import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outlined'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    linkTo
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSizes = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

    return (
        <Link to = {linkTo} className = 'btn-default'>
            <button
                className = {`btn ${checkButtonStyle} ${checkButtonSizes}`}
                onClick={onClick}
                type = {type}
                >
                {children}
            </button>
        </Link>
    )
}