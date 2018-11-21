import React from 'react'

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';


class Navigation extends React.Component {
    state = {
        isDrawerOpen: true
    }
    
    render() {
        return ( 
        <div>
            <AppBar
                title="Twoja kaloria"
                onLeftIconButtonClick = {() => alert('Click')}
            />
            <Drawer
            docked={false}
            width={200}
            open={this.state.isDrawerOpen}
            onRequestChange={(open) =>console.log(open)}
            >
            </Drawer>
        </div>
    )
    }
}

export default Navigation