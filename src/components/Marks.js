import React, { Component } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import axios from "axios";
import "./Marks.css";
class Marks extends Component {
  state = {
    rollno: 0,
    name: "",
    maths: 0,
    chem: 0,
    phy: 0,
    rollnoError: "",
    nameError: "",
    mathsmarksError: "",
    phymarksError: "",
    chemmarksError: "",
    total: 0,
    percentage: 0,
  };
  validate = () => {
    let isValid = true;
    if (!this.state.rollno) {
      this.setState({
        rollnoError: "This field is required",
      });
    } else {
      this.setState({
        rollnoError: "",
      });
    }
    if (this.state.name.length < 4) {
      isValid = false;
      this.setState({
        nameError: "* Length of the name should be greater than 3",
      });
    } else {
      this.setState({
        nameError: "",
      });
    }
    if (this.state.maths < 0 || this.state.maths > 100) {
      isValid = false;
      this.setState({
        mathsmarksError: "* Marks should be >=0 or <=100",
      });
    } else {
      this.setState({
        mathsmarksError: "",
      });
    }

    if (this.state.chem < 0 || this.state.chem > 100) {
      isValid = false;
      this.setState({
        chemmarksError: "* Marks should be >=0 or <=100",
      });
    } else {
      this.setState({
        chemmarksError: "",
      });
    }

    if (this.state.phy < 0 || this.state.phy > 100) {
      isValid = false;
      this.setState({
        phymarksError: "* Marks should be >=0 or <=100",
      });
    } else {
      this.setState({
        phymarksError: "",
      });
    }

    return isValid;
  };
  calTotal() {
    return this.state.maths + this.state.phy + this.state.chem;
  }
  calPercentage() {
    return (
      ((this.state.maths + this.state.phy + this.state.chem) * 100) /
      300
    ).toFixed(3);
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (
      name === "maths" ||
      name === "phy" ||
      name === "chem" ||
      name === "rollno"
    ) {
      this.setState({
        [name]: parseInt(value),
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };
  async handleSubmit(event) {
    event.preventDefault();
    let total = this.calTotal();
    let percentage = this.calPercentage();
    if (this.validate()) {
      await this.setState({
        total: total,
        percentage: percentage,
        nameError: "",
        marksError: "",
      });
      const new_student = {
        rollno: this.state.rollno,
        sname: this.state.name,
        maths: this.state.maths,
        chemistry: this.state.chem,
        physics: this.state.phy,
        total: this.state.total,
        percentage: this.state.percentage,
      };
      axios
        .post("/", new_student)
        .then((res) => console.log(res))
        .then((data) => console.log(data));
      console.log(this.state);
    } else {
      console.log("Enter data correctly");
    }
    window.location.reload(false);
  }
  render() {
    return (
      <div className="marks">
        <Form className="container">
          <Form.Group className="col-6">
            <Form.Label className="mt-2 font-weight-bold">
              Student Roll Number
            </Form.Label>
            <Form.Control
              type="number"
              name="rollno"
              placeholder="Enter Student Roll No."
              onChange={(e) => this.handleChange(e)}
            />
            <p className="text-danger font-weight-bold font-italic">
              {this.state.rollnoError}
            </p>
          </Form.Group>
          <Form.Group className="col-6">
            <Form.Label className="mt-2 font-weight-bold">
              Student Name
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Student Name"
              onChange={(e) => this.handleChange(e)}
            />
            <p className="text-danger font-weight-bold font-italic">
              {this.state.nameError}
            </p>
          </Form.Group>
          <Form.Group className="col-6">
            <Form.Label className="mt-2 font-weight-bold">Maths</Form.Label>
            <Form.Control
              type="number"
              name="maths"
              placeholder="Enter Marks"
              onChange={(e) => this.handleChange(e)}
            />
            <p className="text-danger font-weight-bold font-italic">
              {this.state.mathsmarksError}
            </p>
          </Form.Group>
          <Form.Group className="col-6">
            <Form.Label className="mt-2 font-weight-bold">Chemistry</Form.Label>
            <Form.Control
              type="number"
              name="chem"
              placeholder="Enter Marks"
              onChange={(e) => this.handleChange(e)}
            />
            <p className="text-danger font-weight-bold font-italic">
              {this.state.chemmarksError}
            </p>
          </Form.Group>
          <Form.Group className="col-6">
            <Form.Label className="mt-2 font-weight-bold">Physics</Form.Label>
            <Form.Control
              type="number"
              name="phy"
              placeholder="Enter Marks"
              onChange={(e) => this.handleChange(e)}
            />
            <p className="text-danger font-weight-bold font-italic">
              {this.state.phymarksError}
            </p>
          </Form.Group>
          <Form.Group className="ml-3 mt-2">
            <Button onClick={(e) => this.handleSubmit(e)} type="submit">
              Submit Marks
            </Button>
          </Form.Group>
        </Form>
        <Alert variant="warning" className="container d-grid grid-2 p-3">
          <span className="font-weight-bold">
            Total Marks : {this.calTotal()}
          </span>
          <span className="font-weight-bold">
            Percentage : {this.calPercentage()}
          </span>
        </Alert>
      </div>
    );
  }
}

export default Marks;
