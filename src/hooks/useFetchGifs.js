import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [imgs, setImgs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const giffs = await getGifs(category);
    setImgs(giffs);
    setIsLoading(false);
  };

  console.log({ imgs });
  useEffect(() => {
    getImages();
  }, []);

  return {
    imgs,
    isLoading
  };
};
