import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
class Leaderboard extends Component {
  state = {
    list: [],
    isLoading: true,
    hide: false,
  };
  async getData() {
    await axios
      .get("/getusers")
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          list: data["students"],
          isLoading: false,
        });
      });
  }

  componentDidMount() {
    this.getData();
  }

  handleDelete = (id) => {
    axios.delete("/" + id).then((res) => console.log(res));
    this.setState((prevState) => ({
      list: prevState.list.filter((item) => item.rollno !== id),
    }));
  };
  render() {
    return (
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Student Name</th>
              <th>Maths</th>
              <th>Chemistry</th>
              <th>Physics</th>
              <th>Total Marks</th>
              <th>Percentage</th>
              <th></th>
            </tr>
          </thead>

          {this.state.isLoading ? null : (
            <tbody>
              {this.state.list.map((item) => (
                <tr key={item.rollno}>
                  <td>{item.rollno}</td>
                  <td>{item.sname}</td>
                  <td>{item.maths}</td>
                  <td>{item.physics}</td>
                  <td>{item.chemistry}</td>
                  <td>{item.total}</td>
                  <td>{item.percentage}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => this.handleDelete(item.rollno)}
                    >
                      Delete
                    </Button>
                    <Link
                      to={{
                        pathname: "/Edit",
                        state: { from: item },
                      }}
                      // query={{ edit: item }}
                    >
                      <Button
                        className="mx-3 text-white"
                        variant="warning"
                        // onClick={() => this.handleEdit(item.rollno)}
                      >
                        Edit
                      </Button>

                      {/* <Edit edit={item} /> */}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </Table>
      </div>
    );
  }
}
export default Leaderboard;
