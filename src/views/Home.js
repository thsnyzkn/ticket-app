import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, fetchNextPage, fetchPrevPage } from "../actions/index";

const Home = () => {
  const data = useSelector(state => state);
  console.log(data.page);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  /*useEffect(()=>{
    dispatch(fetchEvents(query))
  },[dispatch,query])*/

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const getData = () => {
    dispatch(fetchEvents(query, data.page));
  };
  const nextPage = () => {
    dispatch(fetchNextPage(query, data.page));
  };
  const prevPage = () => {
    dispatch(fetchPrevPage(query, data.page));
  };
  return (
    <div style={{ margin: "10%" }}>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
        placeholder="e.g.concerts,nba"
      />
      <button type="button" onClick={getData}>
        Search Event
      </button>
      <div>{`Page  ${data.page + 1}`}</div>
      {isError && <div>You probably search with a non-exist keyword..</div>}
      {isLoading ? (
        <div>Loading..</div>
      ) : (
        <table
          style={{ border: "1px solid black", borderCollapse: "collapse" }}
        >
          <thead>
            <tr style={{ border: "1px solid black" }}>
              <th scope="col" style={{ border: "1px solid black" }}>
                Image
              </th>
              <th scope="col" style={{ border: "1px solid black" }}>
                Name
              </th>
              <th scope="col" style={{ border: "1px solid black" }}>
                Date
              </th>
              <th scope="col" style={{ border: "1px solid black" }}>
                Time
              </th>
              <th scope="col" style={{ border: "1px solid black" }}>
                Details
              </th>
            </tr>
          </thead>
          {data &&
            data.events.map(({ id, name, dates, images }) => (
              <tbody key={id}>
                <tr style={{ border: "1px solid black" }}>
                  <td>
                    <img
                      width={100}
                      height={56}
                      alt="Event poster"
                      src={images[0]["url"]}
                    />
                  </td>
                  <td style={{ border: "1px solid black" }}>{name}</td>
                  <td style={{ border: "1px solid black" }}>
                    {dates.start.localDate}
                  </td>
                  <td style={{ border: "1px solid black" }}>
                    {dates.start.localTime}
                  </td>
                  <td>
                    <Link to={`/ticket-details/${id}`}>
                      <button onClick={() => console.log("hey")}>
                        Go to Details
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      )}
      <button onClick={prevPage}>Prev</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Home;
