// AllCategory.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HotelSearch from './HotelSearch/HotelSearch';

interface Trip {
  id: string;
  name: string;
  [key: string]: any;
}

interface RouteParams {
  Id?: string;
  cat?: string;
  [key: string]: string | undefined;
}

const AllCategory: React.FC = () => {
  const { cat } = useParams<RouteParams>();
  const [tripData, setTripData] = useState<Trip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:8040/api/v1/VentureVibes')
      .then(response => {
        setTripData(response.data);
        setError(null);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to load data.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const renderContent = () => {
    if (loading) return 'Loading...';
    if (error) return error;

    switch (cat) {
      case 'Hotels':
        return <HotelSearch />;
      case 'Flights':
      case 'Trains':
      case 'Bus':
      case 'Cab':
      default:
        return 'Oops! Yet to Development!';
    }
  };

  return (
    <div className='blogBody'>
      <div className='contentForm'>
        {renderContent()}
      </div>
    </div>
  );
};

export default AllCategory;
