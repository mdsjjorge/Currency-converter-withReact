import React, { Component } from 'react';
import {
    Container,
}
    from './converterStyle'

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
        let result = document.querySelector('.result');
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
            let Bcurrency_value = item.rates[to].toFixed(2).replace(".", ",");
            this.setState({ Bcurrency_value });
            result.style.display = 'block';
        });
    }

    render() {
        return (
            <div>
                <Container themeColor="rgb(176, 206, 206)">
                    <section>
                        <div className='main-container'>
                            <h2>
                                {this.props.Acurrency} to {this.props.Bcurrency}
                            </h2>
                            <div className='inputs'>
                                <input
                                    className='input-number'
                                    type={'number'}
                                    id={'amount'}
                                    onChange={(event) => {
                                        this.setState({
                                            Acurrency_value:
                                                event.target.value
                                        });
                                    }}
                                >
                                </input>
                                <input
                                    className='input-button'
                                    type={'button'}
                                    value={'>>'}
                                    onClick={this.converter}
                                >
                                </input>
                            </div>
                            <p className='result'>
                                {`U$ ${this.state.Bcurrency_value}`}
                            </p>
                        </div>
                    </section>
                </Container>
                {/* <SubContainer>

                </SubContainer> */}
            </div>
        )
        // todo componente deve retornar apenas uma div
    }
}
