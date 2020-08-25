import styled from 'styled-components';

const ListItem = styled.li`
    position: relative;
    padding-left: 20px;
    font-size: ${({ theme }) => theme.fontSize.xxs};
    list-style: none;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: ${({ theme, type }) => theme[type] || theme.primary};
    }
`;

export default ListItem;
