import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

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

const ProductsForm = () => (
    <StyledWrapper>
        <StyledHeading as="h2" size="xl">
            Add product
        </StyledHeading>
        <form>
            <InnerWrapper>
                <Input
                    inputName="type"
                    labelText="Recipe type"
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
                    labelText="Product name"
                    inputName="name"
                    secondary
                    placeholder="Tomato"
                />
                <Input
                    inputName="energy"
                    labelText="Product energy value"
                    id="energy"
                    secondary
                    placeholder="200"
                />
            </InnerWrapper>
            <InnerWrapper>
                <Heading as="legend" size="xs" color="darkgrey">
                    Nutritional composition (100g)
                </Heading>
                <Input
                    inputName="fat"
                    labelText="Fat value"
                    secondary
                    placeholder="10"
                />
                <Input
                    inputName="carbohydrates"
                    labelText="Carbohydrates type"
                    secondary
                    placeholder="20"
                />
                <Input
                    inputName="protein"
                    labelText="Protein value"
                    secondary
                    placeholder="15"
                />
            </InnerWrapper>
            <Button secondary>Add</Button>
        </form>
    </StyledWrapper>
);

export default ProductsForm;
