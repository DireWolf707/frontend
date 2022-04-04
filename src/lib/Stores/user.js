import { writable } from 'svelte/store';
import { goto } from '$app/navigation';
import axios from 'axios';
import errFormatter from '$lib/Utils/errFormatter';

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:8080';

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
				// return array of notification used by notification function
				return [{text:'Logged In!', type:'success'}];
			} catch (e) {
				return errFormatter(e);
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
				return errFormatter(e);
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
				return errFormatter(e);
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
				return errFormatter(e);
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
				return errFormatter(e);
			}
		}
	}
}

export const userStore = createUserStore();