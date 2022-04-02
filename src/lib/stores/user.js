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
			} catch (e) {
				if (e.response) return e.response.data.message;
				return "Server is Down! Try again Later...";
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
			} catch (e) {
				if (e.response) return e.response.data.message;
				return "Server is Down! Try again Later...";
			}
		},
		
		logout: async () => {
			try {
				await axios.post(`${BASE_URL}/user/logout`,{}, {
					withCredentials: true
				});
				set(null);
				goto('/');
			} catch (e) {
				return "Server is Down! Try again Later...";
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
			} catch (e) {
				if (e.response) return e.response.data.message;
				return "Server is Down! Try again Later...";
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
			} catch (e) {
				if (e.response) return e.response.data.message;
				return "Server is Down! Try again Later...";
			}
		}
	}
}

export const userStore = createUserStore();