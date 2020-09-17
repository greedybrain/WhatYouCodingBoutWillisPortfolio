import React from 'react'

import '../../../Assets/EditorBodyChildContainerStyles/editorBodyChildContainer.css'
import ExplorerChildContainerComponent from './ExplorerChildContainerComponent'
import InnerWorkspaceChildContainer from './InnerWorkspaceChildContainer'

const EditorBodyChildContainer = () => {
        return (
                <div className="editor_body_container">
                        <ExplorerChildContainerComponent />
                        <InnerWorkspaceChildContainer />
                </div>
        )
}

export default EditorBodyChildContainer
