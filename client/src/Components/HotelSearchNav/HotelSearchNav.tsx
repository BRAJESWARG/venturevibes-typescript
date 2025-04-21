import React, { useEffect, useState } from "react";
import "../HotelSearch/DisplayPage.css";
import axios from "axios";
import dayjs from "dayjs";

type HotelData = {
    Adults: number;
    Child: number;
    Category: string;
    [key: string]: any;
};

type SearchParams = {
    city?: string;
    City?: string;
    checkIn?: string;
    checkOut?: string;
    adults?: number;
    children?: number;
};

type HotelSearchNavProps = {
    result: SearchParams;
    setResult: (value: SearchParams) => void;
    sendDataToParent?: (data: any) => void;
};

const HotelSearchNav: React.FC<HotelSearchNavProps> = ({ result, setResult, sendDataToParent }) => {
    const [yourTrip, setYourTrip] = useState<HotelData[]>([]);

    const [formData, setFormData] = useState<SearchParams>({
        ...result,
        checkIn:
            result.checkIn && dayjs(result.checkIn).isValid()
                ? dayjs(result.checkIn).format("YYYY-MM-DD")
                : "",
        checkOut:
            result.checkOut && dayjs(result.checkOut).isValid()
                ? dayjs(result.checkOut).format("YYYY-MM-DD")
                : "",
    });

    const [tempFormData, setTempFormData] = useState<SearchParams>({ ...formData });

    useEffect(() => {
        axios
            .get("http://localhost:8040/api/v1/VentureVibes")
            .then((response) => setYourTrip(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [result]);

    const handleUpdate = () => {
        setFormData({ ...tempFormData });
        if (typeof setResult === "function") {
            setResult({ ...tempFormData });
        } else {
            console.error("setResult is not a function.");
        }
    };

    const { adults, children } = formData;

    const filteredData = yourTrip.filter(
        (value) =>
            Number(value.Adults) === Number(adults) &&
            Number(value.Child) === Number(children) &&
            value.Category === "Hotels"
    );

    return (
        <section className="SearchWidgetUIstyles__OuterWrapDiv-sc-1x37qbj-0 edQnfF">
            <div className="dwebCommonstyles__CenteredSpaceWrap-sc-112ty3f-0 SearchWidgetUIstyles__WrapperStyle-sc-1x37qbj-1 buWWlt bFIqAi">
                <div className="dwebCommonstyles__FlexItem-sc-112ty3f-4 gwpVPd">
                    <div className="SearchWidgetUIstyles__SearchWrapperArea-sc-1x37qbj-2 gfWNJG">
                        <div className="SearchWidgetAutosuggeststyles__AutocompleteWrapperStyles-sc-1lizu4w-0 iGTTep">
                            <label id="downshift-1-label" htmlFor="downshift-1-input" className="SearchWidgetAutosuggeststyles__SearchLabelStyles-sc-1lizu4w-2 cZkTVY">
                                AREA, LANDMARK OR PROPERTY NAME
                            </label>
                            <input
                                autoComplete="off"
                                id="downshift-1-input"
                                placeholder="LOCATION NAME"
                                className="SearchWidgetAutosuggeststyles__SearchInputStyles-sc-1lizu4w-1 cGELZI"
                                value={tempFormData.city || ""}
                                onChange={(e) =>
                                    setTempFormData((prev) => ({ ...prev, City: e.target.value }))
                                }
                            />
                        </div>
                    </div>

                    {/* CHECK-IN */}
                    <div className="SearchWidgetUIstyles__CheckinCheckoutWrapper-sc-1x37qbj-3 fsTdCE">
                        <div>
                            <label className="SearchWidgetUIstyles__SearchLabelStyle-sc-1x37qbj-5 dhbsSR">
                                CHECK-IN
                            </label>
                            <input
                                type="date"
                                className="SearchWidgetUIstyles__SearchInputStyle-sc-1x37qbj-6 kNWLrS"
                                value={tempFormData.checkIn || ""}
                                onChange={(e) =>
                                    setTempFormData((prev) => ({ ...prev, checkIn: e.target.value }))
                                }
                            />
                        </div>
                    </div>

                    {/* CHECK-OUT */}
                    <div className="SearchWidgetUIstyles__CheckinCheckoutWrapper-sc-1x37qbj-3 fsTdCE">
                        <div>
                            <label className="SearchWidgetUIstyles__SearchLabelStyle-sc-1x37qbj-5 dhbsSR">
                                CHECK-OUT
                            </label>
                            <input
                                type="date"
                                className="SearchWidgetUIstyles__SearchInputStyle-sc-1x37qbj-6 kNWLrS"
                                value={tempFormData.checkOut || ""}
                                onChange={(e) =>
                                    setTempFormData((prev) => ({ ...prev, checkOut: e.target.value }))
                                }
                            />
                        </div>
                    </div>

                    {/* GUEST & ROOMS */}
                    <div className="SearchWidgetUIstyles__PaxWrapperStyle-sc-1x37qbj-4 idfXAf/">
                        <label className="SearchWidgetUIstyles__SearchLabelStyle-sc-1x37qbj-5 dhbsSR">
                            GUEST & ROOMS
                        </label>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div className="adultsChildRoom SearchWidgetUIstyles__SearchInputStyle-sc-1x37qbj-6 kNWLrS">
                                <div className="adultsChildRoomBox">
                                    <input
                                        type="number"
                                        min={1}
                                        max={3}
                                        className="adultsChildRoomInput"
                                        value={tempFormData.adults || 1}
                                        onChange={(e) =>
                                            setTempFormData((prev) => ({
                                                ...prev,
                                                adults: Math.max(1, parseInt(e.target.value) || 1),
                                            }))
                                        }
                                    />
                                    <label className="adultsChildRoomLebel">Adult,</label>
                                </div>
                                <div className="adultsChildRoomBox">
                                    <input
                                        type="number"
                                        min={0}
                                        max={2}
                                        className="adultsChildRoomInput"
                                        value={tempFormData.children || 0}
                                        onChange={(e) =>
                                            setTempFormData((prev) => ({
                                                ...prev,
                                                children: Math.max(0, parseInt(e.target.value) || 0),
                                            }))
                                        }
                                    />
                                    <label className="adultsChildRoomLebel">Child,</label>
                                </div>
                                <div className="adultsChildRoomBox">
                                    <input type="number" className="adultsChildRoomInput" value="1" readOnly />
                                    <label className="adultsChildRoomLebel">Room</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleUpdate}
                    className="dwebCommonstyles__ButtonBase-sc-112ty3f-14 SearchWidgetUIstyles__UpdateSearchBtn-sc-1x37qbj-7 hDRTlP"
                >
                    Update Search
                </button>
            </div>
        </section>
    );
};

export default HotelSearchNav;