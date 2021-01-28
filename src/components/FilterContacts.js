import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import transition from 'styled-transition-group';

const FilterContacts = ({ handleFilter }) => {
    
    const onFilterChng = (e) => {
         handleFilter(e.target.value)
    }; 

    return (
        <>
        <Div in={true} timeout={250} appear>
        <Label> Find contacts by name:
        <Input name="filter" type="search" onChange={onFilterChng}/>
        </Label> 
        </Div>
        </>
    )

}
export default FilterContacts

FilterContacts.propTypes = {
    handleFilter: PropTypes.func.isRequired,
};

const Input = styled.input`
display: block;
width: 100%;
height: 40px;
margin-top: 10px;
margin-bottom: 25px;
padding: 10px;
border: 1px solid lightblue;
font-weight: 400;
outline: none;
&: focus {
    border: 2px solid SteelBlue;
    box-shadow: 1px 1px 10px 1px steelblue;
    }
`;

const Label = styled.label`
margin-top: 10px;
font-weight: 500;
`;

const Div = transition.div.attrs({
  timeout: 250,
})`
&:appear {
    transform: translateX(-100%); 
}
&:appear-active {
  transform: translateX(0);
  transition: all 250ms ease-in;  
}
&:enter { 
    transform: translateX(-100%); 
}
&:enter-active {
    transform: translateX(0);
  transition: all 250ms ease-in;
}
&:exit {
    transform: translateX(0);
}
&:exit-active {
    transform: translateX(200%);
    transition: all 250ms ease-in;
}
  `;