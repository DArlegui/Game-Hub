// import useData from './useData';
import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//Old (Getting from Server)
// const useGenres = () => useData<Genre>('/genres');
//New (Static)
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
