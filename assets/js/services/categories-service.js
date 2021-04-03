import axios from 'axios';

/**
 * @returns {promise}
 */
export function fetchCategories() {
    return axios.get('/api/categories');
}
