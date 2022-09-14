import React, { Component } from 'react';
import  { 
            Container, 
            // Nav, 
            // SubContainer 
        } 
        from './style'

export default class Converter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Acurrency_value: "",
            Bcurrency_value: 0,
        }

        this.converter = this.converter.bind(this);

    // armazena-se o valor de uma variável no estado de um componente
    // o estado é um objeto;
    // o método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido;
    }

    converter() {
        let amount = document.querySelector('#amount').value;
        let from = this.props.Acurrency;
        let to = this.props.Bcurrency;
        const HOST = 'api.frankfurter.app';

        let Res = 
            fetch(`
                https://${HOST}/latest?amount=${amount}&from=${from}&to=${to}
                `)
                .then(resp => resp.json())
                .then((data) => {
                    return data;
            });
        Res.then((item) => {
            let Bcurrency_value = item.rates[to].toFixed(2).replace(".",",");
            this.setState({Bcurrency_value});
        });
    }

    render() {
        return (
            <div>
                <Container color="blue">
                    <h2> 
                        {this.props.Acurrency} to {this.props.Bcurrency} 
                    </h2>
                    <input 
                        type={'text'} 
                        id={'amount'}
                        onChange={(event)=>{
                            this.setState({Acurrency_value:
                                event.target.value});
                        }}
                    >                    
                    </input>
                    <input 
                        type={'button'} 
                        value={'converter'}
                        onClick={this.converter}                   
                    > 
                    </input>
                    <p>US Dollar {`U$ ${this.state.Bcurrency_value}`}</p>
                </Container>
                {/* <SubContainer>

                </SubContainer> */}
            </div>
        )
    // todo componente deve retornar apenas uma div
    }    
}
