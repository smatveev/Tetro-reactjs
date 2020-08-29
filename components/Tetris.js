import React from 'react';

import { createStage } from '../helpers';
import { StyledTetrisWrap, StyledTetris} from './styles/StyledTetris';

import Stage from './Stage';
import Display from './Display'
import Button from './Button';
import StartButton from './Button';

const Tetris = () => {

    return (
        <StyledTetrisWrap>
            <StyledTetris>
            <Stage stage={createStage()} />
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Level" />
                </div>
                <StartButton />                
            </aside>
            </StyledTetris>
        </StyledTetrisWrap>
    )

}

export default Tetris;