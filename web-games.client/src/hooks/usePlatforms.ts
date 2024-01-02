import Platform from '../interfaces/Platform';
import useData from './useData';

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;
