// import axios from 'axios';

/**
 * @returns {Array}
 */
export function fetchCategories() {
    return new Promise((resolve, reject) => {
        resolve({
            data: {
                'hydra:member': window.categories,
            },
        });
    });
    // return axios.get('/api/categories');
}
