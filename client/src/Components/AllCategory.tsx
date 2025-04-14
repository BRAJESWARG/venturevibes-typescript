import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HotelSearch from './HotelSearch/HotelSearch';

interface Trip {
  // Replace these with actual fields in yourTrip
  id: string;
  name: string;
  [key: string]: any;
}

interface RouteParams {
  Id?: string;
  cat?: string;
  [key: string]: string | undefined; // <-- this line adds the required index signature
}

const AllCategory: React.FC = () => {
  const { cat } = useParams<RouteParams>();
  const [yourTrip, setYourTrip] = useState<Trip[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8040/api/v1/VentureVibes')
      .then(response => setYourTrip(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [cat]);

  const renderContent = () => {
    switch (cat) {
      case 'Hotels':
        return <HotelSearch yourTrip={yourTrip} />;
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