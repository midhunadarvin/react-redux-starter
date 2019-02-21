import { ADD_MENU_ITEM, TOGGLE_MENU, TOGGLE_SIDEBAR } from '../constants/action-types';
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
