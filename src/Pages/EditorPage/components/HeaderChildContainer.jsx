import React from 'react'

import '../../../Assets/HeaderChildContainerStyles/headerChildContainer.css'
import LogoChildComponent from './LogoChildComponent'
import WindowMockButtonsChildComponent from './WindowMockButtonsChildComponent'

const HeaderChildContainer = () => {
        return (
                <header className="header_child_container">
                        <WindowMockButtonsChildComponent />
                        <LogoChildComponent />
                </header>
        )
}

export default HeaderChildContainer
