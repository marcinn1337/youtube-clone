import axios from 'axios'
const BASE_URL = 'https://yt-api.p.rapidapi.com'
const defaultOptions = {
	url: BASE_URL,
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
		'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
	}
}
// const options = defaultOptions
export const fetchFromAPI = async (url, params) => {
	const options = { ...defaultOptions, params }
	const { data } = await axios.get(`${BASE_URL}/${url}`, options)
	return data
}
