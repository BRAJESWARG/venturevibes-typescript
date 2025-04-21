import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import InsideHotel from './InsideHotel/InsideHotel';

// Define the HotelData type inline
interface HotelData {
  id: number;
  name: string;
  location: string;
  images: string[];
  pricePerNight: number;
  description: string;
  rating: number;
  StarRating: number;
  Thumbnail: string;
  City: string;
}

interface Trip {
  ID: string;
  Name: string;
  Location: string;
  Images: string[];
  PricePerNight: number;
  Description: string;
  Rating: number;
  Category: string;
  [key: string]: any;
}

interface RouteParams {
  Id?: string;
  cat?: string;
  [key: string]: string | undefined;
}

const Article: React.FC = () => {
  const [yourTrip, setYourTrip] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { Id, cat } = useParams<RouteParams>();

  useEffect(() => {
    axios
      .get('http://localhost:8040/api/v1/VentureVibes')
      .then((res) => {
        setYourTrip(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [cat]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const trip = yourTrip.find((value) => value.ID === Id && value.Category === cat);

  const mappedTrip: HotelData | null = trip
    ? {
      id: Number(trip.ID),
      name: trip.Name,
      location: trip.Location,
      images: trip.Images,
      pricePerNight: Number(trip.PricePerNight),
      description: trip.Description,
      rating: trip.Rating,
      StarRating: trip.StarRating,
      Thumbnail: trip.Thumbnail,
      City: trip.City,
    }
    : null;

  return (
    <div>
      {mappedTrip ? (
        <InsideHotel key={mappedTrip.id} val={mappedTrip} />
      ) : (
        <p>No matching trip found.</p>
      )}
    </div>
  );
};

export default Article;
