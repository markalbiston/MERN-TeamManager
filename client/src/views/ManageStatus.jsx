import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ButtonSet from '../components/ButtonSet';
import {Link} from '@reach/router';

export default (props) => {
    const {players, setPlayers, gameId} = props;
    useEffect(()=> {
        axios.get('http://localhost:8000/api/players/all')
        .then(response => {
            setPlayers(response.data);
        })
    },[])
    return(
        <div>
            <h1>Player Status - Game {gameId}</h1>
            <h3>
                <Link to="/status/game/1">Game 1</Link> | <Link to="/status/game/2">Game 2</Link> | <Link to="/status/game/3">Game 3</Link>
            </h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Players</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player,index) => 
                    <tr key={index}>
                        <td>{player.name}</td>
                        <td>
                            <ButtonSet playerId={player._id} gameId={gameId}/>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}