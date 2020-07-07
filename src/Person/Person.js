import React from 'react';
import styled from 'styled-components';
import './Person.css';

const person = (props) => {
  const StyledDiv = styled.div`
    width: 60%;
    margin: 16px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;

    @media (min-width: 500px) {
      width: 450px;
    }
  `;

  return (
    //<div className='Person' style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {Math.floor(Math.random() * 30)} years old
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
