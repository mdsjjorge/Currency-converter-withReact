import React, { Component } from 'react';
import gh from '../img/github.png';
import gh2 from '../img/github2.png';
import lk from '../img/linkedin.png';
import {
    HeaderDefault,
    FooterDefault,
}
    from './style';

class Header extends Component {
    render() {
        return (
            <div>
                <HeaderDefault themeColor="rgb(176, 206, 206)">
                    <section>
                        <div className='header-main'>
                            <h1>Currency converter</h1>
                            <div className='link'>
                                <a
                                    href={"https://github.com/mdsjjorge/Currency-converter-withReact"}
                                    target={"_blank"}
                                    rel={"noreferrer"}
                                >
                                    <img
                                        width={"20px"}
                                        src={gh2}
                                        alt={"github"}
                                    >
                                    </img>
                                </a>
                            </div>
                        </div>
                    </section>
                </HeaderDefault>
            </div>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <div>
                <FooterDefault>
                    <section>
                        <div className='footer-main'>
                            <div className='reference'>
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
                            <div className='jm'>
                                    <p>
                                        coded by: Jorge Mendonça
                                    </p>
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
                            </div>
                        </div>
                    </section>
                </FooterDefault>
            </div>
        )
    }
}

export { Header, Footer }
