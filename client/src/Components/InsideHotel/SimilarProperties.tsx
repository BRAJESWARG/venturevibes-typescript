import React, { useEffect, useState } from 'react';
import "./SimilarProperties.css";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from 'react-bootstrap/Card';
import Carousel from "react-multi-carousel";
import { responsive } from "../utilis/data";
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface HotelData {
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

interface SimilarPropertiesProps {
    val: HotelData;
}

interface RouteParams {
    cat?: string;
    [key: string]: string | undefined;
}

const SimilarProperties: React.FC<SimilarPropertiesProps> = ({ val }) => {
    const formatCurrency = (value: number): string => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(value);
    };

    const getPriceAfterDiscount = (value: number): number => {
        return value * 0.6;
    };

    const PriceAfterDiscount = getPriceAfterDiscount(val.PricePerNight);

    const { cat } = useParams<RouteParams>();

    const [yourTrip, setYourTrip] = useState<HotelData[]>([]);

    useEffect(() => {
        axios
            .get<HotelData[]>(`http://localhost:8040/api/v1/VentureVibes`)
            .then((data) => setYourTrip(data.data))
            .catch((err) => console.error("Error fetching hotels:", err));
    }, [cat]);

    const City = val.City;

    return (
        <div className="SimilarProperties">
            <div className="SimilarProperties-container">
                <div className="dwebCommonstyles__CenteredSpaceWrap-sc-112ty3f-0 buWWlt">
                    <h2 className="dwebCommonstyles__LargeSectionHeader-sc-112ty3f-8 eeTyKB">
                        Similar Properties to Shakespeare Corporate Guest House
                    </h2>
                </div>

                <section className="SimilarHotelsstyles__SimilarHotelsCardsContainer-sc-11wc8bz-4 dNFRNM">
                    <section
                        id="similar-hotels-current-hotel"
                        className="SimilarHotelCardstyles__WrapperDivRight-sc-u9axkm-0 guwHAy similar-hotel-card"
                    >
                        <Card className="CurrentHotelCard">
                            <Card.Title className="CardTitle">Current Hotel</Card.Title>
                            <Card.Img className="Card-Img" variant="top" src={val.Thumbnail} />
                            <Card.Body className="CardBody">
                                <Card.Text className="CardText">
                                    <div className="dwebCommonstyles__FlexCentered-sc-112ty3f-6 SimilarHotelDetailsstyles__HotelCategoryWrapDiv-sc-i3ec2n-1 lfQUri kAxHXK">
                                        <div className="SimilarHotelDetailsstyles__HotelCatgegory-sc-i3ec2n-4 bDXZVh">
                                            {val.Author}
                                        </div>
                                    </div>
                                    <div className="SimilarHotelDetailsstyles__HotelNameLocationWrapper-sc-i3ec2n-10 jcodLa">
                                        <h3 className="SimilarHotelDetailsstyles__ReviewHotelNameHeading-sc-i3ec2n-5 chNQWg">
                                            {val.Title}
                                        </h3>
                                        <span className="SimilarHotelDetailsstyles__AddressSpan-sc-i3ec2n-6 eWvefQ">
                                            {val.Address}
                                        </span>
                                    </div>
                                    <div className="SimilarHotelAmenitiesstyles__HotelAmenitiesWrapOuterDiv-sc-lv7ss5-0 fkXUqg">
                                        <div className="SimilarHotelAmenitiesstyles__AmenityContainer-sc-lv7ss5-4 jdzNHa">
                                            <div className="SimilarHotelAmenitiesstyles__IconContainer-sc-lv7ss5-5 icZKdB">
                                                {/* Air Conditioning Icon */}
                                                <svg viewBox="0 0 16 16" width="1.5rem" height="1.5rem">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M-4-4h24v24H-4z" />
                                                        <path
                                                            fill="#898B91"
                                                            d="M7.68 0a7.68 7.68 0 1 1 0 15.36A7.68 7.68 0 0 1 7.68 0m4.335 3.922-6.233 6.702-2.454-2.26a.436.436 0 0 0-.622.021.45.45 0 0 0 .022.632l2.556 2.358c.295.28.76.26 1.039-.032l6.326-6.8a.45.45 0 0 0-.011-.632.436.436 0 0 0-.623.011"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            Air Conditioning
                                        </div>
                                        <div className="SimilarHotelAmenitiesstyles__AmenityContainer-sc-lv7ss5-4 jdzNHa">
                                            <div className="SimilarHotelAmenitiesstyles__IconContainer-sc-lv7ss5-5 icZKdB">
                                                {/* Room Service Icon */}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1.5rem" height="1.5rem">
                                                    <path d="M30.387 15.6c...z" />
                                                </svg>
                                            </div>
                                            Room Service
                                        </div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="CardBody">
                                <div className="Layouts__Column-sc-1yzlivq-1 SimilarHotelCardstyles__SimilarHotelPricingWrapper-sc-u9axkm-4 gANvcd cEMjip">
                                    <div className="SimilarHotelPricingstyles__SimilarHotelPricingWrapDiv-sc-17odt1r-0 cfBEgO">
                                        <div className="SimilarHotelPricingstyles__HotelOldPrice-sc-17odt1r-1 gyWimb">
                                            {formatCurrency(val.PricePerNight)}
                                        </div>
                                        <div className="SimilarHotelPricingstyles__HotelFinalPrice-sc-17odt1r-2 GJIrM">
                                            {formatCurrency(PriceAfterDiscount)}
                                        </div>
                                        <div className="SimilarHotelPricingstyles__HotelPerNight-sc-17odt1r-3 bhPWYy">
                                            <strong>1 room </strong>
                                            <span>per night</span>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </section>

                    <section className="similarHotelCardCointaner">
                        <Carousel
                            className="similarHotelCarousel"
                            swipeable
                            draggable
                            showDots={false}
                            responsive={responsive}
                            ssr
                            infinite={false}
                            autoPlay={false}
                            autoPlaySpeed={2000}
                            transitionDuration={500}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                        >
                            {yourTrip
                                .filter((value) => value.City === City && value.Category === cat)
                                .map((val, index) => (
                                    <Card key={index} className="similarHotelCard">
                                        <Card.Title className="CardTitle">Similar Hotel</Card.Title>
                                        <Card.Img className="Card-Img" variant="top" src={val.Thumbnail} />
                                        <Card.Body className="CardBody">
                                            <Card.Text className="CardText">
                                                <div className="dwebCommonstyles__FlexCentered-sc-112ty3f-6 SimilarHotelDetailsstyles__HotelCategoryWrapDiv-sc-i3ec2n-1 lfQUri kAxHXK">
                                                    <div className="SimilarHotelDetailsstyles__HotelCatgegory-sc-i3ec2n-4 bDXZVh">{val.Author}</div>
                                                </div>
                                                <div className="SimilarHotelDetailsstyles__HotelNameLocationWrapper-sc-i3ec2n-10 jcodLa">
                                                    <h3 className="SimilarHotelDetailsstyles__ReviewHotelNameHeading-sc-i3ec2n-5 chNQWg">{val.Title}</h3>
                                                    <span className="SimilarHotelDetailsstyles__AddressSpan-sc-i3ec2n-6 eWvefQ">{val.Address}</span>
                                                </div>
                                                <div className="SimilarHotelAmenitiesstyles__HotelAmenitiesWrapOuterDiv-sc-lv7ss5-0 fkXUqg">
                                                    {/* Repeated Amenities */}
                                                    <div className="SimilarHotelAmenitiesstyles__AmenityContainer-sc-lv7ss5-4 jdzNHa">Air Conditioning</div>
                                                    <div className="SimilarHotelAmenitiesstyles__AmenityContainer-sc-lv7ss5-4 jdzNHa">Room Service</div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Body className="CardBody">
                                            <div className="Layouts__Column-sc-1yzlivq-1 SimilarHotelCardstyles__SimilarHotelPricingWrapper-sc-u9axkm-4 gANvcd cEMjip">
                                                <div className="SimilarHotelPricingstyles__SimilarHotelPricingWrapDiv-sc-17odt1r-0 cfBEgO">
                                                    <div className="SimilarHotelPricingstyles__HotelOldPrice-sc-17odt1r-1 gyWimb">
                                                        {formatCurrency(val.PricePerNight)}
                                                    </div>
                                                    <div className="SimilarHotelPricingstyles__HotelFinalPrice-sc-17odt1r-2 GJIrM">
                                                        {formatCurrency(getPriceAfterDiscount(val.PricePerNight))}
                                                    </div>
                                                    <div className="SimilarHotelPricingstyles__HotelPerNight-sc-17odt1r-3 bhPWYy">
                                                        <strong>1 room </strong>
                                                        <span>per night</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                ))}
                        </Carousel>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default SimilarProperties;
