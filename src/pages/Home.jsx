import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
   return (
	   <>
			<Main />
			<Row title='Upcoming' fetchURL={requests.requestUpcoming} />
			<Row title='Latest' fetchURL={requests.requestLatest} />
			<Row title='Toprated' fetchURL={requests.requestTopRated} />
			<Row title='Popular' fetchURL={requests.requestPopular} />
	   </>
   )
}

export default Home