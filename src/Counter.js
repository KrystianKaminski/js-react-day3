import React from 'react'
import Button from './components/Button';

class Counter extends React.Component {
    constructor(props) {
        super()

        this.state = {
            number: props.startNumber
        }
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    onClick={() => alert('Works!')}
                    label={'+'}
                />
                 <Button
                    onClick={() => alert('Works!')}
                    label={'-'}
                />
            </div>
        )
    }
}

export default Counter