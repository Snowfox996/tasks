import React from "react";
import "./App.css";
import logo from "./assets/vslogo.png";
import { Button, Col, Container, Row } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>Hello this is my header</h1>
            <img src={logo} alt="A Picture of the VSCode logo" />
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "40px",
                                height: "80px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <ul>
                            <li>First item in my list</li>
                            <li>Second item in my List</li>
                            <li>Third item in my List</li>
                        </ul>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "40px",
                                height: "80px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
            <p>Hello World!</p>
            <p>Michael Lally</p>
        </div>
    );
}

export default App;
