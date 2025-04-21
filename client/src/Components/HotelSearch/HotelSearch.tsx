import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./HotelSearch.css";
import ResultPage from "./DisplayPage";
import Advertisement from "../Home-Section/Home";
import BackgroundBG from "../../Assets/header-bg.svg";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

export interface Trip {
  ID: string;
  Category: string;
  CategoryHead: string;
  [key: string]: any;
}

export interface SearchResult {
  city: string;
  adults: number;
  children: number;
  nights: number;
  days: number;
  checkIn: string;
  checkOut: string;
}

interface RouteParams {
  Id?: string;
  cat?: string;
  [key: string]: string | undefined;
}

const HotelSearch: React.FC = () => {
  const { cat } = useParams<RouteParams>();

  const [yourTrip, setYourTrip] = useState<Trip[]>([]);
  const [checkIn, setCheckIn] = useState<Dayjs | null>(null);
  const [checkOut, setCheckOut] = useState<Dayjs | null>(null);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [city, setCity] = useState<string>("");
  const [nightStatus, setNightStatus] = useState<{ nights: number }>({ nights: 0 });

  const [result, setResult] = useState<SearchResult | null>(null);
  const [showResultPage, setShowResultPage] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("http://localhost:8040/api/v1/VentureVibes")
      .then((res) => setYourTrip(res.data))
      .catch((err) => console.error(err));
  }, [cat]);

  const getDayOfWeek = (date: Dayjs | null): string => {
    if (!date) return "";
    return date.format("dddd");
  };

  useEffect(() => {
    if (checkIn && checkOut && checkOut.isAfter(checkIn)) {
      const nights = checkOut.diff(checkIn, "day");
      setNightStatus({ nights });
    } else {
      setNightStatus({ nights: 0 });
    }
  }, [checkIn, checkOut]);

  const handleSearch = () => {
    if (!checkIn || !checkOut || !city.trim()) {
      alert("Please fill out all fields (Check-in, Check-out, and City).");
      return;
    }

    if (checkOut.isAfter(checkIn)) {
      const days = checkOut.diff(checkIn, "day");
      const nights = days - 1;

      const searchResult: SearchResult = {
        city,
        adults,
        children,
        nights,
        days,
        checkIn: checkIn.toISOString(),
        checkOut: checkOut.toISOString(),
      };

      setResult(searchResult);
      setShowResultPage(true);
    } else {
      alert("Check-out date must be after check-in date.");
    }
  };

  if (showResultPage && result) {
    return <ResultPage result={result} setResult={setResult} />;
  }

  return (
    <>
      <img src={BackgroundBG} className="background-bg" alt="background" />
      <div className="hotelSearch-container">
        <div className="CategoryHead">
          {yourTrip
            .filter((value) => value.ID === "1" && value.Category === cat)
            .map((val, index) => (
              <h2 className="mainCategory" key={index}>
                {val.CategoryHead}
              </h2>
            ))}
        </div>

        <div className="container">
          <div className="input-box">
            <div className="input-group">
              <TextField
                id="outlined-multiline-flexible"
                label="Where to"
                maxRows={4}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter Location or city"
                fullWidth
              />
            </div>

            <div className="input-group LocalizationProvider">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <DatePicker
                    label="Check-in Date"
                    value={checkIn}
                    onChange={(date) => setCheckIn(date)}
                  />
                  <DatePicker
                    label="Check-out Date"
                    value={checkOut}
                    onChange={(date) => setCheckOut(date)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div className="input-group">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="adults-label">Adults</InputLabel>
                  <Select
                    labelId="adults-label"
                    value={adults}
                    label="Adults"
                    onChange={(e: SelectChangeEvent<number>) =>
                      setAdults(Number(e.target.value))
                    }
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div className="input-group">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="children-label">Children</InputLabel>
                  <Select
                    labelId="children-label"
                    value={children}
                    label="Children"
                    onChange={(e: SelectChangeEvent<number>) =>
                      setChildren(Number(e.target.value))
                    }
                  >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>

          <div className="extra-section">
            {checkIn && (
              <Box className="checkIn" component="section">
                <strong>{getDayOfWeek(checkIn)}</strong>
              </Box>
            )}
            {checkOut && (
              <Box className="checkOut" component="section">
                <strong>{getDayOfWeek(checkOut)}</strong>
              </Box>
            )}
            {checkOut && (
              <Box className="nightStatus" component="section">
                <strong>Nights: {nightStatus.nights}</strong>
              </Box>
            )}
          </div>

          <br />

          <div className="hotelSearch">
            <button className="hotelSearchButton" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>

        <Advertisement />
      </div>
    </>
  );
};

export default HotelSearch;
