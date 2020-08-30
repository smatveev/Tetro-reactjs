import React from 'react';

import { StyledButton } from './styles/StyledButton';

const Button = ({ callback }) => (
    <StyledButton onClick={callback}>Start game</StyledButton>
)

export default Button;