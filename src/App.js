import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./views/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
 
} from "react-router-dom";
const Details = () => {
  return <div>SELAM</div>;
};
function App() {
 
  const [data, setData] = useState({ events: [] });
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [url, setUrl] = useState(
    `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&page=${page}&size=20&apikey=lry7krbABlWRHt4YpxfSjudOeTi2cZs3`
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data._embedded);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
  const nextPage = () => {
    setPage(page + 1);
    setUrl(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&page=${page}&size=20&apikey=lry7krbABlWRHt4YpxfSjudOeTi2cZs3`
    );
  };
  const previousPage = () => {
    setPage(page - 1);
    console.log(page);
    setUrl(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&page=${page}&size=20&apikey=lry7krbABlWRHt4YpxfSjudOeTi2cZs3`
    );
  };
  return (
    <Router>
      <div style={{ margin: "10%" }}>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            setUrl(
              `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${query}&page=${page}&size=20&apikey=lry7krbABlWRHt4YpxfSjudOeTi2cZs3`
            );
            setPage(page + 1);
            setQuery("");
          }}
        >
          Search Event
        </button>
        <div>{`Page  ${page + 1}`}</div>
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
              data.events.map(({ id, name, dates }) => (
                <tbody key={id}>
                  <tr style={{ border: "1px solid black" }}>
                    <td style={{ border: "1px solid black" }}>{name}</td>
                    <td style={{ border: "1px solid black" }}>
                      {dates.start.localDate}
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      {dates.start.localTime}
                    </td>
                    <td>
                     <Link to={`/ticket-details/${id}`}>
                       <button onClick={()=>console.log('hey')}>Purchase</button>
                     </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        )}
        <button onClick={() => previousPage(page)}>Previous</button>
        <button onClick={() => nextPage(page)}>Next</button>
        <Switch>
          <Route  path="/" children={<Home/>} />
          <Route path="/ticket-details/:id" children={<Details />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
