import { Button, Card } from "react-bootstrap";
import boy from "../assets/boy.jpg";
import girl from "../assets/girl.jpg";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <div className="bg">
        <div className="grid-2 container">
          <div className="container">
            <Card style={{ width: "20rem" }} className="card">
              <Card.Img variant="top" src={boy} />
              <Card.Body>
                <Card.Title>Enter Marks</Card.Title>
                <Card.Text>
                  Enter Marks of students of subjects Maths , Physics and
                  Chemistry. Automatically get Total percentage and marks.
                </Card.Text>
                <Link to="/Marks">
                  <Button variant="warning" className="text-white">
                    Enter Marks
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="container">
            <Card style={{ width: "20rem" }} className="card">
              <Card.Img variant="top" src={girl} />
              <Card.Body>
                <Card.Title>View Leaderboard</Card.Title>
                <Card.Text>
                  Leaderboard to see students marks and other details. By default
                  displayed by percentage of students.
                </Card.Text>
                <Link to="/Leaderboard">
                  <Button variant="success">View Leaderboard</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
