import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_API_KEY;
export const MoviesContext = createContext();


export const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://moviesdatabase.p.rapidapi.com/titles',
                params: {
                    limit: '50',
                    titleType: 'movie',
                    startYear: '2020'
                },
                headers: {
                    'X-RapidAPI-Key': API_KEY,
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };

            try {
                const response = await axios(options);
                const filterMovies = response.data.results.filter(movie => movie.titleType.text === "Movie");
                setMovies(filterMovies || []);
            } catch (error) {
                console.error('Erro ao buscar dados da API OMDB:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <MoviesContext.Provider value={{ movies }}>
            {children}
        </MoviesContext.Provider>
    );
};
