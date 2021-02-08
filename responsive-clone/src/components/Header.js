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
        this.setState( (prevState) => {
            return {
                toggleShow: !prevState.toggleShow
            }
        })
    }
            
    render() {
        return <header>
            <div className={`nav-div-outer ${this.state.toggleShow ? "drop" : ""}`}>
                <div className='nav-div-inner'>
                    <img className='nav-logo'
                        src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' />

                    <nav className='nav-bar'>
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
                        
                    <nav className={`nav-hidden ${this.state.toggleShow ? "show" : ""}`}>
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


            <div className='filler'>
                <h2>welcome to your studio!</h2>
                <h1>it's nice to meet you</h1>
                <button className='middle-btn'>tell me more</button>
            </div>

        </header>

    }

}

export default Header






