import { ADD_MENU_ITEM, TOGGLE_MENU, TOGGLE_SIDEBAR } from '../constants/action-types';

const initialState = {
	'menuItems': [
		{
			'name': 'Home',
			'icon': 'dashboard',
			'path': '/',
			'active': true
		},
		{
			'name': 'Overview',
			'icon': 'list',
			'children': [
				{
					'name': 'submenu 1',
					'icon': 'adjust'
				}, {
					'name': 'submenu 2',
					'icon': 'address-card'
				}
			]
		},
		{
			'name': 'Reports',
			'icon': 'clock-o',
			'path': '/reports'
		},
		{
			'name': 'Analytics',
			'icon': 'th'
		}
	],
	sidebarActive: false
};

export const sidebarReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MENU_ITEM:
			return {
				...state,
				'menuItems': [...state.menuItems, action.payload]
			};
		case TOGGLE_MENU: {
			const menu = state.menuItems.map((element) => {
				if (element.name === action.payload.name) {
					element.active = !element.active;
				} else {
					element.active = false;
				}

				return element;
			});

			return {
				...state,
				'menuItems': [...menu]
			};
		}
		case TOGGLE_SIDEBAR: {
			return {
				...state,
				sidebarActive: !state.sidebarActive
			}
		}
		default:
			return state;
	}
};
