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
        console.log(this)
        this.setState( { number: this.state.number + 1})
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    onClick={this.incHandler}
                    label={'+'}
                />
                 <Button
                    onClick={() =>this.setState( { number: this.state.number - 1})}
                    label={'-'}
                />
            </div>
        )
    }
}

export default Counter