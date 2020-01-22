import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import PlayerForm from './PlayerForm';

export default (props) => {
    const {players, setPlayers} = props;

    const [newPlayer, setNewPlayer] = useState({
        name: "",
        position: "",
        status: {
            game1: 0,
            game2: 0,
            game3: 0,
        }
    })
    const [errors, setErrors] = useState([]);
    // console.log(newPlayer)

    const addNewPlayer = (newPlayer1) => {
        // newPlayer.preventDefault();
        axios.post('http://localhost:8000/api/players/new', newPlayer1)
        .then(response => {
            setPlayers([...players, response.data]);
            navigate('/players/list')
        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }



    return(
        <div>
            <h3>
                <Link to="/players/list">List</Link> | <Link to="/players/addplayer">Add Player</Link>
            </h3>
            <h3>Add Player</h3>
            <PlayerForm newPlayer={newPlayer} setNewPlayer={setNewPlayer} onSubmitProp={addNewPlayer} />
            {errors.map((err, index) => <p className="error" key={index}>{err}</p>)}
        </div>
    )
}