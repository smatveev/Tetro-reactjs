import { useState, useEffect } from 'react';

import {createStage} from '../helpers';

export const useStage = (player, resetPlayer) => {
   const[stage, setStage] = useState(createStage());
 
   useEffect(() => {
        const updateStage = prevStage => {
            // First flush
            const newStage = prevStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
            );

            //Draw
            player.tetro.forEach((row, y) => {
                row.forEach((value, x) => {
                    if(value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`,
                        ];
                    }
                });
            });
            // check 
            if(player.collided) {
                resetPlayer();
            }

            return newStage;

        };

        setStage(prev => updateStage(prev));
   }, [player, player.collided,
    player.pos.x,
    player.pos.y,
    player.tetromino, resetPlayer]);

   return [stage, setStage];
}