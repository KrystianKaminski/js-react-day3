import React from 'react'
import MuiPaper from 'material-ui/Paper'

const style = {
    margin: 10,
    padding: 10
}
const Paper = (props) => (
    <MuiPaper
        style={style}
    >
    {props.children}
    </MuiPaper>
)

export default Paper