import { createStore } from "redux"

interface HackerStory {
    id: number;
    title: string;
}

interface HackerAppState {
    stories: HackerStory[]
}

export default function createHackerNewsStore() {
    const store = createStore(reducer);
    return store;
}

interface Action<T> {
    type: string;
    payload: T;
}


const defaultHackerAppState: HackerAppState = {
    stories: []
}
function reducer(state: HackerAppState = defaultHackerAppState, action: Action<HackerStory[]>): HackerAppState {
    if (action.type === "STORIES_UPDATED") {
        return {
            stories: action.payload
        };
    }
    return state;
}
