import React, { useState } from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import IngredientInput from 'components/molecules/IngredientInput/IngredientInput';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 450px;
    margin: auto;
    ${({ theme }) => theme.tablet`
        padding: 25px;
        border-radius: 16px;
        box-shadow: 6px 4px 46px -24px rgba(0, 0, 0, 0.75);
        margin-top: 40px;
    `};
`;

const InnerWrapper = styled.section`
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
`;

const StyledHeading = styled(Heading)`
    margin-bottom: 25px;
`;

const StyledIconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
`;

const StyledTextareaWrapper = styled.div`
    margin-top: 20px;
`;

const initialState = [{ id: 0, ingredient: '', quantity: '' }];

const RecipesForm = () => {
    const [ingredientsList, setIngredientsList] = useState(initialState);

    const handleChange = (e, index, field) => {
        const { value } = e.target;
        const vals = [...ingredientsList];
        vals[index][field] = value;
        setIngredientsList([...vals]);
    };

    const addIngredient = () => {
        const randomId = parseInt(Math.random() * 10000, 10);
        setIngredientsList([
            ...ingredientsList,
            { id: randomId, ingredient: '', quantity: '' },
        ]);
    };

    const removeIngredient = index => {
        const vals = [...ingredientsList];
        vals.splice(index, 1);
        setIngredientsList([...vals]);
    };

    return (
        <StyledWrapper>
            <StyledHeading as="h2" size="xl">
                Add recipe
            </StyledHeading>
            <form
                onSubmit={e => {
                    e.preventDefault();
                }}
            >
                <InnerWrapper>
                    <Input
                        labelText="Product type"
                        select
                        name="type"
                        as="select"
                        defaultValue="breakfast"
                    >
                        <option value="breakfast">Breakfast</option>
                        <option value="dinner">Dinner</option>
                        <option value="lunch">Lunch</option>
                        <option value="supper">Supper</option>
                        <option value="dessert">Dessert</option>
                    </Input>
                    <Input
                        labelText="Recipe name"
                        inputName="name"
                        secondary
                        placeholder="Spaghetti"
                    />
                    <Input
                        labelText="Preparation time (mins)"
                        inputName="time"
                        secondary
                        placeholder="30"
                    />
                    <Input
                        labelText="Image url (option)"
                        inputName="image"
                        secondary
                        placeholder="https://randomurl.com"
                    />
                </InnerWrapper>
                <InnerWrapper>
                    <Heading as="legend" size="xs" color="darkgrey">
                        Ingredients
                    </Heading>

                    {ingredientsList.map((ingredient, index) => (
                        <IngredientInput
                            handleChangeIngredientFn={e =>
                                handleChange(e, index, 'ingredient')
                            }
                            handleChangeQuantityFn={e =>
                                handleChange(e, index, 'quantity')
                            }
                            ingredientValue={ingredientsList[index].ingredient}
                            quantityValue={ingredientsList[index].quantity}
                            key={ingredient.id}
                            id={index}
                            removeIngredientFn={() => removeIngredient(index)}
                        />
                    ))}
                    <StyledIconWrapper>
                        <ButtonIcon plus onClick={addIngredient} />
                    </StyledIconWrapper>
                    <StyledTextareaWrapper>
                        <Input
                            textarea
                            as="textarea"
                            placeholder="Description"
                            labelText="Description"
                        />
                    </StyledTextareaWrapper>
                </InnerWrapper>
                <Button secondary>Add</Button>
            </form>
        </StyledWrapper>
    );
};

export default RecipesForm;
