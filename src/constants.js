export const finderData = {
  flu: {
    path: 'flu',
    searchTitle: 'Find a flu vaccination service',
    resultsTitle: 'Flu vaccination services',
    query: "ServicesProvided/any(service: service eq 'Pharmacy Service: Seasonal flu vaccination service (at risk groups)' or service eq 'Pharmacy Service (Non-NHS): Seasonal flu vaccination service (not at risk groups)')",
  },
  gp: {
    path: 'gp',
    searchTitle: 'Find a GP',
    resultsTitle: 'GPs',
    query: "OrganisationTypeID eq 'GPB'",
  },
  dentist: {
    path: 'dentist',
    searchTitle: 'Find a dentist',
    resultsTitle: 'Dentists',
    query: "OrganisationTypeID eq 'DEN'",
  },
  hospital: {
    path: 'hospital',
    searchTitle: 'Find a hospital',
    resultsTitle: 'Hospitals',
    query: "OrganisationTypeID eq 'HOS'",
  },
  pharmacy: {
    path: 'pharmacy',
    searchTitle: 'Find a pharmacy',
    resultsTitle: 'Pharmacies',
    query: "OrganisationTypeID eq 'PHA'",
  },
  optician: {
    path: 'optician',
    searchTitle: 'Find an opticians',
    resultsTitle: 'Opticians',
    query: "OrganisationTypeID eq 'OPT'",
  },
  all: {
    path: 'all',
    searchTitle: 'Find services near you',
  },
};

export const urlPaths = {
  GPB: 'gp',
  DEN: 'dentists',
  HOS: 'hospitals',
  PHA: 'pharmacies',
  OPT: 'opticians',
};

export const defaultResults = {
  query: '',
  service: '',
  latitude: '',
  longitude: '',
  organisations: []
}
