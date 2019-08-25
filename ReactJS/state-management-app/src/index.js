import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Page = () => {
    return(
        <div>
            <Parent></Parent>
            <Parent></Parent>
            <Parent></Parent>
            <Parent></Parent>
        </div>
    );
}

class Parent extends Component{
    
    state = 
    {
        clickCounter : 0
    };
    
 handleAction = (event) => {
        console.log('Child button clicked: '+ this.state.clickCounter);
        this.setState({clickCounter: this.state.clickCounter+1});
    }

 resetHandler = (event) =>{
     this.setState({clickCounter:0});
 }   
    render(){
        return (
            <div>
            <Child onAction={this.handleAction} onReset={this.resetHandler}></Child>
            
            <p>{this.state.clickCounter}</p>
            </div>
        );      
    }
    
}

function Child({onAction, onReset}){
    return (
    <div>
        <span>
        <button onClick={onAction}>
        Click Me!
    </button></span>
    <span>
        <button onClick={onReset}>Reset</button>
    </span>
    </div>
    );
}



ReactDOM.render(<Page />, document.getElementById('root'));

