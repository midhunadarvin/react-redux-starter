import fetch from 'cross-fetch';
import { ADD_MENU_ITEM, TOGGLE_MENU, TOGGLE_SIDEBAR, REQUEST_POSTS, RECEIVE_POSTS } from '../constants/action-types';
import { FETCH_POSTS_REQUEST, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS } from '../constants/api-action-types';

export const addMenuItem = menuItem => ({
	'type': ADD_MENU_ITEM,
	'payload': menuItem
});

export const toggleMenuItem = menuItem => ({
	'type': TOGGLE_MENU,
	'payload': menuItem
});

export const toggleSidebar = () => ({
	'type': TOGGLE_SIDEBAR,
	'payload': {}
});

export const requestPosts = (params) => ({
	'type': REQUEST_POSTS,
	'payload': params
})

export const receivePosts = (json) => ({
	'type': RECEIVE_POSTS,
	'payload': {
		posts: json.data.children.map(child => child.data),
    	receivedAt: Date.now()
	}
})

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))

export function fetchPosts(subreddit) {
	// Thunk middleware knows how to handle functions.
	// It passes the dispatch method as an argument to the function,
	// thus making it able to dispatch actions itself.
  
	return function(dispatch) {
	  // First dispatch: the app state is updated to inform
	  // that the API call is starting.
  
	  dispatch(requestPosts(subreddit))
  
	  // The function called by the thunk middleware can return a value,
	  // that is passed on as the return value of the dispatch method.
  
	  // In this case, we return a promise to wait for.
	  // This is not required by thunk middleware, but it is convenient for us.
  
	  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
		.then(
		  response => response.json(),
		  // Do not use catch, because that will also catch
		  // any errors in the dispatch and resulting render,
		  // causing a loop of 'Unexpected batch number' errors.
		  // https://github.com/facebook/react/issues/6895
		  error => console.log('An error occurred.', error)
		)
		.then(json =>
		  // We can dispatch many times!
		  // Here, we update the app state with the results of the API call.
  
		  dispatch(receivePosts(json))
		)
	}
  }