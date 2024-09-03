import useData from "./useData";

export interface Platform{
    id: string;
    name: string;
    slug: string;
}

const usePlatform = () => useData<Platform>('/platforms/lists/parents');

export default usePlatform;