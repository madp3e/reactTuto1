import React, {Component} from "react"


class TodoItem extends Component {
    getStyle = () =>{
        return {
            background:"#f4f4f4",
            padding:"10px",
            borderBottom:"1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }
    render() { 
        const btnStyle = {
            background:"red",
            color:"white",
            border:"none",
            padding:"5px 10px",
            borderRadius:"50%",
            corsor:"pointer",
            float:"right"
        }
        const { id, title } = this.props.todo
        return ( 
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {" "}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
         );
    }
}
 
export default TodoItem;