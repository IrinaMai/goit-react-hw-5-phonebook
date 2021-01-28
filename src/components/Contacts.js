import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import transition from 'styled-transition-group';
import styled from 'styled-components';


const Contacts = ({ list, deleteContactById }) => {

    const deleteContact = (e) => {
        const id = e.target.dataset.id
        deleteContactById(id)
    }
 
    return (
        <DIV>
        <TransitionGroup component='ul'> 
              {list.map((item) => {
            return (
                <ListItem key={item.id} timeout={250} appear>
                    <Span></Span><Text>{item.name}: {item.number}</Text>
                    <Button type="button" data-id = {item.id} onClick={deleteContact} >Delete</Button>
                </ListItem>
            )
        })}
            </TransitionGroup>
            </DIV>

    )
}

export default Contacts

Contacts.propTypes = {
    list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    deleteContactById: PropTypes.func.isRequired,
}

const ListItem = transition.li.attrs({
    mountOnEnter: true,
    unmountOnExit: true,
    timeout: 1000,
})`
&:appear {
    transform: translateX(-100%); 
    opacity: 0.1;
}
&:appear-active {
  transform: translateX(0);
    opacity: 1;
  transition: all 250ms ease-in;  
}
&:enter { 
    transform: translateX(-100%); 
    opacity: 0.1;
}
&:enter-active {
    transform: translateX(0);
    opacity: 1;
  transition: all 250ms ease-in;
}
&:exit {
    transform: translateX(0);
    opacity: 1;
}
&:exit-active {
    transform: translateX(200%);
    opacity: 0.1;
    transition: all 250ms ease-in;
}

display: flex;
justify-content: space-between;
margin-bottom: 10px;
align-items: baselin;

`;

const Button = styled.button`
font-weight:bold;
color: steelblue;
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

const DIV = styled.div`
/* outline: 1px solid steelblue; */
/* padding-left: 10px; */
/* width: 500px; */
`


const Text = styled.p`
margin-top: 5px`;