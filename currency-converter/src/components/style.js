import styled from 'styled-components';

const HeaderDefault = styled.section`
    width: 100vw;
    height: 15vh;
    position: absolute;
    top: 0;
    left: 0;
    padding: 30px;
    .header-main{
        display: flex;
        justify-content: space-between;
    }
    .link{
        background-color: ${props => props.themeColor};
        width: 40px;
        height: 30px;
        border-radius: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        margin-top: 3px;
    }
`
const FooterDefault = styled.section`
    width: 100vw;
    height: 20vh;
    padding: 30px;
    position: absolute;
    bottom: 0;
    left: 0;
    .footer-main{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .reference{
            display: flex;
            justify-content: center;
            align-items: center;
            ul{
                list-style: none;                
                text-align: start;
                margin-left: 15px;
            }
            a{
                text-decoration: none;
                color: green;
            }
        }
        .jm{
            display: flex;
            justify-content: center;
            align-items: center;
            a{
                margin: 0 5px;
            }
        }
    }
    @media screen and (max-width: 500px) {    
    .footer-main{
        display: block;
        .jm{
            margin: 20px;
        }
    }
  }

`
export { HeaderDefault, FooterDefault };
