import styled from 'styled-components';
import successIcon from 'assets/images/icons/success.svg';
import failIcon from 'assets/images/icons/fail.svg';

const ActionResultModal = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 270px;
    height: 270px;
    background-image: url(${({ fail }) => (fail ? failIcon : successIcon)});
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 50%;
    box-shadow: 6px 4px 46px -24px rgba(0, 0, 0, 0.75);
`;

export default ActionResultModal;
