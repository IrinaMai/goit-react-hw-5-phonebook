import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../index.css'

const Header = () => {
    return (
        <>
        <CSSTransition
        in={true}
        appear
          timeout={500}
          classNames="title"
          unmountOnExit>
                <h2>Phonebook</h2>
            </CSSTransition>
            
        </>
        
    );
}

export default Header;