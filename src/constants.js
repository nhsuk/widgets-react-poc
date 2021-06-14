export const services = {
  flu: {
    resultsTitle: 'Flu vaccination services',
    query: "ServicesProvided/any(service: service eq 'Pharmacy Service: Seasonal flu vaccination service (at risk groups)' or service eq 'Pharmacy Service (Non-NHS): Seasonal flu vaccination service (not at risk groups)')",
  },
  gp: {
    resultsTitle: 'GPs',
    query: "OrganisationTypeID eq 'GPB'",
  },
  dentist: {
    resultsTitle: 'Dentists',
    query: "OrganisationTypeID eq 'DEN'",
  },
  hospital: {
    resultsTitle: 'Hospitals',
    query: "OrganisationTypeID eq 'HOS'",
  },
  pharmacy: {
    resultsTitle: 'Pharmacies',
    query: "OrganisationTypeID eq 'PHA'",
  },
  optician: {
    resultsTitle: 'Opticians',
    query: "OrganisationTypeID eq 'OPT'",
  }
};
