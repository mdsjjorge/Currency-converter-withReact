import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    color: ${props => props.color};
    box-shadow: 0 4px 8px rgb(197, 190, 190);
    padding: 40px;
    border-radius: 20px;
    background: white;
    /* h2{
        font-size: 35px;
        color: red;
    } */
    &:hover{
        background: rgb(242, 239, 239);
    }
`
const Nav = styled.div`
    background: green;
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
`

// export const SubContainer = styled(Container)`
//     background: green;
// `



export { Container, Nav };
