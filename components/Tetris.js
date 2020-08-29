import React, { useState } from 'react';

import { createStage } from '../helpers';
import { StyledTetrisWrap, StyledTetris} from './styles/StyledTetris';

import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

import Stage from './Stage';
import Display from './Display'
import Button from './Button';
import StartButton from './Button';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player); 

    console.log('re-render');

    const movePlayer = dir => {

    }

    const startGame = () => {

    }

    const drop = () => {

    }

    const dropPlayer = () => {
        
    }

    const move = ({keyCode}) =>{
        console.log('key=', keyCode);
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
                    <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Level" />
                </div>
                )}
                <StartButton />                
            </aside>
            </StyledTetris>
        </StyledTetrisWrap>
    )

}

export default Tetris;