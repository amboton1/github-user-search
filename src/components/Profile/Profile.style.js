import styled from 'styled-components';
import { backgrounds, mixins } from '../../styles';

export const ProfileStyled = styled.div`
    ${mixins.componentShadow};
    height: auto;
    background: ${props => props.darkMode ? '#1E2A47' : '#fefefe'};
    margin-top: 16px;
    border-radius: 15px;
    padding-left: 24px;
    padding-top: 32px;

    span {
        a {
            color: ${props => props.darkMode && 'white'}
        }
    }

    img {
        border-radius: 50%;
    }

    @media (min-width: 768px) and (max-width: 992px) {
        padding: 40px;
    }

    .parent {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: 1fr;
        grid-column-gap: 40px;
        grid-row-gap: 0px;

        .profile-title {
            font-size: 26px;
        }
    }

    .div1 { grid-area: 1 / 1 / 2 / 2; }
    .div2 { grid-area: 1 / 2 / 2 / 3; display: flex; column-gap: 10rem; }
    .div4 { grid-area: 2 / 1 / 3 / 3; }

    .joined-text {
        margin-top: 5px;
    }

    .bio {
        h1 {
            margin-top: 0;
        }
    }

    .description {
        margin: 33px 0 23px 0;

        @media (min-width: 768px) and (max-width: 992px) {
            width: 493px;
        }
    }

    .statistics {
        border-radius: 10px;
        background: ${props => props.darkMode ? backgrounds.bigStone : backgrounds.zircon};
        display: flex;
        justify-content: space-between;
        margin-right: 24px;
        padding: 18px 15px;
        text-align: center;

        .stat-title {
            font-size: 11px;
            
            @media (min-width: 768px) and (max-width: 992px) {
                font-size: 13px;
            }
        }

        span {
            @media (min-width: 768px) {
                font-size: 22px;
            }

            font-weight: 700;
        }
    }

    .locations {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        margin-top: 24px;
        margin-bottom: 48px;
        line-height: 2.4;

        @media (max-width: 768px) {
            grid-template-columns: auto;
        }

        svg {
            margin-right: 20px;
        }
    }
`;