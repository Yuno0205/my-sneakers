import { publicRequest } from '../utils/request';

export const searchService = async (search) => {
    try {
        const res = await publicRequest.get(`options/filter`, {
            params: {
                search,
            },
        });

        return res.data.options;
    } catch (error) {
        console.log(error);
    }
};
