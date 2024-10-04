import { createContext } from "react";
import contactUsData from "../utils/Data/contact.json";

export const  ContactContext = createContext();

const ContactProvider = ({ children }) => {
  return (
    <ContactContext.Provider value={contactUsData}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
