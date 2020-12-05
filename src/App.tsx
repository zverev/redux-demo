// import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {connect} from "react-redux";
import {Action} from "./types";
import {HackerAppState, HackerStory, updateStories} from "./store/stories";

interface PropsFromState {
    stories: HackerStory[]
}

interface IAppProps extends PropsFromState {
    dispatch: (action: Action<any>) => void
}
function App(props: IAppProps) {
    return (
        <div className="App">
            <header className="App-header">
                {props.stories.map(({ title }) => (
                    <h1>{title}</h1>
                ))}
                <button onClick={() => {
                    props.dispatch(updateStories([{id: 2, title: "буратино утонул"}]))
                }}>Put stuff to store</button>
            </header>
        </div>
    );
}

const mapStateToProps = (state: HackerAppState): PropsFromState => ({
    stories: state.stories
})

export default connect(mapStateToProps)(App);