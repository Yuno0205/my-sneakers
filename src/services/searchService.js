import { publicRequest } from '../utils/request';

export const searchService = async (search) => {
    try {
        const res = await publicRequest.get(`options/search`, {
            params: {
                search,
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};
