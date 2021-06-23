import React, { Component } from "react";
import API from "../utils/API";
import Emplist from "./Emplist";
import SearchForm from "./SearchForm";

class Container extends Component {
    state = {
        search: "",
        employees:[]
    }

    componentDidMount() {
        API.getEmployees()
          .then((res) =>
            this.setState({
              employees: res.data.results,
            })
          )
          .catch((err) => console.log("Error: ", err));
      }

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({ search: value });
      };

    handleFormSubmit = (event) => {
        event.preventDefault();
      };

      
  render() {
      console.log("State results: ", this.state.employees)
    return (
      <>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className="container mt-4">
        {this.state.employees.map(employees =>  (
          <Emplist
            state={this.state}
            firstName={employees.name.first}
            lastName={employees.name.last}
            cell={employees.cell}
            image={employees.picture.large}
            email={employees.email}
          />
        ))}
        </div>
      </>
    );
  }
}

export default Container;