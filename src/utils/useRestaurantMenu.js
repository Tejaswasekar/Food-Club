import { useState, useEffect } from "react";

const useRestarantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4706021&lng=73.868921&restaurantId=1209804&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);

    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestarantMenu;
