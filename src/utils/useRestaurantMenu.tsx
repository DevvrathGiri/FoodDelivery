import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId:string | undefined) => {
  const [resInfo, setResInfo] = useState(null);
  

  useEffect(() => {
    const fetchMenu = async () => {
      const json = await fetch(MENU_API + resId);
      const data = await json.json();
      setResInfo(data?.data);
    };

    fetchMenu();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
