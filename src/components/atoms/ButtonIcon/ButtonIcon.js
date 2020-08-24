import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
    background-color: ${({ theme }) => theme.primary};
    position: relative;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 2px;
        background-color: ${({ theme }) => theme.bright};
    }
    ${({ plus }) =>
        plus &&
        css`
            &:after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 2px;
                height: 20px;
                background-color: ${({ theme }) => theme.bright};
            }
        `}
`;

export default ButtonIcon;
