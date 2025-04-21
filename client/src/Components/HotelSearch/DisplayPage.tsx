import React, { useEffect, useState } from "react";
import "./DisplayPage.css";
import "./HotelSearch.css";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import HotelView from "../HotelView/HotelView";
import { SearchResult } from "./HotelSearch";

// Props for DisplayPage
export interface DisplayPageProps {
  result: SearchResult;
  setResult: React.Dispatch<React.SetStateAction<SearchResult | null>>;
}

// Define the structure expected by HotelView
export interface HotelData {
  ID: string;
  Name: string;
  Location: string;
  City: string;
  // Images: string[];
  Images: {
    ID: number;
    original: string;
    thumbnail: string;
  }[];
  PricePerNight: number;
  Category: string;
  Adults: number;
  Child: number;
  [key: string]: any;
}

const DisplayPage: React.FC<DisplayPageProps> = ({ result, setResult }) => {
  const [yourTrip, setYourTrip] = useState<HotelData[]>([]);

  const [formData, setFormData] = useState<SearchResult>({
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

  const [tempFormData, setTempFormData] = useState<SearchResult>({ ...formData });

  useEffect(() => {
    axios
      .get("http://localhost:8040/api/v1/VentureVibes")
      .then((data) => setYourTrip(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [result]);

  const handleUpdate = () => {
    setFormData({ ...tempFormData });
    setResult({ ...tempFormData });
  };

  const { adults, children, city } = formData;

  const filteredData = yourTrip.filter(
    (value) =>
      Number(value.Adults) === Number(adults) &&
      Number(value.Child) === Number(children) &&
      value.Category === "Hotels" &&
      value.City === city
  );

  return (
    <>
      {/* Search Filters */}
      <div className="displayHotelsContainer">
        <section className="SearchWidgetUIstyles__OuterWrapDiv-sc-1x37qbj-0 edQnfF">
          <div className="dwebCommonstyles__CenteredSpaceWrap-sc-112ty3f-0 SearchWidgetUIstyles__WrapperStyle-sc-1x37qbj-1 buWWlt bFIqAi">
            <div className="dwebCommonstyles__FlexItem-sc-112ty3f-4 gwpVPd">
              {/* City Input */}
              <div className="SearchWidgetUIstyles__SearchWrapperArea-sc-1x37qbj-2 gfWNJG">
                <label htmlFor="locationInput">AREA, LANDMARK OR PROPERTY NAME</label>
                <input
                  id="locationInput"
                  placeholder="LOCATION NAME"
                  value={tempFormData.city}
                  onChange={(e) =>
                    setTempFormData((prev) => ({ ...prev, city: e.target.value }))
                  }
                />
              </div>

              {/* Date Pickers */}
              <div>
                <label className="SearchWidgetUIstyles__SearchLabelStyle-sc-1x37qbj-5 dhbsSR">CHECK-IN</label>
                <input
                  type="date"
                  id="search-widget-checkin-input"
                  className="SearchWidgetUIstyles__SearchInputStyle-sc-1x37qbj-6 kNWLrS"
                  value={tempFormData.checkIn}
                  onChange={(e) =>
                    setTempFormData((prev) => ({ ...prev, checkIn: e.target.value }))
                  }
                />
              </div>
              <div>
                <label className="SearchWidgetUIstyles__SearchLabelStyle-sc-1x37qbj-5 dhbsSR">CHECK-OUT</label>
                <input
                  type="date"
                  className="SearchWidgetUIstyles__SearchInputStyle-sc-1x37qbj-6 kNWLrS"
                  value={tempFormData.checkOut}
                  onChange={(e) =>
                    setTempFormData((prev) => ({ ...prev, checkOut: e.target.value }))
                  }
                />
              </div>

              {/* Guests */}
              <div>
                <label>GUESTS</label>
                <input
                  type="number"
                  min={1}
                  max={3}
                  className="adultsChildRoomInput"
                  value={tempFormData.adults}
                  onChange={(e) =>
                    setTempFormData((prev) => ({
                      ...prev,
                      adults: Math.max(1, parseInt(e.target.value) || 1),
                    }))
                  }
                />
                <input
                  type="number"
                  min={0}
                  max={2}
                  className="adultsChildRoomInput"
                  value={tempFormData.children}
                  onChange={(e) =>
                    setTempFormData((prev) => ({
                      ...prev,
                      children: Math.max(0, parseInt(e.target.value) || 0),
                    }))
                  }
                />
              </div>
            </div>

            {/* Update Button */}
            <button onClick={handleUpdate} className="dwebCommonstyles__ButtonBase-sc-112ty3f-14 SearchWidgetUIstyles__UpdateSearchBtn-sc-1x37qbj-7 hDRTlP">
              Update Search
            </button>
          </div>
        </section>
      </div>

      {/* Results */}
      <section className="SRPstyles__MainSectionWrapper-sc-1uttzk9-0 bOvdea">
        <div id="navigation_header" className="dwebCommonstyles__BaseColumnWrap-sc-112ty3f-2 civGJZ">
          <div className="NavigationHeaderstyles__QuickFiltersAndSortingOuterWrap-sc-mqv87k-1 UUNyH">
            <div className="NavigationHeaderstyles__QuickFiltersAndSortingWrapper-sc-mqv87k-2 eWVEtz">
              <div className="NavigationHeaderstyles__QuickFiltersWrapper-sc-mqv87k-3 kkGDxw">
                <span className="SortingNewUIstyles__FontBoldSpan-sc-16hh811-2 klKnqp">Sort By:</span>
                <li className="SortingNewUIstyles__SortingFilterItem-sc-16hh811-0 kkTVCa">
                  <span className="SortingNewUIstyles__FilterName-sc-16hh811-1 hWpyfY">Most Popular</span>
                </li>
                <li className="SortingNewUIstyles__SortingFilterItem-sc-16hh811-0 hYyKIP">
                  <span className="SortingNewUIstyles__FilterName-sc-16hh811-1 hWpyfY">Price - Low to High</span>
                </li>
                <li className="SortingNewUIstyles__SortingFilterItem-sc-16hh811-0 hYyKIP">
                  <span className="SortingNewUIstyles__FilterName-sc-16hh811-1 hWpyfY">Price - High to Low</span>
                </li>
                <li className="SortingNewUIstyles__SortingFilterItem-sc-16hh811-0 hYyKIP">
                  <span className="SortingNewUIstyles__FilterName-sc-16hh811-1 hWpyfY">Goibibo Reviews - Highest First</span>
                </li>
              </div>
              <div className="dwebCommonstyles__CenteredSpaceWrap-sc-112ty3f-0 NavigationHeaderstyles__LocationAndSortByOuterWrap-sc-mqv87k-6 buWWlt ihaObk">
                <div aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-2-label" className="LocationAndHotelSearchstyles__AutocompleteWrapper-sc-14hv01r-2 lgemGX">
                  <label
                    id="downshift-2-label"
                    // for="downshift-2-input"
                    className="LocationAndHotelSearchstyles__SearchLabel-sc-14hv01r-0 bUCobe"
                  >
                    Search Location Or Hotel Name
                  </label>
                  <div className="LocationAndHotelSearchstyles__InputWrapper-sc-14hv01r-3 efLeCM">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#777777" width="1.6rem" height="1.6rem" className="HappySearchIcon-sc-9cg8c3-0 fXDtaz">
                      <path d="m15.61 13.731-3.095-3.096a6.84 6.84 0 0 0-1.348-9.084 6.83 6.83 0 0 0-9.166.452 6.84 6.84 0 0 0-.449 9.172 6.83 6.83 0 0 0 9.079 1.346l3.095 3.095c.524.512 1.36.512 1.884 0 .52-.52.52-1.364 0-1.885M6.84 2.008a4.83 4.83 0 0 1 4.83 4.833 4.831 4.831 0 1 1-9.661 0 4.837 4.837 0 0 1 4.83-4.833z">
                      </path>
                    </svg>
                    <input
                      aria-autocomplete="list"
                      aria-labelledby="downshift-2-label"
                      // autocomplete="off"
                      id="downshift-2-input"
                      placeholder="Search Location or Property Name"
                      className="LocationAndHotelSearchstyles__SearchInput-sc-14hv01r-1 jjmpxR"
                      value=""
                    />
                  </div>
                  <ul id="downshift-2-menu" role="listbox" aria-labelledby="downshift-2-label" className="LocationAndHotelSearchstyles__Menu-sc-14hv01r-4 kpMBQF">
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="result-container">
        <div className="result-box">
          {filteredData.length > 0 ? (
            filteredData.map((val, index) => (
              <Link
                key={index}
                target="_blank"
                style={{ textDecoration: "none" }}
                to={`/article/${val.Category}/${val.ID}`}
              >
                <HotelView val={val} />
              </Link>
            ))
          ) : (
            <p>No hotels found for your selection.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayPage;