// src/components/Feed.js
import React, { useState, useEffect } from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import axios from 'axios';

// const OMDB_API_KEY = process.env.OMDB_API_KEY;
// const OMDB_API_KEY = process.env.
// const cu = process.env.

const Feed = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=warner`);
                setMovies(response.data.Search || []);
            } catch (error) {
                console.error('Erro ao buscar dados da API OMDB:', error.message);
            }
        };

        fetchData();
    }, []);


    return (
        <Grid data={movies}>
            <GridColumn field="Title" title="Título" filterable={true} />
            <GridColumn field="Year" title="Ano" filterable={true} />
            <GridColumn field="Type" title="Tipo" filterable={true} />
        </Grid>
    );
};

export default Feed;
