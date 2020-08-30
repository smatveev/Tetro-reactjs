import { useState, useCallback } from 'react';

import { TETRO, rndTetros} from '../terto';
import { STAGE_WIDTH } from '../helpers';

export const usePlayer = () => {
    //const [player, setPlayer] = useState()

    // const playerState = useState({
    //     pos: {x:0, y:0},
    //     tetro: TETRO[0].shape,
    //     collided: false,
    // });
    // const player = playerState[0];
    // const setPlayer = playerState[1];

    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetro: TETRO[0].shape,
        collided: false,
      });

    const updatePlayerPos = ({x, y, collided}) => {
        setPlayer(prev => ({
            ...prev,
            pos: {x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided, 
        }));
    };

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: {x: STAGE_WIDTH/2 - 2, y: 0},
            tetro: rndTetros().shape,
            collided: false
        });
    }, []);

    return [player, updatePlayerPos, resetPlayer];
};