import { writable } from 'svelte/store';

import { browser } from '$app/environment';

import data from './data.js';

function createList() {
	const key = 'list';
	const empty = { id: 0, items: [] };

	let store;

	if (browser) {
		store = JSON.parse(localStorage.getItem(key)) || data;
	} else {
		store = empty;
	}

	const { subscribe, set, update } = writable(store);

	if (browser) {
		subscribe(value => localStorage.setItem(key, JSON.stringify(value)));
	}

	return {
		subscribe,
		add: item =>
			update(data => ({
				id: ++data.id,
				items: [...data.items, { ...item, id: data.id }]
			})),
		update: item =>
			update(data => ({
				id: data.id,
				items: data.items.map(entry => (entry.id === item.id ? item : entry))
			})),
		remove: item =>
			update(data => ({
				id: data.id,
				items: data.items.filter(entry => entry.id !== item.id)
			})),
		example: () => set(data),
		clear: () => set(empty)
	};
}

export const list = createList();
