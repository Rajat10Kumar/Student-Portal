import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      maths: 0,
      phy: 0,
      chem: 0,
      total: 0,
      percentage: 0,
      sname: "",
    };
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleClose = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  async handleEdit() {
    const rollno = this.props.location.state.from.rollno;
    await this.setState({
      total: this.calTotal(),
      percentage: this.calPercentage(),
    });
    const data = {
      sname: this.state.sname,
      maths: this.state.maths,
      physics: this.state.phy,
      chemistry: this.state.chem,
      total: this.state.total,
      percentage: this.state.percentage,
    };
    axios.post("/" + rollno, data).then((res) => console.log(res));
    this.handleClose();
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "maths" || name === "phy" || name === "chem") {
      this.setState({
        [name]: parseInt(value),
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
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
  render() {
    return (
      <div>
        {this.props.edit}
        <div className="container" style={{ margin: "100px 650px" }}>
          <Button variant="primary" onClick={this.handleClose}>
            Update
          </Button>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="container">
              <Form.Group className="col-10">
                <Form.Label className="mt-2 font-weight-bold">
                  Student Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="sname"
                  placeholder="Edit Student Name"
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group className="col-10">
                <Form.Label className="mt-2 font-weight-bold">Maths</Form.Label>
                <Form.Control
                  type="number"
                  name="maths"
                  placeholder="Edit Marks"
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group className="col-10">
                <Form.Label className="mt-2 font-weight-bold">
                  Chemistry
                </Form.Label>
                <Form.Control
                  type="number"
                  name="chem"
                  placeholder="Edit Marks"
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group className="col-10">
                <Form.Label className="mt-2 font-weight-bold">
                  Physics
                </Form.Label>
                <Form.Control
                  type="number"
                  name="phy"
                  placeholder="Edit Marks"
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Edit;
