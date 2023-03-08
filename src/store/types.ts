export interface Movie {
  Title: string;
  Year: string;
  Released?: string;
  Runtime: string;
  Genre: string;
  Director?: string;
  Actors?: string;
  Plot?: string;
  Poster?: string;
  Language?: string;
  Country?: string;
  imdbRating?: string;
  Awards: string;
}

export interface MovieState {
  loading: boolean;
  selectedMovie: Movie | null;
}

export interface ButtonType {
  type?: "button" | "submit" | "reset" | undefined;
}
