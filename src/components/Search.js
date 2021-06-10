import { useState } from 'react';
import postcodes from 'node-postcodes.io';

function Search(props) {

  const [service, setService] = useState('gp');
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { result: { latitude, longitude } } = await postcodes.lookup(query);

    props.setResults({
      query,
      service,
      latitude,
      longitude
    })
  }

  const handleService = (e) => {
    setService(e.target.value);
  }

  const handleQuery = (e) => {
    setQuery(e.target.value);
  }

  return (
    <>
      <h1>Find a service</h1>
      <form onSubmit={handleSubmit}>
        <div className="nhsuk-form-group">
          <label className="nhsuk-label" htmlFor="service">
            Service
          </label>
          <select className="nhsuk-select" id="service" name="service" value={service} onChange={handleService}>
            <option value="gp">GP</option>
            <option value="hospital">Hospital</option>
          </select>
        </div>
        <div className="nhsuk-form-group">
          <label className="nhsuk-label" htmlFor="query">
            Enter a postcode
          </label>
          <input className="nhsuk-input nhsuk-input--width-20" id="query" name="query" value={query} onChange={handleQuery} type="text" />
        </div>
        <button className="nhsuk-button" type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default Search;
