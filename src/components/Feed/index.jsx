import React, { useState, useContext, useEffect } from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { process } from "@progress/kendo-data-query";
import { MoviesContext } from '../../Context/movies';
import noImg from '../../assets/imgs/no-img.jpg';


const initialFilter = {
    logic: "and",
    filters: [
        {
            field: "originalTitleText.text",
            operator: "contains",
            value: "",
        },
    ],
};

const initialSort = [
    {
        field: "originalTitleText.text",
        dir: "asc",
    },
];


const initialDataState = {
    skip: 0,
    take: 10,
};


const Feed = () => {
    const { movies } = useContext(MoviesContext);
    const [filter, setFilter] = useState(initialFilter);
    const [sort, setSort] = useState(initialSort);
    const [page, setPage] = useState(initialDataState);
    const [pageSizeValue, setPageSizeValue] = useState();
    const processedData = process(movies, {
        filter: filter,
        sort: sort,
        skip: page.skip,
        take: page.take,
    });

    const pageChange = (event) => {
        const targetEvent = event.targetEvent;
        const take = targetEvent.value === "All" ? movies.length : event.page.take;
        if (targetEvent.value) { setPageSizeValue(targetEvent.value) }
        setPage({ ...event.page, take, });
    };


    return (
        <>
            <Grid
                style={{
                    height: "fit-content",
                }}
                data={processedData}
                filterable={true}
                filter={filter}
                onFilterChange={(e) => setFilter(e.filter)}
                sortable={true}
                sort={sort}
                onSortChange={(e) => {
                    setSort(e.sort);
                }}
                total={movies.length}
                pageable={{
                    buttonCount: 5,
                    pageSizes: [5, 10, 15, "All"],
                    pageSizeValue: pageSizeValue,
                }}
                onPageChange={pageChange}

            >
                <GridColumn
                    field="primaryImage.url"
                    title="Poster"
                    filterable={false}
                    width="100px"
                    cell={(props) => (
                        <td>
                            {props.dataItem.primaryImage && props.dataItem.primaryImage.url !== null ? (
                                <img
                                    src={props.dataItem.primaryImage.url}
                                    alt="Poster do filme"
                                    style={{ width: '70px', height: '90px', margin: '0 auto', display: 'block' }}
                                />
                            ) : (
                                <img
                                    src={noImg}
                                    alt="Poster não encontrado"
                                    style={{ width: '70px', height: '90px', margin: '0 auto', display: 'block' }}
                                />
                            )}
                        </td>
                    )}
                />
                <GridColumn field="originalTitleText.text" title="Título" filter="text"/>
                <GridColumn field="releaseYear.year" title="Ano" filter="date" />
                <GridColumn field="titleType.text" title="Tipo" filterable={false}/>
            </Grid>
        </>

    );
};

export default Feed;
