import React, { Component } from 'react'

export default class Registration extends Component {

    state={
        Name:"",
        Department:"",
        Rating: "",
        employees: []
      }
      
      changeHandler=(e)=>{
this.setState({[e.target.name]:e.target.value});
// console.log(this.state)
      }

      PrintContent=(e)=>{
        const empObj={
          Name: this.state.Name,
          Department: this.state.Department,
          Rating: this.state.Rating
        }
        const arr=this.state.employees;
        arr.push(empObj)
        e.preventDefault()
        this.setState({employees : arr})
        console.log(empObj,this.state)
      }


  render() {
    return (
        <div>
        <h1>
        EMPLOYEE FEEDBACK FORM
        </h1>
        <form action="">
            <label htmlFor="Name">Name</label>
            <input name='Name' type="text"  value={this.state.Name} onChange={this.changeHandler}/>
           <br/> <label htmlFor="Department">Department</label>
            <input name='Department' type="text" value={this.state.Department} onChange={this.changeHandler}/>
            <br/><label htmlFor="Rating">Rating</label>
            <input name='Rating' type="number" value={this.state.Rating} onChange={this.changeHandler}/>
           
            <br/><button onClick={this.PrintContent}>Submit</button>
            </form>
            <div id='smallContainer'>
            
          {this.state.employees.map((value,index)=>{
                 return(
                  <div id='items'>Name = {value.Name} Deparment= {value.Department} Rating= {value.Rating}  </div>
                 )
              
})
}
            </div>
    </div>
    )}}