import React from 'react';
import axios from 'axios';

export default (props) => {

    const deletePlayer = e => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/players/delete/' + props.playerId)
        .then(response => {
            if(window.confirm("Are you sure you want to delete this player?")){
                props.successCallback();
            }
            // console.log("deleted")
        })
    }
    return(
        <button className="btn btn-danger" onClick={deletePlayer}>Delete</button>
    )
}