import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
   return (
	   <>
			<Main />
			<Row rowId = '1' title='Upcoming' fetchURL={requests.requestUpcoming} />
			<Row rowId = '2'  title='Latest' fetchURL={requests.requestLatest} />
			<Row rowId = '3'  title='Toprated' fetchURL={requests.requestTopRated} />
			<Row rowId = '4'  title='Popular' fetchURL={requests.requestPopular} />
	   </>
   )
}

export default Home