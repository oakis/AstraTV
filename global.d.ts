type HTMLString = string;

interface ISingleSearch {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string;
  };
  webChannel: unknown;
  dvdCountry: unknown;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: HTMLString;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
    };
  };
}

interface ISearch {
  score: number;
  show: {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: 30;
    averageRuntime: 30;
    premiered: string;
    ended: string;
    officialSite: string;
    schedule: {
      time: string;
      days: string[];
    };
    rating: {
      average: number;
    };
    weight: number;
    network: {
      id: number;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      };
      officialSite: string;
    };
    webChannel: unknown;
    dvdCountry: unknown;
    externals: {
      tvrage: number;
      thetvdb: number;
      imdb: string;
    };
    image: {
      medium: string;
      original: string;
    };
    summary: HTMLString;
    updated: number;
    _links: {
      self: {
        href: string;
      };
      previousepisode: {
        href: string;
      };
    };
  };
}
