import React, { Component } from 'react'
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';

export class Table extends Component {
  render() {
    return (
      <div className="col-md-8">
        <table className="table table-responsive table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>LastName</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {this.props.people.map((person) =>
                    <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                        <td>{person.lastName}</td>
                        <td>{person.age}</td>
                        <td>{person.gender ? "Male" : "Female"}</td>
                    </tr>
                )}                
            </tbody>
        </table>
      </div>
    )
  }
}

export default Table
