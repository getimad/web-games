import Genre from '../interfaces/Genre';
import useData from './useData';

const useGenres = () => useData<Genre>('/genres');

export default useGenres;
