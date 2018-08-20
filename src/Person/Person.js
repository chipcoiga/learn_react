import React from 'react';
import classes from './Person.css';

const person = (props) => {

    return (
        <div className={classes.Person} >
            <p onClick={props.click}>I'm {props.name}!I am {props.age} year old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} defaultValue={props.name}></input>
        </div>
    )
};

export default person;