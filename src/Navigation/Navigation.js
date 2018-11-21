import React from 'react'

import AppBar from 'material-ui/AppBar';


const Navigation = (props) => (
    <div>
        <AppBar
            title="Twoja kaloria"
            onLeftIconButtonClick = {() => alert('Click')}
            iconClassNameRight="muidocs-icon-navigation-expand-more"

        />
    </div>
)

export default Navigation