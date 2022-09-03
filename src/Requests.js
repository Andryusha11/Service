const key = '888a85e6a28edd2831472316505b430e'

const requests = {
	requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
	requestLatest: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
	requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
	requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
}

export default requests