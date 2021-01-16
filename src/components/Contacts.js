import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Contacts = ({ list, deleteContactById }) => {

    const deleteContact = (e) => {
        const id = e.target.dataset.id
        deleteContactById(id)
    }
 
    return (
        <Ul>
        {list.map((item) => {
            return (
                <ListItem key={item.id}>
                    <Span></Span><Text>{item.name}: {item.number}</Text>
                    <Button type="button" data-id = {item.id} onClick={deleteContact} >Delete</Button>
                </ListItem>
            )
        })}
        </Ul>

    )
}

export default Contacts

Contacts.propTypes = {
    list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    deleteContactById: PropTypes.func.isRequired,
}

const ListItem = styled.li`
display: flex;
margin-bottom: 0px;
align-items: baseline;
/* margin-left: 0; */
`;

const Button = styled.button`
height: 100%;
border: 1px solid lightblue;
border-radius: 5px;
padding-left: 10px;
padding-right: 10px;
outline: none;
margin-left: 10px;
&:active {
    border: 2px solid SteelBlue;
    box-shadow: 1px 1px 10px 1px steelblue;
}
&:hover {
    border: 2px solid SteelBlue;
    box-shadow: 1px 1px 10px 1px steelblue;
`;

const Span = styled.span`
display: block;
width: 10px;
height: 10px;
background-color: steelblue;
border-radius: 50%;
margin-right: 10px;
`;

const Ul = styled.ul`
/* outline: 1px solid steelblue; */
padding-left: 10px`;

const Text = styled.p`
margin-top: 5px`;