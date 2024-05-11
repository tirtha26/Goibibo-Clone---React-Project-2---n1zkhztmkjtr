import { Carousel } from "@material-tailwind/react";
import { Box, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export default function Train() {
  const TrainSearch = async () => {
    try {
      const response = await axios.get();
    } catch {}
  };
  return (
    <div className="Train-main bg-blue-100">
      <div className="train-bg bg-blue-100">
        <div className="relative top-10 h-auto border-spacing-5 flex justify-between ml-40  w-3/4 text-white font-bold font-sans">
          <div className="text-orange-500 font-extrabold font-rubik font-sans text-xl">
            Train Ticket Booking
          </div>
          <div className="flex items-center text-white font-extrabold font-rubik font-sans text-xl">
            <img
              className="bg-white w-15 h-15 items-center rounded-full mr-1 "
              alt="Irctc text logo"
              src="https://gos3.ibcdn.com/irctcWithTxt-1668596751.svg"
              width="45"
              height="45"
            />
            <div className="text-orange-500"> IRCTC Authorized Partner</div>
          </div>
        </div>
        {/* ======================paper==================================== */}
        <Paper
          className="peper"
          sx={{
            width: "80vw",
            height: "35vh",
            mr: "200px",
            ml: "200px",
            mt: "50px",
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* ======================Radio buttons=================================== */}
          <FormControl sx={{ padding: "40px 20px" }}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Book Train tickets"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Check PNR Status"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Live Trains Status"
              />
            </RadioGroup>
          </FormControl>
          {/* ================input Box ============================= */}

          <Box className="flex gap-3  ml-6">
            <Box className="relative">
              <TextField
                id="outlined-controlled"
                label="From*"
                // value={name}
                />
            </Box>
            <Box className="relative">
              <TextField id="outlined-controlled" label="To*" />
            </Box>
            <Box className="relative">
              <TextField
                id="outlined-controlled"
                label="Departure"
                defaultValue="09 MAy 24 Thursday"
                />
            </Box>
          
                
            <Box className="relative ml-4 flex gap-3">
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    className="bg-gray-100 p-2 rounded-lg"
                    value="female"
                    control={<Radio />}
                    label="Today"
                  />
                  <FormControlLabel
                    className="bg-gray-100 p-2 rounded-lg"
                    value="male"
                    control={<Radio />}
                    label="Tommorow"
                    
                  />
                  <FormControlLabel
                    className="bg-gray-100 p-2 rounded-lg"
                    value="other"
                    control={<Radio />}
                    label="Day after tommorow"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box className="flex justify-center p-10">
            <button className="text-white bg-orange-400 hover:bg-orange-500 p-5 text-xl font-extrabold rounded-full w-60">
              SEARCH TRAIN
            </button>
          </Box>
        </Paper>
      </div>
      <Box className=" mt-20" sx={{ background: "#EFF3F8" }}>
        <Box className=" border-2 border-solid border-black rounded-xl w-3/4 ml-60">
          <img src="image.png" alt="bannerimg" />
        </Box>
        <h1 className="font-bold font-rubik text-4xl text-center mt-6">
          1 million+ customers
        </h1>
        <p className="text-center text-xl font-rubik font-normal">
          book train tickets with us because
        </p>
        <Box className="flex justify-around m-4 ">
          <Box className="flex justify-center">
            <Box className="lg:bg-blue-200 px-5 py-4 mr-3 rounded-full">
              {" "}
              <img src="https://gos3.ibcdn.com/no_can_fee-1668596842.svg" />
            </Box>
            <Box>
              <p>No Cancellation Fee</p>
              <p>You can opt for free cancellation & get full refund</p>
              <p>
                <a href="https://www.goibibo.com/offers/free-train-cancellation/">
                  Learn more about cancellation
                </a>
              </p>
            </Box>
          </Box>
          <Box className="flex justify-center">
            <Box className="lg:bg-blue-200 px-6 py-3 mr-3 rounded-full">
              {" "}
              <img src="https://gos3.ibcdn.com/go_cnfrm-1668596688.svg" />
            </Box>
            <Box>
              <p>goConfirmed Trip</p>
              <p>Guaranteed confirmed tickects or we give you 2x refund</p>
              <p>
                <a href="https://www.goibibo.com/offers/go-confirmed-trip-2x/">
                  Learn more about goConfirmed
                </a>
              </p>
            </Box>
          </Box>
          <Box className="flex justify-center">
            <Box className="mr-3 ">
              {" "}
              <img src="https://gos3.ibcdn.com/no_pg_fee_icon-1673341757.png" />
            </Box>
            <Box>
              <p>No PG Fee via UPI</p>
              <p>Zero Payment Gateway Charges via UPI mode</p>
              <p></p>
            </Box>
          </Box>
        </Box>
      </Box>
      {/*
            <Carousel className="rounded-xl w-30 h-30">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel> */}
    </div>
  );
}
