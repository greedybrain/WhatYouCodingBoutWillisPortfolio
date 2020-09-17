import React from 'react'
import PathbarChildContainer from './PathbarChildContainer'

import '../../../Assets/InnerWorkspaceChildContainerStyles/innerWorkspaceChildContainer.css'
import SplitScreenChildContainer from './SplitScreenChildContainer'

const InnerWorkspaceChildContainer = () => {
        return (
                <div className="inner_workspace_container">
                        <PathbarChildContainer />
                        <SplitScreenChildContainer />
                </div>
        )
}

export default InnerWorkspaceChildContainer
