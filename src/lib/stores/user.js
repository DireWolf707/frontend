import { writable } from 'svelte/store';
import { goto } from '$app/navigation';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const getUser = async () => {
	try {
		const res = await axios.get(`${BASE_URL}/user/me`, {
			withCredentials: true
		});
		return [res.data, false];
	} catch (e) {
		if (e.response) return [null, true];
		return ["Server is Down! Try again Later...", true];
	}
}

const createUserStore = () => {
	const { subscribe, set } = writable();
	return {
		subscribe, set,

		loginIn: async (formData) => {
			try {
				const res = await axios.post(`${BASE_URL}/user/login`, {
					...formData
				},{
					withCredentials: true
				});
				set(res.data);
				goto('/'); //
				// return array of notification
				return [{text:'Logged In!', type:'success'}];
			} catch (e) {
				// assign text to response or null in case of Connection Error
				const text = e.response ? e.response.data.message : null;
				// return array of notification
				return [{text}];
			}
		},

		signUp: async (formData) => {
			try {
				const res = await axios.post(`${BASE_URL}/user/signup`, {
					...formData
				},{
					withCredentials: true
				});
				set(res.data);
				goto('/'); //
				return [{text:'Signed In!', type:'success'}];
			} catch (e) {
				// assign text to response or null in case of Connection Error
				let text = e.response ? e.response.data.message : null;
				// deal with multiple error scenario
				if (text){
					text = text.replace(':', ',').split(',').slice(1).map( e => {
						return {text: e.trim() };
					});
					return text;
				}
				// return array of notification
				return [{text}];
			}
		},
		
		logout: async () => {
			try {
				await axios.post(`${BASE_URL}/user/logout`,{}, {
					withCredentials: true
				});
				set(null);
				goto('/');
				return [{text:'Signed Out!', type:'warning'}];
			} catch (e) {
				// assign text to null as error can happen only in case of Connection Error
				const text = null;
				return [{text}];
			}
		},

		updateUser: async (formData) => {
			try {
				const res = await axios.post(`${BASE_URL}/user/me`, {
					...formData
				},{
					withCredentials: true
				});
				set(res.data);
				return [{text:'Account Updated!', type:'success'}];
			} catch (e) {
				const text = e.response ? e.response.data.message : null;
				return [{text}];
			}
		},

		updatePassword: async (formData) => {
			try {
				const res = await axios.post(`${BASE_URL}/user/me/password`, {
					...formData
				},{
					withCredentials: true
				});
				set(res.data);
				return [{text:'Password Updated!', type:'success'}];
			} catch (e) {
				const text = e.response ? e.response.data.message : null;
				return [{text}];
			}
		}
	}
}

export const userStore = createUserStore();