import axios from 'axios';

/**
 * @param {string|null} categoryIri
 * @param {string|null} searchTerm
 * @returns {promise}
 */
export function fetchProducts(categoryIri, searchTerm) {
    const params = {};

    if (categoryIri) {
        params.category = categoryIri;
    }

    if (searchTerm) {
        params.name = searchTerm;
    }

    return axios.get('/api/products', {
        params,
    });
}

/**
 * Get a featured product from the API
 *
 * @returns {Promise}
 */
export function fetchFeaturedProducts() {
    return axios.get('/api/products', {
        params: { featured: 1 },
    });
}

/**
 * Get a product from the API according to the IRI.
 *
 * @param {string} iri
 * @returns {Promise}
 */
export function fetchOneProduct(iri) {
    return axios.get(iri);
}

/**
 * Retrives a set of products identified by an array of IRIs
 *
 * @param {string[]} ids
 * @returns {Promise}
 */
export function fetchProductsById(ids) {
    if (!ids.length) {
        return Promise.resolve({ data: { 'hydra:member': [] } });
    }

    return axios.get(
        '/api/products',
        {
            params: { id: ids },
        },
    );
}
