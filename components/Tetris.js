import React, { useState } from 'react';

import { createStage, checkCollision } from '../helpers';
import { StyledTetrisWrap, StyledTetris} from './styles/StyledTetris';

import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

import Stage from './Stage';
import Display from './Display'
import Button from './Button';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player, resetPlayer); 

    console.log('re-render');

    const movePlayer = dir => {
        if (!checkCollision(player, stage, {x: dir, y: 0})){
            updatePlayerPos({x: dir, y: 0});
        }
    }

    const startGame = () => {
        // reset here
        console.log('test start');
        setStage(createStage());
        resetPlayer();
        setGameOver(false);
    }

    const drop = () => {
        if(!checkCollision(player, stage, {x:0, y: 1})){
            updatePlayerPos({x: 0, y: 1, collided: false});
        }
        else {
            if(player.pos.y < 1) {
                console.log('Game over');
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({x: 0, y: 0, collided: true});
        }        
    };

    const dropPlayer = () => {
        drop();
    }

    const move = ({keyCode}) =>{
        console.log('key=', keyCode);
        if(!gameOver) {
            if(keyCode == 37) { //left
                movePlayer(-1);
            }
            else if(keyCode == 39) {
                movePlayer(1);
            }
            else if(keyCode == 40) {
                dropPlayer();
            }
        }
    }

    return (
        <StyledTetrisWrap role="Button" tabIndex="0" onKeyDown={e => move(e)}>
            <StyledTetris>
            <Stage stage={stage} />
            <aside>
                {gameOver ? (
                    <Display gameOver={gameOver} text = "Game over" />
                ) : (
                <div>
                    {/* <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Level" /> */}
                </div>
                )}
                <Button callback={startGame} />                
            </aside>
            </StyledTetris>
        </StyledTetrisWrap>
    );
};

export default Tetris;