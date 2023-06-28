import { publicRequest } from '../utils/request';

export const searchService = async (search, limit = 4) => {
    try {
        const res = await publicRequest.get(`options/search`, {
            params: {
                search,
                limit,
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
};
