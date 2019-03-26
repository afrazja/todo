import React, { Component } from 'react';

export class todoItem extends Component {
	getStye=()=>{
		
			if(this.props.todo.completed){
				return{textDecoration:'line-through'}
			}
				
				else{
					return{textDecoration:'none'}
					
				}
			}
				markComplete=()=>{
					console.log(this.props)
				}
			
		
	
	render() {
		const {id,title}=this.props.todo
		return (
			<div style={this.getStye()}>
            
            <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
            {title}
            <button  onClick={this.props.deleteItem.bind(this,id)}>delete</button>
            </p>
           
			</div>
		);
	}
}
export default todoItem
