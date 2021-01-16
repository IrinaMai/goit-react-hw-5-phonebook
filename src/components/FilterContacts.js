import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterContacts = ({handleFilter}) => {
    const onFilterChng = (e) => {
        handleFilter(e.target.value)
    } 

    return (
        <>
        <Label> Find contacts by name:
        <Input name="filter" type="search" onChange={onFilterChng}/>
        </Label> 
        </>
    )

}
export default FilterContacts

FilterContacts.propTypes = {
    handleFilter: PropTypes.func.isRequired,
};

const Input = styled.input`
display: block;
width: 300px;
height: 30px;
margin-top: 10px;
margin-bottom: 10px;
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