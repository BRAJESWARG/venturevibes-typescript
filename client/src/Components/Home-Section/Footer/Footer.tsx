import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <div className="FooterContainer">
            <footer>
                <section className="sc-hZSyms BbdTE">
                    <div className="sc-bVtPOX gAphtt">
                        <div></div>
                    </div>

                    <section className="sc-hIcnzI dgprFg">
                        {/* Our Products */}
                        <div className="sc-lgJXzH dsJocd">
                            <p className="sc-eddoWK kjvEwK">our products</p>
                            <ul className="sc-fIvQaR evfHuX">
                                <li><a href="/hotels/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Domestic Hotels</a></li>
                                <li><a href="/hotels-international/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">International Hotels</a></li>
                                <li><a href="/flights/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Domestic Flights</a></li>
                                <li><a href="/international-flights/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">International Flights</a></li>
                                <li><a href="/bus/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Bus Booking</a></li>
                                <li><a href="/cars/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Cab Booking</a></li>
                                <li><a href="/trains/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Train Ticket Booking</a></li>
                                <li><a href="/routeplanner/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Route Planner</a></li>
                                <li><a href="/destinations/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Destination Planner</a></li>
                            </ul>
                        </div>

                        {/* Company Info */}
                        <div className="sc-lgJXzH dsJocd">
                            <p className="sc-eddoWK kjvEwK">company</p>
                            <ul className="sc-fIvQaR evfHuX">
                                <li><a href="//www.goibibo.com/aboutus/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">About Us</a></li>
                                <li><a href="//www.goibibo.com/terms-and-conditions/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Terms &amp; Conditions</a></li>
                                <li><a href="//www.goibibo.com/info/user-agreement/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">User Agreement</a></li>
                                <li><a href="//www.goibibo.com/info/privacy-policy/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Privacy</a></li>
                                <li><a href="//www.goibibo.com/mysupport/customerHelp/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Customer Support</a></li>
                                <li><a href="//www.goibibo.com/careers/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Careers</a></li>
                                <li><a href="//www.goibibo.com/info/corporate-social-responsibility/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Corporate Social Responsibility</a></li>
                                <li><a href="//www.goibibo.com/mobile/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Goibibo on Mobile</a></li>
                                <li><a href="//www.youtube.com/user/goibibo" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Goibibo TV Advertisement</a></li>
                                <li><a href="//tech.goibibo.com/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Technology@Goibibo</a></li>
                                <li><a href="//www.goibibo.com/support/faq" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">FAQs</a></li>
                            </ul>
                        </div>

                        {/* Travel Resources */}
                        <div className="sc-lgJXzH dsJocd">
                            <p className="sc-eddoWK kjvEwK">travel resources</p>
                            <ul className="sc-fIvQaR evfHuX">
                                <li><a href="/bus/bus-routes/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Popular Bus Routes</a></li>
                                <li><a href="/trains/check-pnr-status/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Train PNR Status</a></li>
                                <li><a href="/cars/airport-cabs/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Airport Cabs</a></li>
                                <li><a href="/hotels/india/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Hotels in India</a></li>
                                <li><a href="/airlines/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Popular Airlines</a></li>
                                <li><a href="/offers/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Goibibo Offers</a></li>
                                <li><a href="/airports/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">International Airports</a></li>
                                <li><a href="/flights/city-to-city-airlines/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">City Airline Routes</a></li>
                                <li><a href="/destinations/intl/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">International Travel Guide</a></li>
                            </ul>
                        </div>

                        {/* More Links */}
                        <div className="sc-lgJXzH dsJocd">
                            <p className="sc-eddoWK kjvEwK">more links</p>
                            <ul className="sc-fIvQaR evfHuX">
                                <li><a href="/flights/cheap-flights/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Cheap Flights</a></li>
                                <li><a href="/trains/check-train-running-status/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Train Running Status</a></li>
                                <li><a href="/flight-schedule/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Flight Schedule</a></li>
                                <li><a href="/gostays/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Go Stays</a></li>
                                <li><a href="/bus/city-buses/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Popular Bus Cities</a></li>
                                <li><a href="/airports/airports-in-india/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Airports in India</a></li>
                                <li><a href="/hotels/chain/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Popular Hotel Chains</a></li>
                                <li><a href="/info/hotels-near-me/" className="sc-jUkQWQ sc-lgIphe fjLnZe ysTBl">Hotels Near Me</a></li>
                            </ul>
                        </div>
                    </section>

                    {/* Footer Bottom Section */}
                    <div className="sc-djZjEd kOXtNh">
                        <div className="footer-app-links">
                            <div className="follow-us">
                                <p>Follow Us</p>
                                <div className="social-icons">
                                    <a target="_blank" href="http://www.facebook.com/mihup_ai" title="facebook" rel="noreferrer" aria-label="Facebook">
                                        <i className="fa fa-facebook-f facebookIcon"></i>
                                    </a>
                                    <a target="_blank" href="https://twitter.com/mihup_ai" title="Twitter" rel="noreferrer" aria-label="Twitter">
                                        <i className="fa fa-twitter twitterIcon"></i>
                                    </a>
                                    <a target="_blank" href="https://www.linkedin.com/company/mihup/" title="LinkedIn" rel="noreferrer" aria-label="LinkedIn">
                                        <i className="fa fa-linkedin-square linkedInIcon"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="follow-us">
                                <p>Book Tickets faster. Download our mobile Apps</p>
                                <div className="store-icons">
                                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.goibibo" rel="noreferrer">
                                        <span className="footer-sprite playStoreIcon"></span>
                                    </a>
                                    <a target="_blank" href="https://apps.apple.com/in/app/goibibo-flight-bus-hotel-booking/id631927169" rel="noreferrer">
                                        <span className="footer-sprite appStoreIcon"></span>
                                    </a>
                                </div>
                            </div>

                            <div className="payment-icons">
                                <span className="footer-sprite verifySign">&nbsp;</span>
                                <span className="footer-sprite amricanIcon">&nbsp;</span>
                                <span className="footer-sprite masterCardIcon">&nbsp;</span>
                                <span className="footer-sprite visaIcon">&nbsp;</span>
                                <span className="footer-sprite ruPayIcon">&nbsp;</span>
                                <span className="footer-sprite iataIcon">&nbsp;</span>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="footer-copyrights">
                            <div className="brand-name">
                                <a target="_blank" href="https://mihup.ai/" rel="noreferrer">
                                    <img src="https://via.mihup.com/assets/logo/logo-new-lg.png" alt="Mihup Logo" className="mihupLogo" />
                                </a>
                            </div>
                            <span> © Brajeswar Ghosh | {new Date().getFullYear()} All Rights Reserved. </span>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Footer;