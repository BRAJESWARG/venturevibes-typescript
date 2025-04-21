import React, { useEffect, useState } from 'react';
import Intro from './Intro/Intro';
import axios from 'axios';
import '../../App.css';
import Testimonials from './Testimonials/Testimonials';
import MultiCard from './MultiCarousel/MultiCard';

// Define a type for the trip data structure
interface Trip {
    // Replace these with actual properties based on your API response
    id: string;
    name: string;
    location: string;
    description: string;
    imageUrl: string;
}

const Home: React.FC = () => {
    const [yourTrip, setYourTrip] = useState<Trip[]>([]);

    useEffect(() => {
        axios.get<Trip[]>(`http://localhost:8040/api/v1/VentureVibes`)
            .then((response) => {
                setYourTrip(response.data);
            })
            .catch((error) => {
                console.error('Error fetching trip data:', error);
            });
    }, []);

    return (
        <div>
            <MultiCard />
            <Testimonials />
            <Intro />
        </div>
    );
};

export default Home;
