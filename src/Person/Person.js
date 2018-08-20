import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className='Person' style={style}>
            <p onClick={props.click}>I'm {props.name}!I am {props.age} year old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} defaultValue={props.name}></input>
        </div>
    )
};

export default Radium(person);