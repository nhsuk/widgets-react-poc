function Results(props) {
  return (
    <>
      <div className="nhsuk-back-link">
        <button className="nhsuk-back-link__link" onClick={props.handleReset}>
          <svg className="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
          </svg>
          Go back
        </button>
      </div>
      <h1>{props.title} near "{props.postcode}"</h1>
      <ul className="nhsuk-list app-results__list nhsuk-u-padding-top-4">
        {props.organisations.map(({ name, address, url}, index) => (
          <li className="app-results__list-item nhsuk-u-padding-bottom-4 nhsuk-u-margin-bottom-4" key={`organisation-${index}`}>
            <div className="nhsuk-grid-row">
              <div className="nhsuk-grid-column-one-half">
                <h2 className="nhsuk-heading-m nhsuk-u-padding-top-0 nhsuk-u-margin-bottom-2">
                  <a href={ url }>{ name }</a>
                </h2>
                <p className="nhsuk-u-margin-bottom-0">{ address }</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Results;
