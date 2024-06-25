export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
  altSpellings: string[];
  area: string;
  capital: string[];
  calitalInfo: {
    latlng: number[];
  };
  car: {
    signs: string[];
    side: string;
  };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: {
    png: string;
    svg: string;
  };
  countinents: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  demonyms: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  fifa: string;
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  gini?: {
    [year: number]: number;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  independent: boolean;
  landlocked: boolean;
  languages: {
    [key: string]: string;
  };
  latlng: number[];
  maps: {
    googleMaps: string;
    openStreetMaps?: string;
  };
  population: number;
  postalCode: {
    format: string;
    regex: string;
  };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: {
    [key: string]: {
      commin: string;
      official: string;
    };
  };
  unMember: boolean;
}
