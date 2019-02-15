import { ADD_MENU_ITEM, TOGGLE_MENU, TOGGLE_SIDEBAR } from '../constants/action-types';

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
