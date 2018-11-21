import React from 'react'
import Button from './components/Button';

class Counter extends React.Component {
    constructor(props) {
        super()

        this.state = {
            number: props.startNumber
        }
    }

    incHandler() {
        this.setState( { number: this.state.number + 1})
    }

    decHandler() {
         this.setState( { number: this.state.number - 1})
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    onClick={this.incHandler.bind(this)}
                    label={'+'}
                />
                 <Button
                    onClick={this.decHandler.bind(this)}
                    label={'-'}
                />
            </div>
        )
    }
}

export default Counter