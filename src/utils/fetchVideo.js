import axios from 'axios'
const BASE_URL = 'https://yt-api.p.rapidapi.com/video/info'
const defaultOptions = {
	url: BASE_URL,
	params: {id: ''},
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
		'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
	}
}

export const fetchVideo = async (params) => {
	const options = { ...defaultOptions, params }
	const { data } = await axios.get(`${BASE_URL}`, options)
	return data
}
