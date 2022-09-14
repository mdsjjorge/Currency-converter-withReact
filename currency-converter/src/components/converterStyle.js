import styled from 'styled-components';

const Container = styled.section`
text-align: center;
    color: black;
    box-shadow: 0 0 150px rgb(197, 190, 190);
    padding: 40px;
    border-radius: 20px;
    background: ${props => props.themeColor};
    .inputs{
        padding: 0 10px;
        .input-number{
            margin: 5px;
            padding: 0 10px;
            width: 100px;
            height: 30px;
            border-radius: 5px;
            border: none;
        }
        .input-button{
            margin: 5px;
            padding: 5px;
            background: none;
            border: 1px solid white;
            font-weight: bolder;
            cursor: pointer;
        }
    }
    .result{
        display: none;
        font-weight: bold;
        letter-spacing: 1px;
    }
    &:hover{
        background: rgb(183, 219, 219);
        cursor: crosshair;
    }
`
// herance:
// export const SubContainer = styled(Container)`
//     background: green;
// `

export { Container, };
