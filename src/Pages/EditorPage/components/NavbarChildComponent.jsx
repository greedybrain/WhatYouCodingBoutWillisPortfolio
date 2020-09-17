import React from 'react'

import '../../../Assets/NavbarChildComponentStyles/navbarChildComponentStyles.css'

const NavbarChildComponent = () => {
        return (
                <div className="navbar_child_component">
                        <div className="nav_items">
                                <ul>
                                        <li>About</li>
                                        <li>Projects</li>
                                </ul>
                        </div>
                        <div className="social_items">
                                <ul>
                                        <li>FB</li>
                                        <li>Twitter</li>
                                        <li>LinkedIn</li>
                                </ul>
                        </div>
                </div>
        )
}

export default NavbarChildComponent
