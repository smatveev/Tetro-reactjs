import React from 'react';

import { StyledButton } from './styles/StyledButton';

const StartButton = ({ callback }) => (
    <StyledButton onclick={callback}>Start game</StyledButton>
)

export default StartButton