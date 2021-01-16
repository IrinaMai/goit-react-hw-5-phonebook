import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



export default class AddContacts extends Component {
    static propTypes = {
        onHandleSubmit: PropTypes.func,
    }

    state = {
    name: '',
    number: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        this.props.onHandleSubmit({ name, number });
        this.setState({ name: '', number: '' });
    }

    handleChng = (e) => {
        const { name, value } = e.target
        this.setState(() => ({[name]: value}))
    }

    render() {
        const { name, number } = this.state;
    return (
        <Form name="phoneBook" onSubmit={this.handleSubmit}>
            <Label> Name
           <Input name="name" type="text" value={name} onChange={this.handleChng} />
            </Label>
            <Label> Number
           <Input name="number" type="text" value={number} onChange={this.handleChng} />
            </Label>
            <Button type="submit" name="submitBtn">Add Contact</Button>
        </Form>
    )
    }
};

const Form = styled.form`
border: 1px solid SteelBlue;
width: 350px;
padding: 10px;
/* box-shadow: 1px 1px 10px 1px steelblue; */
`;

const Input = styled.input`
display: block;
width: 300px;
height: 30px;
margin-top: 10px;
margin-bottom: 10px;
padding: 10px;
border: 1px solid lightblue;
font-weight: 400;
/* box-shadow: 1px 1px 10px 1px lightblue; */
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

const Button = styled.button`
margin-top: 10px;
margin-bottom: 10px;
border: 1px solid lightblue;
border-radius: 5px;
outline: none;
padding-left: 10px;
padding-right: 10px;
font-weight: 500;
&:active {
    border: 2px solid SteelBlue;
    box-shadow: 1px 1px 10px 1px steelblue;
}
&:hover {
    border: 2px solid SteelBlue;
    box-shadow: 1px 1px 10px 1px steelblue;
}
`;