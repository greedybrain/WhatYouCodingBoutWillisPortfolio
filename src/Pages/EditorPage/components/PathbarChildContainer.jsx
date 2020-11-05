import React from 'react'

import '../../../Assets/PathBarChildContainerStyles/pathBarChildContainer.css'

const PathbarChildContainer = () => {
        return (
                <div className="pathbar">
                        <ul>
                                <li className="readme paths">
                                        <div className="readme_icon">
                                                <i className="fas fa-user-secret"></i>
                                        </div>
                                        <div className="readme_label">
                                                READ.me
                                        </div>
                                </li>
                                <li className="projects paths">
                                        <div className="projects_icon">
                                                <i className="fas fa-code-branch"></i>
                                        </div>
                                        <div className="projects_label">
                                                PROJECTS.mine
                                        </div>
                                </li>
                        </ul>
                        <div className="path">
                                <div className="path_name">
                                        Naya Willis &gt; READ.me
                                </div>
                        </div>
                </div>
        )
}

export default PathbarChildContainer
