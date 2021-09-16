import './App.css';
import React from "react";
import DataServer from "./DataServer";

function App() {

    return (
        <div className="App">
            <header className="app_header">
                <span>Welcome</span>
            </header>
            <main className="main">
                <section className="cards_content">
                    <DataServer />
                </section>
            </main>
        </div>
    );
}

export default App;
