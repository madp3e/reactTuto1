import React, { Component } from 'react';

class AddTodo extends Component {
    state = { 
        title:""
     }

    onChange = (e) => {
        console.log(e.target.value)
        this.setState({
            title:e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({
            title:""
        })
    }

    render() { 
        return ( 
            <form onSubmit={this.onSubmit} style={{display:"flex"}}>
                <input type="text" 
                placeholder="Add todo.." 
                style={{flex:"10", padding:"5px"}}
                value={this.state.title}
                onChange={this.onChange}/>

                <input type="submit" 
                value="SUBMIT" 
                className="btn" 
                style={{flex:"1"}}
                />
            </form>
         );
    }
}
 
export default AddTodo;