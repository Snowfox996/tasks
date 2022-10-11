import React from "react";
import "./App.css";
import logo from "./assets/vslogo.png";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Hello this is my header</h1>
            <img src={logo} alt="A Picture of the VSCode logo" />
            <p>Hello World! COS420</p>
            <p>Michael Lally</p>
        </div>
    );
}

export default App;
