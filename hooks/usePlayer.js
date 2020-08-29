import { useState } from 'react';

import {rndTetros} from '../terto';

export const usePlayer = () => {
    //const [player, setPlayer] = useState()

    const playerState = useState({
        pos: {x:0, y:0},
        tetro: rndTetros().shape,
        collided: false,
    });
    const player = playerState[0];
    const setPlayer = playerState[1];

    return [player];
}