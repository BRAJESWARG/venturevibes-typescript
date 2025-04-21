import React from "react";
import "./InsideHotel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import InsideSearchView from "./InsideSearchView";
import InsideMainView from "./InsideMainView";
import InsideNav from "./InsideNav";
import Amenities from "./Amenities";
import Host from "./Host";
import PropertyPolicies from "./PropertyPolicies";
import GuestReviews from "./GuestReviews";
import StayOptions from "./StayOptions";
import SimilarProperties from "./SimilarProperties";

// Define the type for `val`. Customize it based on actual hotel data structure.
export interface HotelData {
    id: number;
    name: string;
    location: string;
    images: string[];
    pricePerNight: number;
    StarRating: number;
    Thumbnail: string;
    City: string;
    [key: string]: any; 
}

interface InsideHotelProps {
    val: HotelData;
}

const InsideHotel: React.FC<InsideHotelProps> = ({ val }) => {
    return (
        <>
            <div className="InsideHotelSearchView">
                <InsideSearchView val={val} />
            </div>
            <div className="InsideHotelMainView">
                <InsideMainView val={val} />
            </div>
            <div className="InsideHotelNav">
                <InsideNav />
            </div>
            <div className="InsideHotelStayOptions">
                <StayOptions val={val} />
            </div>
            <div className="InsideHotelAmenities">
                <Amenities />
            </div>
            <div className="InsideHotelHost">
                <Host />
            </div>
            <div className="InsideHotelGuestReviews">
                <GuestReviews val={val} />
            </div>
            <div className="InsideHotelPropertyPolicies">
                <PropertyPolicies />
            </div>
            <div className="InsideHotelSimilarProperties">
                <SimilarProperties val={val} />
            </div>
        </>
    );
};

export default InsideHotel;
