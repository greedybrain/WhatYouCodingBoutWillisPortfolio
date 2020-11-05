import React from 'react'

import '../../../Assets/NavbarChildComponentStyles/navbarChildComponentStyles.css'

const NavbarChildComponent = () => {
        return (
                <div className="navbar_child_component">
                        <div className="nav_items">
                                <ul>
                                        <li className="user_icon">
                                                <i className="fas fa-user-secret"></i>
                                        </li>
                                        <li className="projects">
                                                <i className="fas fa-code-branch"></i>
                                        </li>
                                </ul>
                        </div>
                        <div className="social_items">
                                <ul>
                                        <li className="linked_in">
                                                <i className="fab fa-linkedin"></i>
                                        </li>
                                        <li className="github">
                                                <i className="fab fa-github-square"></i>
                                        </li>
                                        <li className="dev_to">
                                                <i className="fab fa-dev"></i>
                                        </li>
                                        <li className="twitter">
                                                <i className="fab fa-twitter-square"></i>
                                        </li>
                                </ul>
                        </div>
                </div>
        )
}

export default NavbarChildComponent
