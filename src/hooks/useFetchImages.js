import { useCallback, useState, useEffect } from 'react';

export const useFetchImages = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const peticion = useCallback(async () => {
    const key = "client_id=rZrJZJkaiEAp-YOANmmNU75i0rVa3rJar35PNZpnRnM";
    const perPage = 20; 

    let route = `https://api.unsplash.com/photos/?${key}&page=${page}&per_page=${perPage}&order_by=popular`;
    console.log(route);

    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?page=${page}&per_page=${perPage}&query=${encodeURI(input)}&${key}`;
    }

    setLoading(true);

    const res = await fetch(route);
    const data = await res.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }

    setLoading(false);
  }, [input, page]);

  useEffect(() => {
    peticion();
  }, [input, page, peticion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    setInput(text);
    setPage(1); // Reset page to 1 on new search
  };

  const nextPage = () => setPage((prevPage) => prevPage + 1);
  const prevPage = () => setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  const selectPage = (newPage) => setPage(newPage);

  const breakpointColumnsObj = {
    default: 4,
    1100: 2,
    700: 1,
  };

  return [images, loading, handleSubmit, breakpointColumnsObj, nextPage, prevPage, selectPage, page];
};
