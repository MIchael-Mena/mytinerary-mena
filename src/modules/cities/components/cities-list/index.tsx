import { Box, CircularProgress } from '@mui/material';
import CardCity from '../card-city';
import { FailedRequest } from '../../../shared/components/failed-request';
import { CardNotFound } from '../../../shared/components/card-not-found/CardNotFound';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { useEffect } from 'react';
import { fetchCities } from '../../../../store/actions/cities';
import { useUrlParams } from '../../hook/use-url-params';

export const CitiesList = () => {
  const dispatch = useAppDispatch();
  const { searchParam, pageParam, sortParam } = useUrlParams();
  const {
    data: cities,
    params: { search: currentSearch, sort: currentSort, page: currentPage },
    loading,
    error,
  } = useAppSelector((store) => store.citiesReducer.citiesFiltered);

  useEffect(() => {
    if (
      currentSearch === searchParam &&
      currentPage === pageParam &&
      currentSort === sortParam &&
      cities.length > 0
    )
      return; // Si la busqueda en la url es igual a la busqueda actual, no hago nada

    dispatch(
      fetchCities({
        search: searchParam,
        page: pageParam,
        sort: sortParam,
      })
    );
  }, [searchParam, pageParam, sortParam]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 3,
          marginTop: 4,
          minHeight: 400,
        }}
      >
        {loading ? (
          <CircularProgress color="secondary" size={200} />
        ) : error ? (
          <FailedRequest message="Oops! Something went wrong." width="290px" />
        ) : cities.length === 0 && searchParam ? ( // Podria usar 404 del error como condicion
          <CardNotFound
            message={`No cities found for "${searchParam}", try again.`}
          />
        ) : cities.length === 0 ? (
          <CardNotFound />
        ) : (
          cities.map((city, index) => <CardCity key={index} city={city} />)
        )}
      </Box>
    </>
  );
};
