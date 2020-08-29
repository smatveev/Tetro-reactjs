import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETRO } from '../terto';

const Cell = ({ type }) => (
    <StyledCell type={type} color={TETRO[type].color} />
)

export default Cell;