import { createStore } from "redux"

import hackerStoriesReducer from "./stories"

export default function createHackerNewsStore() {
    return createStore(hackerStoriesReducer);
}
