import React, { Component } from 'react'
import hamburger from '../pics/hamburger.png'

class Header extends Component {
    constructor() {
        super();
        this.state = {
            toggleShow: false
        }
    }

    toggleShowFunc = () => {
        this.setState(prevstate => {
            return {
                toggleShow: !prevstate.toggleShow
            }
        }

        )
    }

    render() {
        return <header>
            <div className='nav-div-outer'>
                <div className='nav-div-inner'>
                    <img className='nav-logo'
                        src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' />

                    <nav className={`nav-bar ${this.state.toggleShow ? "hide" : ""}`}>
                        <ul className='nav-links'>
                            <li>
                                <a>services</a>
                            </li>
                            <li>
                                <a>portfolio</a>
                            </li>
                            <li>
                                <a>about</a>
                            </li>
                            <li>
                                <a>team</a>
                            </li>
                            <li>
                                <a>contact</a>
                            </li>
                        </ul>

                    </nav>

                    <button className='menu-btn' onClick={this.toggleShowFunc}>Menu <img src={hamburger} /></button>

                    <nav className='nav-hidden'>
                        <ul className='nav-links-down'>
                            <li>
                                <a>services</a>
                            </li>
                            <li>
                                <a>portfolio</a>
                            </li>
                            <li>
                                <a>about</a>
                            </li>
                            <li>
                                <a>team</a>
                            </li>
                            <li>
                                <a>contact</a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>

        </header>

    }

}

export default Header






