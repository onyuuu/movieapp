import './App.css';
import React from 'react';
import Movie from './component/Movie';
import { useState, useRef, useEffect } from 'react';

function App() {

	const [movies, setMovies] = useState([
		{title:'아바타', year:2023},
		{title:'쥬라기 월드', year:2022},
		{title:'닥터 스트레인지', year:2022},
	]);

	const addMovie = (movie) => {
		setMovies([
			...movies,
			movie
		])
	}

	const renderMovies = movies.map((movie)=>{
		return (
			<Movie movie={movie} key={movie.title}/>
		)
	});


	return (
		<div className="App">
			<h1>영화 List</h1>
			
			<MovieForm addMovie={addMovie}/>
			{renderMovies}
		</div>
	)
}

export default App;
