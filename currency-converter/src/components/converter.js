import React, { Component } from 'react';

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
        console.log(this.state);
    }

    render() {
        return (
            <>
                <h2> 
                    {this.props.Acurrency} to {this.props.Bcurrency} 
                </h2>
                <input 
                    type={'text'} 
                    onChange={(event)=>{
                        this.setState({Acurrency_value:
                            event.target.value})
                    }}
                >                    
                </input>
                <input 
                    type={'button'} 
                    value={'converter'}
                    onClick={this.converter}                   
                > 
                </input>
                <p>Result</p>
            </>
        )
    // todo componente deve retornar apenas uma div
    }    
}
