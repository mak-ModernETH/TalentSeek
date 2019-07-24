import React from 'react'
import CardList from './CardList'
import {robots} from './robots'






const Home =()=>{

	return(

		<div className="tc">
			<h1>Talent Seek</h1>
			<CardList robots={robots}/>
		</div>



		);
}

export default Home;






