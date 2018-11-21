import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'

const style = {
    margin: 10
}

const Button = (props) => (
    <div>
        <RaisedButton
            label={props.label}
            primary={Boolean(Math.round(Math.random()))}
            style={style}
            onClick={props.onClick}
        />
    </div>
)

export default Button