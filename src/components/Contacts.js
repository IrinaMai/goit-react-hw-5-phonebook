import React from 'react';

const Contacts = ({ list, deleteContactById }) => {
    const deleteContact = (e) => {
        const id = e.target.dataset.id
        deleteContactById(id)
    }
 
    return (
        <ul>
        {list.map((item) => {
            return (
                <li key={item.id}>
                    <p>{item.name}: {item.number}</p>
                    <button type="button" data-id = {item.id} onClick={deleteContact} >Delete</button>
                </li>
            )
        })}
        </ul>

    )
}

export default Contacts