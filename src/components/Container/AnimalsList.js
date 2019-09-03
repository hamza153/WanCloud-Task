import React, { Component } from "react";
import { connect } from "react-redux";
import { viewAnimals } from "../reduxContainer/actions/index";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FormGroup, Input } from "reactstrap";

class Animalslist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      tempList: [],
      searchval: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/borlaym/585e2e09dd6abd9b0d0a/raw/6e46db8f5c27cb18fd1dfa50c7c921a0fbacbad0/animals.json"
    )
      .then(response => response.json())
      .then(data => {
        this.props.viewAnimals(data);
        this.setState({
          animals: this.props.animalsList,
          tempList: this.props.animalsList
        });
      });
  }

  handleChange(e) {
    var search = e.target.value;
    var animals = this.state.animals;
    if (search) {
      animals = this.state.tempList.filter(i => {
        return i.toLowerCase().search(search.toLowerCase()) !== -1;
      });
      this.setState({
        animals
      });
    } else {
      this.setState({
        animals: this.props.animalsList
      });
    }
  }
  render() {
    return (
      <div className="container">
        <h1
          style={{
            color: "#3CB371",
            textAlign: "center",
            textDecoration: "underline"
          }}
        >
          Animals List:{" "}
        </h1>
        <FormGroup>
          <Input
            type="text"
            placeholder="Search..."
            onChange={this.handleChange}
          />
        </FormGroup>
        <ListGroup>
          {this.state.animals.length > 0 ? (
            this.state.animals.map((animal, index) => {
              return (
                <ListGroupItem color="success" key={index}>
                  {animal}
                </ListGroupItem>
              );
            })
          ) : (
            <label
              style={{ color: "#3CB371", textAlign: "center", fontSize: "20" }}
            >
              No data exists
            </label>
          )}
        </ListGroup>
      </div>
    );
  }
}

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(Animalslist);

function mapStateToProps(state) {
  return {
    animalsList: state.animals
  };
}

function mapDispatchToProps(dispatch) {
  return {
    viewAnimals: animal => dispatch(viewAnimals(animal))
  };
}
export default List;
