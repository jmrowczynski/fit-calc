import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 30px;
    align-items: center;
    grid-gap: 5px;
`;

const IngredientInput = ({
    id,
    removeIngredientFn,
    handleChangeIngredientFn,
    handleChangeQuantityFn,
    ingredientValue,
    quantityValue,
}) => (
    <StyledWrapper>
        <Input
            inputName={`ingredient-${id}`}
            name={`ingredient-${id}`}
            secondary
            placeholder="Ingredient"
            onChange={handleChangeIngredientFn}
            value={ingredientValue}
        />
        <Input
            inputName={`quantity-${id}`}
            name={`quantity-${id}`}
            secondary
            placeholder="20"
            onChange={handleChangeQuantityFn}
            value={quantityValue}
        />
        <ButtonIcon onClick={removeIngredientFn} />
    </StyledWrapper>
);

IngredientInput.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    removeIngredientFn: PropTypes.func.isRequired,
    handleChangeIngredientFn: PropTypes.func.isRequired,
    handleChangeQuantityFn: PropTypes.func.isRequired,
    ingredientValue: PropTypes.string.isRequired,
    quantityValue: PropTypes.string.isRequired,
};

export default IngredientInput;
