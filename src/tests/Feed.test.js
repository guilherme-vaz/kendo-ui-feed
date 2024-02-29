import { render, screen } from '@testing-library/react';
import Feed from '../components/Feed';
import { MoviesContext } from '../Context/movies';
import '@testing-library/jest-dom'

jest.mock('../Context/movies', () => ({
    ...jest.requireActual('../Context/movies'),
    MoviesContext: {
        movies: [
            {
                "_id": "61e57fd65c5338f43c777f4a",
                "id": "tt0000081",
                "primaryImage": {
                    "id": "rm211543552",
                    "width": 226,
                    "height": 300,
                    "url": "https://m.media-amazon.com/images/M/MV5BM2ZlYjA4NmItZTYxYy00MGFiLTg3MWUtNzZmYjE1ODZmMThjXkEyXkFqcGdeQXVyNTI2NTY2MDI@._V1_.jpg",
                    "caption": {
                        "plainText": "Les haleurs de bateaux (1896)",
                        "__typename": "Markdown"
                    },
                    "__typename": "Image"
                },
                "titleType": {
                    "text": "Short",
                    "id": "short",
                    "isSeries": false,
                    "isEpisode": false,
                    "__typename": "TitleType"
                },
                "titleText": {
                    "text": "Les haleurs de bateaux",
                    "__typename": "TitleText"
                },
                "originalTitleText": {
                    "text": "Les haleurs de bateaux",
                    "__typename": "TitleText"
                },
                "releaseYear": {
                    "year": 1896,
                    "endYear": null,
                    "__typename": "YearRange"
                },
                "releaseDate": null
            },
            {
                "_id": "61e57fd65c5338f43c777f4c",
                "id": "tt0000045",
                "primaryImage": {
                    "id": "rm362538496",
                    "width": 226,
                    "height": 300,
                    "url": "https://m.media-amazon.com/images/M/MV5BNzBjZjI4YjYtNGIyOC00ZDQyLTg0OTctN2U2YmUyMjJiZTQzXkEyXkFqcGdeQXVyNTI2NTY2MDI@._V1_.jpg",
                    "caption": {
                        "plainText": "Les blanchisseuses (1896)",
                        "__typename": "Markdown"
                    },
                    "__typename": "Image"
                },
                "titleType": {
                    "text": "Short",
                    "id": "short",
                    "isSeries": false,
                    "isEpisode": false,
                    "__typename": "TitleType"
                },
                "titleText": {
                    "text": "Les blanchisseuses",
                    "__typename": "TitleText"
                },
                "originalTitleText": {
                    "text": "Les blanchisseuses",
                    "__typename": "TitleText"
                },
                "releaseYear": {
                    "year": 1896,
                    "endYear": null,
                    "__typename": "YearRange"
                },
                "releaseDate": {
                    "day": null,
                    "month": null,
                    "year": 1896,
                    "__typename": "ReleaseDate"
                }
            },
            {
                "_id": "61e57fd65c5338f43c777f4e",
                "id": "tt0000066",
                "primaryImage": {
                    "id": "rm1117513216",
                    "width": 226,
                    "height": 300,
                    "url": "https://m.media-amazon.com/images/M/MV5BZGUxMmJiZjEtMDdkNC00MGMzLWI3MTItOTJiYmNhOGM0Mjk5XkEyXkFqcGdeQXVyNTI2NTY2MDI@._V1_.jpg",
                    "caption": {
                        "plainText": "Dessinateur: Von Bismark (1896)",
                        "__typename": "Markdown"
                    },
                    "__typename": "Image"
                },
                "titleType": {
                    "text": "Short",
                    "id": "short",
                    "isSeries": false,
                    "isEpisode": false,
                    "__typename": "TitleType"
                },
                "titleText": {
                    "text": "Dessinateur: Von Bismark",
                    "__typename": "TitleText"
                },
                "originalTitleText": {
                    "text": "Dessinateur: Von Bismark",
                    "__typename": "TitleText"
                },
                "releaseYear": {
                    "year": 1896,
                    "endYear": null,
                    "__typename": "YearRange"
                },
                "releaseDate": null
            },

        ],
    },
}));

test('Renderiza o componente Feed corretamente', () => {
    render(
        <MoviesContext.Provider>
            <Feed />
        </MoviesContext.Provider>
    );

    expect(screen.getByText('Kendo UI Feed')).toBeInTheDocument();
    expect(screen.getByAltText('Poster do filme')).toBeInTheDocument();
});
