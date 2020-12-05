import {Action} from "../types";

interface HackerStory {
    id: number;
    title: string;
}

interface HackerAppState {
    stories: HackerStory[]
}

const defaultHackerAppState: HackerAppState = {
    stories: []
}

export const updateStories = (stories: HackerStory[]): Action<HackerStory[]> => ({
    type: "STORIES_UPDATED",
    payload: stories
})

export default function reducer(state: HackerAppState = defaultHackerAppState, action: Action<any>): HackerAppState {
    if (action.type === "STORIES_UPDATED") {
        return {
            stories: action.payload
        };
    }
    return state;
}
