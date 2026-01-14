import { useState, useEffect } from "react";
import MenuData from "./MenuData";

const useRestarantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Use local data copy from MenuData.js — return the restaurant info object directly.
    const info = MenuData?.data?.cards?.[2]?.card?.card?.info || null;
    setResInfo(info + resId);
  };

  return resInfo;
};

export default useRestarantMenu;
