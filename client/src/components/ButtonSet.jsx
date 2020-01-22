import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default (props) => {
    const {playerId, gameId} = props;
    const [player, setPlayer] = useState();
    // const [playing, setPlaying] = useState(false);
    // const [notPlaying, setNotPlaying] = useState(false);
    // const [undecided, setUndecided] = useState(true);
    // const [game, setGame] = useState({gameId});

    useEffect(()=> {
        axios.get('http://localhost:8000/api/players/' + playerId)
        .then(response => {
            setPlayer(response.data);
        })
    },[])
    // console.log(player);
    const onPlayingHandler = (statusNum) => {
        console.log("Inside onPlayingHandler");
        const updatedPlayer = {
            ...player,
            status: {
                ...player.status,
                [`game${gameId}`]: statusNum
            }
        }
        axios.put('http://localhost:8000/api/players/update/' + playerId, updatedPlayer)
        .then(response => {
                setPlayer(updatedPlayer);
        })
        .catch(err => {
            console.log("ERROR UPDATING PLAYER")
        })
    }
        // setPlaying(true);
        // setNotPlaying(false);
        // setUndecided(false);

   
    return(
        <div>
            {/* {playing 
            ? <button style={{backgroundColor: "#4CAF50"}} onClick={onPlayingHandler}>Playing</button>
            : <button onClick={onPlayingHandler}>Playing</button>
            }
            {notPlaying
            ? <button style={{backgroundColor: "#FF0000"}} onClick={onNotPlayingHandler}>Not Playing</button>
            : <button onClick={onNotPlayingHandler}>Not Playing</button>
            }
            {undecided
            ? <button style={{backgroundColor: "#FFFF00"}} onClick={onUndecidedHandler}>Undecided</button>
            : <button onClick={onUndecidedHandler}>Undecided</button>
            } */}
            {/* {player.status.{gameId} === 1} */}
            <button style={{backgroundColor:player && player.status[`game${gameId}`] === 1 ? "#4CAF50" : ""}} onClick={(e) => onPlayingHandler(1)}>Playing</button>
            <button style={{backgroundColor:player && player.status[`game${gameId}`] === -1 ? "#FF0000" : ""}} onClick={(e) => onPlayingHandler(-1)}>Not Playing</button>
            <button style={{backgroundColor:player && player.status[`game${gameId}`] === 0 ? "#FFFF00" : ""}} onClick={(e) => onPlayingHandler(0)}>Undecided</button>
        </div>
    )
}