// ===========================
// AED LAWS API (frontend mock data)
// ===========================

// STATES LIST (with abbreviations)
const statesData = [
  { slug: "alabama", name: "Alabama", abbreviation: "AL", summary: "Alabama requires AEDs in schools and public facilities." },
  { slug: "alaska", name: "Alaska", abbreviation: "AK", summary: "Alaska encourages AED deployment in public spaces." },
  { slug: "arizona", name: "Arizona", abbreviation: "AZ", summary: "Arizona mandates AEDs in schools and athletic facilities." },
  { slug: "arkansas", name: "Arkansas", abbreviation: "AR", summary: "Arkansas requires AEDs in health clubs and schools." },
  { slug: "california", name: "California", abbreviation: "CA", summary: "California has comprehensive AED requirements for public venues." },
  { slug: "colorado", name: "Colorado", abbreviation: "CO", summary: "Colorado requires AEDs in schools and fitness centers." },
  { slug: "connecticut", name: "Connecticut", abbreviation: "CT", summary: "Connecticut mandates AEDs in schools and health clubs." },
  { slug: "delaware", name: "Delaware", abbreviation: "DE", summary: "Delaware requires AEDs in public buildings." },
  { slug: "florida", name: "Florida", abbreviation: "FL", summary: "Florida has extensive AED laws for schools and public facilities." },
  { slug: "georgia", name: "Georgia", abbreviation: "GA", summary: "Georgia requires AEDs in schools and fitness centers." },
  { slug: "hawaii", name: "Hawaii", abbreviation: "HI", summary: "Hawaii mandates AEDs in public facilities." },
  { slug: "idaho", name: "Idaho", abbreviation: "ID", summary: "Idaho encourages AED placement in schools." },
  { slug: "illinois", name: "Illinois", abbreviation: "IL", summary: "Illinois requires AEDs in schools and health clubs." },
  { slug: "indiana", name: "Indiana", abbreviation: "IN", summary: "Indiana mandates AEDs in schools and public facilities." },
  { slug: "iowa", name: "Iowa", abbreviation: "IA", summary: "Iowa requires AEDs in schools and fitness centers." },
  { slug: "kansas", name: "Kansas", abbreviation: "KS", summary: "Kansas encourages AED deployment in public spaces." },
  { slug: "kentucky", name: "Kentucky", abbreviation: "KY", summary: "Kentucky requires AEDs in schools and athletic facilities." },
  { slug: "louisiana", name: "Louisiana", abbreviation: "LA", summary: "Louisiana mandates AEDs in schools and health clubs." },
  { slug: "maine", name: "Maine", abbreviation: "ME", summary: "Maine requires AEDs in public facilities." },
  { slug: "maryland", name: "Maryland", abbreviation: "MD", summary: "Maryland has comprehensive AED requirements." },
  { slug: "massachusetts", name: "Massachusetts", abbreviation: "MA", summary: "Massachusetts requires AEDs in schools and health clubs." },
  { slug: "michigan", name: "Michigan", abbreviation: "MI", summary: "Michigan mandates AEDs in schools and fitness centers." },
  { slug: "minnesota", name: "Minnesota", abbreviation: "MN", summary: "Minnesota requires AEDs in public facilities." },
  { slug: "mississippi", name: "Mississippi", abbreviation: "MS", summary: "Mississippi encourages AED placement in schools." },
  { slug: "missouri", name: "Missouri", abbreviation: "MO", summary: "Missouri requires AEDs in schools and health clubs." },
  { slug: "montana", name: "Montana", abbreviation: "MT", summary: "Montana encourages AED deployment in public spaces." },
  { slug: "nebraska", name: "Nebraska", abbreviation: "NE", summary: "Nebraska requires AEDs in schools." },
  { slug: "nevada", name: "Nevada", abbreviation: "NV", summary: "Nevada mandates AEDs in schools and public facilities." },
  { slug: "new-hampshire", name: "New Hampshire", abbreviation: "NH", summary: "New Hampshire requires AEDs in schools." },
  { slug: "new-jersey", name: "New Jersey", abbreviation: "NJ", summary: "New Jersey has comprehensive AED requirements." },
  { slug: "new-mexico", name: "New Mexico", abbreviation: "NM", summary: "New Mexico encourages AED placement in schools." },
  { slug: "new-york", name: "New York", abbreviation: "NY", summary: "New York requires AEDs in schools and public facilities." },
  { slug: "north-carolina", name: "North Carolina", abbreviation: "NC", summary: "North Carolina mandates AEDs in schools and health clubs." },
  { slug: "north-dakota", name: "North Dakota", abbreviation: "ND", summary: "North Dakota encourages AED deployment." },
  { slug: "ohio", name: "Ohio", abbreviation: "OH", summary: "Ohio requires AEDs in schools and fitness centers." },
  { slug: "oklahoma", name: "Oklahoma", abbreviation: "OK", summary: "Oklahoma mandates AEDs in schools." },
  { slug: "oregon", name: "Oregon", abbreviation: "OR", summary: "Oregon requires AEDs in public facilities." },
  { slug: "pennsylvania", name: "Pennsylvania", abbreviation: "PA", summary: "Pennsylvania has comprehensive AED requirements." },
  { slug: "rhode-island", name: "Rhode Island", abbreviation: "RI", summary: "Rhode Island requires AEDs in schools and health clubs." },
  { slug: "south-carolina", name: "South Carolina", abbreviation: "SC", summary: "South Carolina mandates AEDs in schools." },
  { slug: "south-dakota", name: "South Dakota", abbreviation: "SD", summary: "South Dakota encourages AED placement." },
  { slug: "tennessee", name: "Tennessee", abbreviation: "TN", summary: "Tennessee requires AEDs in schools and public facilities." },
  { slug: "texas", name: "Texas", abbreviation: "TX", summary: "Texas has comprehensive AED requirements." },
  { slug: "utah", name: "Utah", abbreviation: "UT", summary: "Utah requires AEDs in schools and fitness centers." },
  { slug: "vermont", name: "Vermont", abbreviation: "VT", summary: "Vermont mandates AEDs in schools." },
  { slug: "virginia", name: "Virginia", abbreviation: "VA", summary: "Virginia requires AEDs in schools and public facilities." },
  { slug: "washington", name: "Washington", abbreviation: "WA", summary: "Washington has comprehensive AED requirements." },
  { slug: "west-virginia", name: "West Virginia", abbreviation: "WV", summary: "West Virginia requires AEDs in schools." },
  { slug: "wisconsin", name: "Wisconsin", abbreviation: "WI", summary: "Wisconsin mandates AEDs in schools and health clubs." },
  { slug: "wyoming", name: "Wyoming", abbreviation: "WY", summary: "Wyoming encourages AED deployment." }
];

