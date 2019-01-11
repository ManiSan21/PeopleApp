import React, { PureComponent } from 'react'
import Table from './Table';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';

export class Form extends PureComponent {
    constructor(){    
        super();    
        this.state = {
            name: '',
            lastName: '',
            age: 0,
            gender: true
        }
    };
    onChangeHandler=(event)=>{        
        this.setState({
            [event.target.name]:event.target.value            
        });
    }

    onSubmit = () => {                
        this.props.addPerson(this.state);    
        this.setState({
            name: '',
            lastName: '',
            age: 0,
            gender: false
        });
    }
  render() {
    return (
      <div className='row'>
        <div className='col-md-4 col-md-offset-4'>
            <div className='form'>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" className='form-control' id="name" name="name" placeholder="Enter your name" value={this.state.name} onChange={(event)=>{this.onChangeHandler(event, "name")}}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter your last name" value={this.state.lastName} onChange={(event)=>{this.onChangeHandler(event, "name")}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" className="form-control" id="age" name="age" placeholder="Enter your age" value={this.state.age} onChange={(event)=>{this.onChangeHandler(event)}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <div className="radio" id="gender" name="gender">
                        <label htmlFor="male">Male:</label>
                        <input type="radio" className="col-md-1" id="male" name="gender" value={this.state.gender} onChange={(event)=>{this.onChangeHandler(event)}}></input>
                        <label htmlFor="female">Female:</label>
                        <input type="radio" className="col-md-1" id="female" defaultChecked name="gender" value={this.state.gender} onChange={(event)=>{this.onChangeHandler(event)}}></input>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
            </div>
        </div> 
        <Table people={this.props.people}></Table>       
      </div>
    )
  }
}

export default Form
