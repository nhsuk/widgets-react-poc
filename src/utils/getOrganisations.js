import axios from 'axios';

import { services } from '../constants';
import mapOrganisations from '../utils/mapOrganisations';

async function getOrganisations(postcode, service) {
  const { data } = await axios({
    method: 'POST',
    url: `https://api.nhs.uk/service-search/search-postcode-or-place?api-version=1&search=${postcode}`,
    headers: {
      'Content-Type': 'application/json',
      'subscription-key': '7542f5b4dbd94396910bd1e0af786d78',
    },
    data: {
      filter: services[service].query,
      top: 10,
    },
  });

  return mapOrganisations(data.value);
}

export default getOrganisations;
