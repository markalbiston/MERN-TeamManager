import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

export default (props) => {
    const {newPlayer, setNewPlayer, onSubmitProp} = props;
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [game1, setGame1] = useState(0);
    const [game2, setGame2] = useState(0);
    const [game3, setGame3] = useState(0);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, position, game1, game2, game3});
    }




    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Player Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
                <label>Preferred Position:</label>
                <input type="text" onChange={(e) => setPosition(e.target.value)}/>
                {/* <input type="hidden" value="status:{game1: 0, game2: 0, game3: 0}"/> */}
                <input type="submit" value="ADD"/>
            </form>
        </div>
    )
}