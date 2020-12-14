import React from 'react';

function Form( props ) {

    const call = props.placeCall + props.announcement + " Customer";
    return (
        <div>
            <h4>{call}</h4>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input className="userForm" type="text" name="name" id="name"></input><br></br>
                </div>

                <div>
                    <label htmlFor="name">Phone:</label>
                    <input type="text" name="phone" id="phone"></input><br></br>
                </div>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Form;