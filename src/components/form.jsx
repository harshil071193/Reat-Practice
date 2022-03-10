import React from 'react'
import Child from './child';
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 2,
        }
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState ({
            count: e.target.value,
        })
    }
    handleIncrement = (e) => {
        e.preventDefault()
        this.setState ({
            count: parseInt(this.state.count + 1)
        })
    }

    handleMultiply = (e) => {
        e.preventDefault()
        this.setState({
            count: this.state.count* 5
        })
    }
    handleDevide = (e) => {
        e.preventDefault()
        this.setState({
            count: this.state.count / 2
        })
    }
    render(){
        console.log("count =" + this.state.count)
        console.log("multiply =" + this.state.multiply)
        console.log("Devide =" + this.state.devide)
        return(
            <div className='form'>
                 <h2>Increment by 1</h2>

                <input type="number" name="count" value={this.state.count} placeholder="Enter a word here" onChange={this.handleChange}/>
                <button onClick={this.handleIncrement}>Increment</button>

                <h2>Multiply by 5</h2>

                
                <button onClick={this.handleMultiply}>Multiply by 5</button>

                <h2>devide by 2</h2>

                
                <button onClick={this.handleDevide}>Devide by 2</button>
                <Child count={this.state.count}  increment={this.handleIncrement} devide={this.handleDevide} multiply={this.handleMultiply}/>
            </div>
        );
    }
}

export default Form;