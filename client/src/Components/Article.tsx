import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import InsideHotel from './InsideHotel/InsideHotel';

interface Trip {
  ID: string;
  Category: string;
  [key: string]: any; // Adjust if you know all the fields
}

interface RouteParams {
  Id?: string;
  cat?: string;
  [key: string]: string | undefined; // <-- this line adds the required index signature
}


const Article: React.FC = () => {
  const [yourTrip, setYourTrip] = useState<Trip[]>([]);
  const { Id, cat } = useParams<RouteParams>();

  useEffect(() => {
    axios.get('http://localhost:8040/api/v1/VentureVibes').then((res) => {
      setYourTrip(res.data);
    });
  }, [cat]);

  return (
    <div>
      {yourTrip
        .filter((value) => value.ID === Id && value.Category === cat)
        .map((val, index) => (
          <InsideHotel key={index} val={val} />
        ))}
    </div>
  );
};

export default Article;
