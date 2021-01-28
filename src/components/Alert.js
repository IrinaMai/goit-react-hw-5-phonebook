import React from 'react'
import { CSSTransition } from "react-transition-group";
import '../index.css'


const Alert = ({ alert, canselAlert }) => {
    
console.log(alert)
    return (
     <CSSTransition
        in={alert}
        timeout={500}
        classNames="notification"
            unmountOnExit>
            <div className='notification'>
            <h2>This contact already exist!</h2>
            </div>
        </CSSTransition> 
    );
}

export default Alert;