// DETAILED STATE DATA (subset, others will fallback)
const stateDetails = {
  alabama: {
    slug: "alabama",
    name: "Alabama",
    lawSummary: "Alabama Code § 34-27A-1 et seq.",
    content: `Alabama requires all public and private schools to have at least one AED on site. Good Samaritan protection applies to anyone using an AED in good faith.`
  },
  california: {
    slug: "california",
    name: "California",
    lawSummary: "California Health & Safety Code § 1797.196",
    content: `California requires AEDs in health studios and dental offices performing anesthesia.`
  },
  texas: {
    slug: "texas",
    name: "Texas",
    lawSummary: "Texas Health & Safety Code Chapter 779",
    content: `Texas requires AEDs in public schools, youth sports, and fitness facilities.`
  },
  "new-york": {
    slug: "new-york",
    name: "New York",
    lawSummary: "New York Public Health Law § 3000-b",
    content: `New York mandates AEDs in schools, health clubs, and golf courses.`
  },
  florida: {
    slug: "florida",
    name: "Florida",
    lawSummary: "Florida Statutes § 768.1325",
    content: `Florida requires AEDs in schools, health clubs, and athletic facilities.`
  },
};

// ✅ Exported functions
export const getStatesList = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(statesData), 200));
};

export const getStateDetails = async (slug) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!slug) return reject(new Error("No state slug provided"));
      const normalized = slug.toLowerCase().replace(/\s+/g, "-");
      const details = stateDetails[normalized];
      if (details) return resolve(details);
      const state = statesData.find((s) => s.slug === normalized);
      if (state) {
        return resolve({
          slug: state.slug,
          name: state.name,
          lawSummary: "AED Law Summary",
          content: `${state.summary}\n\nGeneral AED law provisions apply.`,
        });
      }
      reject(new Error("State not found"));
    }, 200);
  });
};
