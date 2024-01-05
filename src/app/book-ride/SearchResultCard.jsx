"use client";

import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {  usePathname, useRouter, useSearchParams } from "next/navigation"
import { Search } from "@mui/icons-material";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { makeEmpty } from "@/Redux/EmptyAction";
// import { SEARCH_SUCCESS } from "@/Redux/Ride/ActionType";

const SearchResultCard = ({ item, latitude_key, longitude_key, setActiveField, area_key }) => {
    
    const pickup_lattitude = 19.0785451
    const pickup_longitude = 72.878176
    const pickup_area = "Mumbai , Mumbai Surburban, Maharashtra, India"
    const destination_lattitude = 42.2781401
    const destination_longitude = -74.9159946
    const destination_area = "Delhi, Town of Delhi, Dealware Country, New Tork, United States"
    
    const useSearchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleSelect = () => {
        const params = new URLSearchParams(SearchParams)
        params.set([latitude_key], pickup_lattitude)
        params.set([longitude_key], pickup_longitude)
        params.set([area_key], pickup_area)

        router.replace(pathname+"?"+params.toString())
}
    
  return (
    <div onClick={handleSelect} className="flex items-center py-2 z-10 bg-white cursor-pointer">
      <div className="pr-5">
        <LocationOnIcon />
      </div>
      <div>
        <p className="font-semibold"> mumbai</p>
        <p className="font-semibold opacity-60">
         pune lonavla
        </p>
      </div>
    </div>
  );
};

export default SearchResultCard;
