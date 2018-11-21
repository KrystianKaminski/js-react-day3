import React from 'react'
import Button from './components/Button';

class Counter extends React.Component {
    state = {
            number: this.props.startNumber || 0
    }

        incHandler = () => this.setState({ number: this.state.number + 1})
        decHandler = () => this.setState({ number: this.state.number - 1})
        zeroHandler = () => this.setState( { number: 0})
        defaultHandler = () => this.setState( {number: this.props.startNumber || 0})



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
                    onClick={this.decHandler}
                    label={'-'}
                />
                 <Button
                    onClick={this.zeroHandler}
                    label={'Reset to 0'}
                />
                  <Button
                    onClick={this.defaultHandler}
                    label={'Reset to default'}
                />
            </div>
        )
    }
}

export default Counter