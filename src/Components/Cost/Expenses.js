import './Expenses.css';
import ExpensesDate from './ExpensesDate';
import Card from '../Card/Card';
import React, { useState } from 'react';

function Expenses(props) {
     return (
        <li>
            <Card className='expenses'>
                <ExpensesDate date = {props.date}/>
                <div className='expenses__description'>
                    <h2>{props.description}</h2>
                    <div className='expenses__price'>${props.price}</div>
                </div>
            </Card>
        </li>
    );
}

export default Expenses;