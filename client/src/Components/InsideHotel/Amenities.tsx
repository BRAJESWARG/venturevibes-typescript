import React from "react";
import "./InsideHotel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Amenities: React.FC = () => {
    return (
        <div className="Amenities">
            <div id="amenities" className="Amenitiesstyles__AmenitiesOuterWrapper-sc-e2msby-2 jKkVic">
                <div className="Amenitiesstyles__AmenitiesWrapper-sc-e2msby-3 cdZIRD">
                    <h2 className="dwebCommonstyles__LargeSectionHeader-sc-112ty3f-8 Amenitiesstyles__AmenitiesHeaderStyled-sc-e2msby-4 eeTyKB fRCeTy">
                        Amenities at Shakespeare Corporate Guest House
                    </h2>

                    <div className="Amenitiesstyles__AmenitiesListBlock-sc-e2msby-5 jtaVPN">
                        <span className="Amenitiesstyles__PopularAmenitiesTag-sc-e2msby-7 kOWhTi">
                            <h3 className="Amenitiesstyles__PopularAmenitiesTagTextStyled-sc-e2msby-8 kCaNwu">
                                POPULAR AMENITIES
                            </h3>
                        </span>

                        <ul className="Amenitiesstyles__AmentiesHorizontalListof4-sc-e2msby-9 ixObVF">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="2.4rem" height="2.4rem" className="HouseKeepingIcon-sc-5ioupd-0 iYVwtt">
                                    <path d="M13.261 24.744a3.2 3.2 0 1 1 0 6.4..." />
                                </svg>
                                <span className="Amenitiesstyles__AmenityItemText-sc-e2msby-10 hkBexV">Caretaker</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 16 16" width="2.4rem" height="2.4rem" className="RoundedCheckbox-sc-4skzta-0 chqHwc">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M-4-4h24v24H-4z" />
                                        <path fill="#898B91" d="M7.68 0a7.68 7.68 0 1 1 0 15.36..." />
                                    </g>
                                </svg>
                                <span className="Amenitiesstyles__AmenityItemText-sc-e2msby-10 hkBexV">Housekeeping</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="2.4rem" height="2.4rem" className="HappyWifiIcon-sc-9vspjr-0 hFyVkv">
                                    <path d="M8 11.295a1.794 1.794 0 1 1 0 3.588..." />
                                </svg>
                                <span className="Amenitiesstyles__AmenityItemText-sc-e2msby-10 hkBexV">Free Wi-Fi</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 16 16" width="2.4rem" height="2.4rem" className="RoundedCheckbox-sc-4skzta-0 chqHwc">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M-4-4h24v24H-4z" />
                                        <path fill="#898B91" d="M7.68 0a7.68 7.68 0 1 1 0 15.36..." />
                                    </g>
                                </svg>
                                <span className="Amenitiesstyles__AmenityItemText-sc-e2msby-10 hkBexV">Living Room</span>
                            </li>
                        </ul>
                    </div>

                    <div className="Amenitiesstyles__CategorizedAmenitiesTableContainer-sc-e2msby-11 gpcTKG">
                        {[
                            {
                                title: "Popular Amenities",
                                items: ["Caretaker", "Housekeeping", "Free Wi-Fi", "Living Room"],
                            },
                            {
                                title: "Basic Facilities",
                                items: ["Housekeeping", "Air Conditioning", "Telephone", "Bathroom"],
                            },
                            {
                                title: "Food and Drinks",
                                items: ["Dining Area"],
                            },
                            {
                                title: "Safety and Security",
                                items: ["CCTV"],
                            },
                            {
                                title: "General Services",
                                items: ["Caretaker", "Luggage Storage", "Electrical Sockets", "Doctor on Call"],
                            },
                        ].map((category) => (
                            <div key={category.title} id={category.title} className="Amenitiesstyles__OneCateoryOfAmenitiesContainer-sc-e2msby-12 hiqBoU">
                                <h3 className="Amenitiesstyles__HeadingOneCategoryOfAmenitiesBlockStyled-sc-e2msby-13 dlgwqi">
                                    {category.title}
                                </h3>
                                <ul className="Amenitiesstyles__OneCategoryOfAmenitiesList-sc-e2msby-14 cQHPky">
                                    {category.items.map((item) => (
                                        <li key={item} className="Amenitiesstyles__OneCategoryOfAmenitiesListItem-sc-e2msby-15 jDhMTW">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Amenities;
