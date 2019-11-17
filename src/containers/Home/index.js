import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, fetchNextPage, fetchPrevPage } from "../../actions";

import "./styles.scss";

const Home = () => {
  const inputEl = useRef();
  const data = useSelector(state => state);
 
  const { page, loading, error } = data;
  console.log(page);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  useEffect(() => {
    setQuery(data.query);
  }, [data.query]);

  const handleChange = event => {
    const { value } = event.target;
    setQuery(value);
  };
  const getData = event => {
    dispatch(fetchEvents(query, page));
  };
  const nextPage = () => {
    dispatch(fetchNextPage(query, page));
  };
  const prevPage = () => {
    dispatch(fetchPrevPage(query, page));
  };
  return (
    <div className="wrapper">
      <div className="box is-large">
        <div className=" field has-addons ">
          <input
            className="input"
            ref={inputEl}
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="e.g.concerts,nba"
          />

          <button
            type="button"
            className="button is-success is-outlined"
            onClick={getData}
          >
            Search Event
          </button>
        </div>

        <nav
          class="pagination is-centered"
          role="navigation"
          aria-label="pagination"
        >
          <ul class="pagination-list">
            <li onClick={prevPage}>
              <button type="button" className="pagination-link ">
                {"←"}
              </button>
            </li>
            <li>
              <button type="button" class="pagination-link is-current">
                {page + 1}
              </button>
            </li>
            <li>
              <button type="button" onClick={nextPage} class="pagination-link">
                {"→"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {error && <div>You probably search with a non-exist keyword..</div>}
      {loading ? (
        <div>Loading..</div>
      ) : (
        <div className="box is-large">
          <table className="table    is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            {data &&
              data.events.map(({ id, name, images }) => (
                <tbody key={id} class="is-bordered">
                  <tr>
                    <td>
                      <img
                        width={100}
                        height={56}
                        alt="Event poster"
                        src={images[0]["url"]}
                      />
                    </td>
                    <td>{name}</td>
                    <td>
                      <Link to={`/ticket-details/${id}`}>
                        <button
                          className="button is-small is-outlined is-danger"
                          
                        >
                          Go to Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
