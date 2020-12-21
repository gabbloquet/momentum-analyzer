import React from 'react';
import './NumberedCard.style.scss'

interface NumberedCardProps {
    children: JSX.Element | JSX.Element[];
    number: number;
}

const NumberedCard = ({number, children}: NumberedCardProps) => {
    return (
        <div className='numbered-card'>
            <section>{number}</section>
            <section>{children}</section>
        </div>
    );
}

export default NumberedCard;
