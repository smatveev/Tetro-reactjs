import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETRO } from '../terto';

const Cell = ({ type }) => (
    <StyledCell type={'L'} color={TETRO['L'].color}>cell</StyledCell>
)

export default Cell;