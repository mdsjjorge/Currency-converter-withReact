import React, { Component } from 'react';
import gh from '../img/github.png'
import lk from '../img/linkedin.png'

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <h1>Currency Converter</h1>
                        <span >
                            <p>GitHub repo = {
                                <a
                                    href={"https://github.com/mdsjjorge/Currency-converter-withReact"}
                                    target={"_blank"}
                                    rel={"noreferrer"}
                                >
                                    Check
                                </a>
                            }
                            </p>
                        </span>
                    </nav>
                </header>       
            </div>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div>
                        <span>
                            <p>Reference:</p>
                        </span>
                        <ul>
                            <li>
                                <a
                                    target={"_blank"}
                                    rel="noreferrer"
                                    href={"https://www.youtube.com/watch?v=tbLziJchz48&t=1031s"}
                                >
                                    Programador BR
                                </a>
                            </li>
                            <li>
                                <a
                                    target={"_blank"}
                                    rel={"noreferrer"}
                                    href={"https://www.frankfurter.app/docs/"}
                                >
                                    Frankfurter API
                                </a>
                            </li>
                            <li>
                                <a
                                    target={"_blank"}
                                    rel={"noreferrer"}
                                    href={"https://www.youtube.com/watch?v=c52ZnFBBEos"}
                                >
                                    Instrutor Feijó
                                </a>
                            </li>
                            <li>
                                <a
                                    target={"_blank"}
                                    rel={"noreferrer"}
                                    href={"https://www.youtube.com/watch?v=R3S8DEzEn6s"}
                                >
                                    Rocketseat
                                </a>
                            </li>
                        </ul>
                    </div>
                    <span >
                        <p>
                            coded by: Jorge Mendonça
                            <a
                                target={"_blank"}
                                rel={"noreferrer"}
                                href={"https://github.com/mdsjjorge"}
                            >
                                <img
                                    width={"30px"}
                                    src={gh}
                                    alt={"github"}
                                >
                                </img>
                            </a>
                            <a
                                target={"_blank"}
                                rel={"noreferrer"}
                                href={"https://www.linkedin.com/in/mdsjjorge/"}
                            >
                                <img
                                    width={"30px"}
                                    src={lk}
                                    alt={"github"}
                                >
                                </img>
                            </a>
                        </p>
                    </span>
                </footer>
            </div>
        )
    }
}

export { Header, Footer }
