import React, { Component } from 'react';

export class Adtodo extends Component {
	state={
		title:''
	}
	onSubmit=(e)=>{
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({title:''});
	}
	onChang=(e)=>this.setState({[e.target.name]:e.target.value});
	render() {
		return (
			<form style={{display:'flex'}} onSubmit={this.onSubmit}>
			<input type="text"
			name="title"
			placeholder="Add To Do"
			  style={{flex:'5', padding:'5px'}}
			  value={this.state.title}
			  onChange={this.onChang}/>

			<input
			type="submit"
             value="Submit"
             style={{flex:'1'}}
			/>
			</form>
		);
	}
}
export default Adtodo
