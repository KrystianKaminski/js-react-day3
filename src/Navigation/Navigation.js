import React from 'react'

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';


class Navigation extends React.Component {
    state = {
        isDrawerOpen: false
    }

    toggleDrawer = () => this.setState( { isDrawerOpen: !this.state.isDrawerOpen} )
    
    render() {
        return (
            <div>
                <AppBar
                    title = {this.props.label}
                    onLeftIconButtonClick = {this.toggleDrawer}
                />
                <Drawer
                docked={false}
                width={200}
                open={this.state.isDrawerOpen}
                onRequestChange={this.toggleDrawer}
                >
                {this.props.children}
                </Drawer>
            </div>
        )
    }
}

export default Navigation