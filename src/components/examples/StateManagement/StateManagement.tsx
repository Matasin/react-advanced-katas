import { QueryLoader } from '@/components/shared/QueryLoader';
import { GET_ERROR, GET_LOCATIONS } from '@/queries';
import { useQuery } from '@apollo/client';

type LocationProps = {
  locations: {
    id: string;
    name: string;
    description: string;
    photo: string;
  }[];
};

export const StateManagement = () => {
  const {
    loading: loadingLocations,
    error: errorLocations,
    data: data,
  } = useQuery<LocationProps>(GET_LOCATIONS);

  const {
    loading,
    error,
  } = useQuery<LocationProps>(GET_ERROR);

  const renderLocations = () => {
    if (!data) {
      return null;
    }

    return (
      data.locations.map(({ id, name, description, photo }) => (
        <div key={id}>
          <h3>{name}</h3>
          <img width="200" height="125" alt="location-reference" src={`${photo}`} />
          <br />
          <b>About this location:</b>
          <p>{description}</p>
        </div>
      ))
    );
  };

  return (
    <>
      <QueryLoader
        isLoading={loading}
        error={error}
      >
        I won't be even rendered :c
      </QueryLoader>
      <QueryLoader
        isLoading={loadingLocations}
        error={errorLocations}
      >
        {renderLocations()}
      </QueryLoader>
    </>
  );
};
