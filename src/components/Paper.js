import React from 'react'
import MuiPaper from 'material-ui/Paper'

const Paper = (props) => (
    <MuiPaper>
        <ul>
        {props.children.map(child => <li>{child}</li>)}
        </ul>
    </MuiPaper>
)

export default Paper