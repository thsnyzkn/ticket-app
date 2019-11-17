import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Details = () => {
  let { id } = useParams();
  
  const [details, setDetails] = useState({ details: [] });
  const [images, setImages] = useState({ images: [] });
  const [isLoading, setIsLoading] = useState(false);
  const { name,priceRanges } = details;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(
          `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=lry7krbABlWRHt4YpxfSjudOeTi2cZs3`
        );
        const res_images = await axios(
          `https://app.ticketmaster.com/discovery/v2/events/${id}/images.json?apikey=lry7krbABlWRHt4YpxfSjudOeTi2cZs3`
        );
        setDetails(result.data);
        setImages(res_images.data.images);
      } catch (error) {}
      setIsLoading(false);
    };
  
    fetchData();
  }, [id, details, images]);
  
  return (
    <div class="wrapper section">
      <div class="box is-large">
        <ul>
        <li>
            <img
              width={100}
              height={56}
              alt="Event poster"
              src={Object.values(images)[0]["url"]}
            />
          </li>
          <li> {name}</li>
        
        
        </ul>
      </div>
    </div>
  );
};
export default Details;
