import React from "react";
import "./App.css";
import logo from "./assets/vslogo.png";
import { Button } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Hello this is my header</h1>
            <img src={logo} alt="A Picture of the VSCode logo" />
            <ul>
                <li>First item in my list</li>
                <li>Second item in my List</li>
                <li>Third item in my List</li>
            </ul>
            <Button onClick={() => console.log("I am logged")}>
                Log Hello World
            </Button>
            <p>Hello World! COS420</p>
            <p>Michael Lally</p>
        </div>
    );
}

export default App;
