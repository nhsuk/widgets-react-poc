const buildUrl = (org) => {
  const urlPaths = {
    GPB: 'gp',
    DEN: 'dentists',
    HOS: 'hospitals',
    PHA: 'pharmacies',
    OPT: 'opticians',
  };
  return `https://www.nhs.uk/Services/${urlPaths[org.OrganisationTypeID]}/Overview/DefaultView.aspx?id=${org.NACSCode}`;
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
  url: buildUrl(org),
}));

export default mapOrganisations;
