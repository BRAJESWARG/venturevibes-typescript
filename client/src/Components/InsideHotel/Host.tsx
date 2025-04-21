import React from "react";
import "./InsideHotel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Host: React.FC = () => {
    return (
        <div className="Host">
            {[
                {
                    name: "Saikat",
                    img: "https://media.licdn.com/dms/image/v2/C4E03AQHS9V5R479rNQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1593122776119?e=1747267200&v=beta&t=PDiWbvfuqHYSS7tFGS68PzkA1HQUfYuZa954T0s2AeE"
                },
                {
                    name: "Mainak",
                    img: "https://media.licdn.com/dms/image/v2/C5103AQEKJtYcyauonQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1580847519629?e=1749081600&v=beta&t=YkUPUn-cF8Fz5NxWuQOnMo1Z48uokDZwpe0xbTp_7WY"
                }
            ].map((host, index) => (
                <section key={index} id="hosted-by" className="HostInfoUIstyles__HostSection-sc-b0b7rv-0 fWRZBM">
                    <div className="HostInfoUIstyles__Container-sc-b0b7rv-1 RKVI">
                        <p className="HostInfoUIstyles__Title-sc-b0b7rv-2 dScsck">Hosted by {host.name}</p>
                        <div className="HostInfoUIstyles__Content-sc-b0b7rv-3 dCBohn">
                            <div className="HostInfoUIstyles__ContentLeft-sc-b0b7rv-4 eWOzgM">
                                <ul className="HostInfoUIstyles__HostList-sc-b0b7rv-6 gGezYF">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" className="HappyLanguageIcon__HappyCottageIcon-sc-iiaz4r-0 jiwVcX">
                                            <path fill="#000" stroke="#222" strokeWidth="0.3" d="..." />
                                        </svg>
                                        <span style={{ marginLeft: 5 }}>Speaks English, Hindi</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#000" className="HappyScheduleIcon-sc-1gsmlq1-0 kyMWsf">
                                            <path fill="#222" d="..." />
                                        </svg>
                                        <span style={{ marginLeft: 5 }}>Hosting since 2020</span>
                                    </li>
                                </ul>
                                <div className="HostInfoUIstyles__HostBioWrapper-sc-b0b7rv-7 dPnlFr">
                                    <p className="HostInfoUIstyles__HostBio-sc-b0b7rv-8 cIdHWM">
                                        Say hello to your host, {host.name}. He has been hosting since 2020.
                                        <br /><br />
                                        {host.name} is extremely cordial and forthcoming. Apart from hosting, his hobbies include travelling and listening to music.
                                        <br /><br />
                                        In order to fulfil his dream of starting a personal business, {host.name} decided to venture into the hospitality space. Besides being a host, {host.name} is also looking after the family business. He has employed well-trained staff to take care of guest needs.
                                        <br /><br />
                                        <strong>Interaction With Guests:</strong>
                                        Though {host.name} is not physically present at the property, he is always a phone call away for his guests.
                                    </p>
                                </div>
                            </div>
                            <span className="HostInfoUIstyles__HostImg-sc-b0b7rv-5 mPDAg">
                                <div className="dwebCommonstyles__CenteredDivWrap-sc-112ty3f-1 UserAvatarstyles__WrapperDiv-sc-1twy7zx-0 bGKfHf hJDQRm">
                                    <img
                                        src={host.img}
                                        alt={`Host ${host.name}`}
                                        className="UserAvatarstyles__ImgStyles-sc-1twy7zx-2 hPPHIS"
                                    />
                                </div>
                            </span>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Host;
