import React from 'react'
import EditorBodyChildContainer from '../components/EditorBodyChildContainer'
import HeaderChildContainer from '../components/HeaderChildContainer'

const EditorParentContainer = () => {
        return (
                <div className="editor_container">
                        <HeaderChildContainer />
                        <EditorBodyChildContainer />
                </div>
        )
}

export default EditorParentContainer
