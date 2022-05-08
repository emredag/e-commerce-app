import React, { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const values = {
    currentCategory,
    setCurrentCategory,
    searchParams,
    setSearchParams,
    loading,
    setLoading,
  };

  return (
    <ProfileContext.Provider value={values}>{children}</ProfileContext.Provider>
  );
};

export default ProfileContext;
