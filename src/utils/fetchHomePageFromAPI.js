import axios from 'axios'
const options = {
	url: 'https://youtube138.p.rapidapi.com/home/',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
}

export const fetchHomePageFromAPI = async () => {
	const { data } = await axios.get(options.url, options)
	return data
}
