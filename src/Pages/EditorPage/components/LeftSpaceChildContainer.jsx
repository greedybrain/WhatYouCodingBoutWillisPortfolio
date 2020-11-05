import React from 'react'

import '../../../Assets/LeftSideWSStyles/leftSide.css'
import LineNumbersChildComponent from './LineNumbersChildComponent'

const LeftSpaceChildContainer = () => {
        return (
                <div className="left_side">
                        <LineNumbersChildComponent />
                        <div style={{  color: 'red' }}>
                                helloooo
                        </div>
                </div>
        )
}

export default LeftSpaceChildContainer
