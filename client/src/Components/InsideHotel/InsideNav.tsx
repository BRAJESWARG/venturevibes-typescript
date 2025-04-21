import React, { useState } from "react";
import { Link } from "react-scroll";
import "./InsideNav.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-image-gallery/styles/css/image-gallery.css";

interface NavItem {
    id: string;
    label: string;
}

const InsideNav: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const navItems: NavItem[] = [
        { id: "StayOptions", label: "Stay Options" },
        { id: "Amenities", label: "Amenities" },
        { id: "Host", label: "Host" },
        { id: "GuestReviews", label: "Guest Reviews" },
        { id: "PropertyPolicies", label: "Property Policies" },
        { id: "SimilarProperties", label: "Similar Properties" },
    ];

    return (
        <div className="InsideNav">
            <nav
                id="details-navigation"
                className="Navigationstyles__NavigationStyleContainer-sc-1qhzy4a-0 eYxIWd navigation-container"
            >
                <div className="Navigationstyles__StyledWrapper-sc-1qhzy4a-1 iOBtpt">
                    <ul className="Navigationstyles__MenuList-sc-1qhzy4a-2 dwFebw">
                        <li>
                            <div className="Navigationstyles__TextWrapperSpan-sc-1qhzy4a-3 llgclM">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={item.id}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-250}
                                        className={`Navigationstyles__ItemLinkTo-sc-1qhzy4a-4 ${activeItem === item.id ? "jyDmWNActiv" : "jyDmWN"
                                            }`}
                                        onClick={() => setActiveItem(item.id)}
                                        onSetActive={() => setActiveItem(item.id)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default InsideNav;
