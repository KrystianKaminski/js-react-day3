import React from 'react'
import Button from './components/Button';

class Counter extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    {this.props.startNumber}
                </h1>
                <Button
                    onClick={() => alert('Works!')}
                />
            </div>
        )
    }
}

export default Counter