'use client'
import { useRouter } from "next/navigation";
import WestIcon from "@mui/icons-material/West";
import React, { useEffect } from "react";
import { Avatar, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import RideCard from "../components/RideCard/RideCard";
import CallIcon from '@mui/icons-material/Call';
import WifiIcon from '@mui/icons-material/Wifi';
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/redux/Auth/Action";

const Profile = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(state => state);
  const router = useRouter();
  console.log(router);
  const goBack = () => {
    router.back();
  };

 

  useEffect(() => {
    console.log("jwt --- ", jwt);
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  console.log("auth", auth)
  console.log("auth", auth)
  console.log("auth", auth)
    console.log("auth", auth)
      console.log("auth", auth)

  return (
    <div className="px-2 lg:px-5">
      <div className="px-2 lg:px-5 py-2">
        <WestIcon onClick={goBack} className="xursor-pointer" />
      </div>

      <div className="flex flex-col items-center space-y-2">
        <Avatar sx={{ bgcolor: deepOrange[500] }}>
          
        </Avatar>
        <p>{auth.user?.fullName}</p>
        <p>{auth.user?.mobile}</p>
      </div>

      <div className="border rounded-sm mt-5">
        <RideCard />
        <div className="flex flex-col items-center p-3">
                  <Button  onClick={()=>router.push("/your-rides")} variant="text"> See all rides</Button>
        </div>
      </div>

      <div className="border mt-5">
        <div className="flex items-center p-3 border-b">
          <AccountBalanceWalletIcon className="text-green-600" />
          <p className="ml-4">ola money</p>
        </div>
        <div className="flex items-center p-3 border-b">
          <CallIcon />
          <p className="ml-4">Emergency Contact</p>
        </div>
        <div className="flex items-center p-3">
          <WifiIcon />
          <p className="ml-4">Ola Wi-Fi Credentials</p>
        </div>
          </div>


          <div className="mt-5">
              <Button
          className="w-full bg-red-500 text-white"
          color="error"
          variant="contained"
        >
          Logout
        </Button>
      </div>
          

    </div>
  );
};

export default Profile;
