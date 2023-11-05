import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";
const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId + "&submitAction=ENTER");

    if (!data.ok) {
      throw new Error("Error in api call");
    }

    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurentMenu;
