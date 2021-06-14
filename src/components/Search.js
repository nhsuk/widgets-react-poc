function Search(props) {
  const {
    handleSubmit,
    handleService,
    handlePostcode,
    service,
    postcode,
    error
  } = props;
  
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
            <option value="pharmacy">Pharmacy</option>
            <option value="dentist">Dentist</option>
            <option value="hospital">Hospital</option>
            <option value="optician">Optician</option>
            <option value="flu">Flu vaccination</option>
          </select>
        </div>
        <div className={`nhsuk-form-group ${ error && 'nhsuk-form-group--error'}`}>
          <label className="nhsuk-label" htmlFor="postcode">
            Enter a postcode
          </label>
          { error &&
            <span className="nhsuk-error-message" id="postcode-error">
              <span className="nhsuk-u-visually-hidden">Error:</span> Enter a valid postcode
            </span>
          }
          <input 
            className="nhsuk-input nhsuk-input--width-20" 
            id="postcode" 
            name="postcode" 
            value={postcode} 
            onChange={handlePostcode}
            aria-describedby="postcode-error" />
        </div>
        <button className="nhsuk-button" type="submit">
          Search
        </button>
      </form>
    </>
  );
}

export default Search;
