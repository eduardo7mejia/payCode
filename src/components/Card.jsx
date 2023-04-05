import styled from 'styled-components';
import { BsArrowDown } from 'react-icons/bs';
const Card = ({ children, titlecard, textMoney, backgroundColor, color, textSub, angle, top, estado }) => {
    return (
        <CardDashboard>
            <div>
                <h1>{titlecard}</h1>
                <p>{textMoney} {estado === true && <span>mxn</span>}</p>
            </div>
            <Bullet
                backgroundColor={backgroundColor}
                color={color}
                angle={angle}
                top={top}
            >
                <i><BsArrowDown size='1.2rem'></BsArrowDown></i>
                <p>{textSub}</p>
            </Bullet>
            {children}
        </CardDashboard>
    )
}

export default Card

export const CardDashboard = styled.div`
    background-color: #ffffff; 
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    padding-inline: 2rem;
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1.9fr 0.1fr;   
    /* justify-items: center;
    align-items: center;
    justify-content: center;
    align-content: center; */
    h1{
        font-size: 2rem;
        color: #232935be;
    }
    p{
        font-weight: bold;
        font-size: 3rem;
        color: #232935;
    }
    span{
        font-size: 1.5rem;
        color: #b3adad;
        text-transform: uppercase;
    }
`;

export const Bullet = styled.div`
    position: relative;
    top: 1rem;
    right: -1rem;
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "#ffffff")};
    font-weight: bold;
    width: 7rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    overflow: hidden;
    p{
        font-size: 1.3rem;
        color: ${(props) => (props.color ? props.color : "#ffffff")};
    }
    i{
        transform: rotate(${props => props.angle}deg);
        position: relative;
        top: ${(props) => (props.top ? props.top : "0px")};
    }
    svg{
        font-weight: bold;
        color: ${(props) => (props.color ? props.color : "#ffffff")};
    }

`;
