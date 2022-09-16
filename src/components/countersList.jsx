import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: 'Ненужная вещь'},
        {id: 1, value: 4, name: 'Ложка'},
        {id: 2, value: 4, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'},
    ];

    const [counters, setCounters] = useState(initialState);

    const handleIncrement = (id) => {
        setCounters(counters.map((counter) => {
            return counter.id === id ? {...counter, value: counter.value + 1} : counter;
        }));
    };

    const handleDecrement = (id) => {
        setCounters(counters.map((counter) => {
            return counter.id === id ? {...counter, value: counter.value - 1} : counter;
        }));
    };

    const handleDelete = (id) => {
        setCounters(counters.filter(counter => counter.id !== id));
    };

    const handleReset = () => {
        setCounters(initialState);
    };

    return (
        <>
            {counters.map(count => <Counter key = {count.id} onDelete = {() => handleDelete(count.id)} {...count} onIncrement = {handleIncrement} onDecrement = {handleDecrement} />)}
            <button className="btn btn-primary btn-sm-m-2" onClick={handleReset} >Сброс</button>
        </>)
};

export default CountersList;

