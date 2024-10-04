import { createContext } from "react";
import bannerData from "../utils/Data/holiday.json";

export const  HolidayContext = createContext();

const HolidayProvider = ({ children }) => {
  return (
    <HolidayContext.Provider value={bannerData}>
      {children}
    </HolidayContext.Provider>
  );
};

export default HolidayProvider;
