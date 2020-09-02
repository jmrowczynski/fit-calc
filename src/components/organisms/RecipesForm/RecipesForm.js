import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

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

const StyledInputWrapper = styled.div`
    display: flex;
`;

const StyledHeading = styled(Heading)`
    margin-bottom: 25px;
`;

const RecipesForm = () => (
    <StyledWrapper>
        <StyledHeading as="h2" size="xl">
            Add recipe
        </StyledHeading>
        <form>
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
                    labelText="Preparation time"
                    inputName="time"
                    secondary
                    placeholder="30 mins"
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
                <StyledInputWrapper>
                    <Input
                        inputName="ingredient-1"
                        secondary
                        placeholder="Ingredient"
                    />
                    <Input secondary placeholder="20" />
                    <ButtonIcon />
                    <ButtonIcon plus />
                </StyledInputWrapper>
            </InnerWrapper>
            <Button secondary>Add</Button>
        </form>
    </StyledWrapper>
);

export default RecipesForm;
