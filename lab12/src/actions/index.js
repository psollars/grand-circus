import $ from 'jquery-ajax';

// trigger the process, make the request, and call the other two actions
// url with default argument. If called without an argument (as in index.js), it
// will default to the main URL.
export function fetchReddit(url = "https://www.reddit.com/r/aww.json") {
    return function(dispatch) {
        dispatch(requestRedditData());
        $.get(url, function(data) {
            // Here is where we dig into the response JSON to find the data we actually need.
            const posts = data.data.children;
            dispatch(receiveRedditData(posts));
        });
    };
}

// Allow the reducer to update the state when the request starts loading.
function requestRedditData() {
    return {
        type: "REQUEST_REDDIT"
    };
}

// Allow the reducer to update the state when the request finishes and brings back data.
function receiveRedditData(posts) {
    return {
        type: "RECEIVE_REDDIT",
        posts
    };
}

export function gridToggle() {
    return {
        type: "LIST_GRID"
    };
}