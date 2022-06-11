import { Container, Row, Col,Navbar } from "react-bootstrap";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import GuessNumber from "./components/GuessNumber";
import * as brain from 'brain.js';

function App() {
  const net = new brain.recurrent.LSTMTimeStep({
    inputSize: 2,
    hiddenLayers: [10],
    outputSize: 2,
  });
  
  // Same test as previous, but combined on a single set
  const trainingData = [
    [
      [1, 5],
      [2, 4],
      [3, 3],
      [4, 2],
      [5, 1],
    ],
  ];
  
  net.train(trainingData, { log: false, errorThresh: 0.09 });
  
  const closeToFiveAndOne = net.run([
    [1, 5],
    [2, 4],
    [3, 3],
    [4, 2],
  ]);
  console.log(closeToFiveAndOne);
  
  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  };

  return (
    <>
    <GuessNumber net={net}/>
    {/* <Navbar bg="dark" variant="dark" className="header">
    <Container>
      <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
    </Container>
  </Navbar>

  <Container style={{ width: "400px" }}>
    <Row>
      <Col>
        <AddBook id={bookId} setBookId={setBookId} />
      </Col>
    </Row>
  </Container>
  <Container>
    <Row>
      <Col>
        <BooksList getBookId={getBookIdHandler} />
      </Col>
    </Row>
  </Container>
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container> */}
    </>);
}

export default App;