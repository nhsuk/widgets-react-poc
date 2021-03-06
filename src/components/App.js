import { useState } from 'react';

import Search from './Search';
import Results from './Results';

import getOrganisations from '../utils/getOrganisations';
import { services } from '../constants';

function App() {
  const [service, setService] = useState('gp');
  const [postcode, setPostcode] = useState('');
  const [error, setError] = useState(false);
  const [organisations, setOrganisations] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setOrganisations(await getOrganisations(postcode, service));
      setError(false);
    } catch (error) {
      setError(true)
    }
  }

  function handleService(e) {
    setService(e.target.value);
  }

  function handlePostcode(e) {
    setPostcode(e.target.value);
  }
  
  function handleReset() {
    setOrganisations([]);
  }

  return (
    <>
      <header className="nhsuk-header nhsuk-header--transactional" role="banner">
        <div className="nhsuk-width-container nhsuk-header__container">
          <div className="nhsuk-header__logo nhsuk-header__logo--only">
            <a className="nhsuk-header__link" href="/" aria-label="NHS homepage">
            <svg className="nhsuk-logo" role="presentation" focusable="false" viewBox="0 0 40 16">
              <path className="nhsuk-logo__background" d="M0 0h40v16H0z"></path>
              <path className="nhsuk-logo__text" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
            </svg>
            </a>
          </div>
          <div className="nhsuk-header__transactional-service-name">
            <a className="nhsuk-header__transactional-service-name--link" href="/">NHS services widget</a>
          </div>
        </div>
      </header>
      <div className="nhsuk-width-container">
        <main id="main-content" className="nhsuk-main-wrapper">
          <div className="nhsuk-grid-row">
            <div className="nhsuk-grid-column-full">
              { organisations.length === 0 ?
                <Search 
                  handleSubmit={handleSubmit}
                  service={service}
                  handleService={handleService}
                  postcode={postcode}
                  handlePostcode={handlePostcode} 
                  error={error}
                /> :
                <Results 
                  organisations={organisations}
                  handleReset={handleReset}
                  title={services[service].resultsTitle}
                  postcode={postcode}
                />
              }
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
