import React from 'react'

import '../../../Assets/SplitScreenChildContainerStyles/splitScreenChildContainer.css'
import LeftSpaceChildContainer from './LeftSpaceChildContainer'
import MinimapChildComponent from './MinimapChildComponent'
import RightSpaceChildContainer from './RightSpaceChildContainer'

const SplitScreenChildContainer = () => {
        return (
                <div className="split_screen_container">
                        <LeftSpaceChildContainer />
                        <RightSpaceChildContainer />
                        <MinimapChildComponent />
                </div>
        )
}

export default SplitScreenChildContainer
