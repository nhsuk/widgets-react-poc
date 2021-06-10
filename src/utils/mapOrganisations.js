const { urlPaths } = require('../constants');

const buildOrganisationUrl = (org) => {
  const urlPath = urlPaths[org.OrganisationTypeID];
  return `https://www.nhs.uk/Services/${urlPath}/Overview/DefaultView.aspx?id=${org.NACSCode}`;
};

const buildAddress = (org) => [
  org.Address1,
  org.Address2,
  org.Address3,
  org.City,
  org.County,
  org.Postcode,
].filter(Boolean).join(', ');

const mapOrganisations = (orgs) => orgs.map((org) => ({
  address: buildAddress(org),
  name: org.OrganisationName,
  url: buildOrganisationUrl(org),
}));

export default mapOrganisations;
