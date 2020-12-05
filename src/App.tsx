// import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {connect} from "react-redux";
import {Action} from "./types";
import {updateStories} from "./store/stories";

interface IAppProps {
    dispatch: (action: Action<any>) => void
}
function App(props: IAppProps) {
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={() => {
                    props.dispatch(updateStories([{id: 2, title: "буратино утонул"}]))
                }}>Put stuff to store</button>
            </header>
        </div>
    );
}

export default connect()(App);