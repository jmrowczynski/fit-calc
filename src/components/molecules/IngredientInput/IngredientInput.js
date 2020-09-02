import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 30px 30px;
    align-items: center;
    grid-gap: 5px;
`;

const IgredientInput = () => (
    <StyledWrapper>
        <Input inputName="ingredient-1" secondary placeholder="Tomato" />
        <Input inputName="ingredient-1-quantity" secondary placeholder="20g" />
        <ButtonIcon />
        <ButtonIcon plus />
    </StyledWrapper>
);

export default IgredientInput;
