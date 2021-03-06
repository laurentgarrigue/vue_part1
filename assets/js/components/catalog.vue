<template>
    <div>
        <div class="row">
            <div class="col-3">
                <title-component
                    :text="categoryName"
                />
            </div>
            <div class="col-9">
                <search-bar
                    @search-products="onSearchProducts"
                />
            </div>
        </div>

        <product-list
            :products="products"
            :loading="loading"
        />

        <div class="row">
            <legend-component :title="legend" />
        </div>
    </div>
</template>

<script>
import LegendComponent from '@/components/legend';
import ProductList from '@/components/product-list';
import TitleComponent from '@/components/title';
import { fetchProducts } from '@/services/products-service';
import SearchBar from './search-bar.vue';

export default {
    name: 'Catalog',
    components: {
        LegendComponent,
        ProductList,
        TitleComponent,
        SearchBar,
    },
    props: {
        currentCategoryId: {
            type: String,
            default: null,
        },
        categories: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            products: [],
            loading: false,
            searchTerm: null,
            legend:
                "Shipping takes 10-12 weeks, and products probably won't work",
        };
    },
    computed: {
        categoryName() {
            if (this.currentCategoryId === null) {
                return 'All products';
            }

            const category = this.categories.find((cat) => (cat['@id'] === this.currentCategoryId));
            return category ? category.name : '';
        },

    },
    watch: {
        currentCategoryId() {
            this.searchTerm = null;
            this.loadProducts();
        },
    },
    created() {
        this.loadProducts();
    },
    methods: {
        onSearchProducts({ term }) { // event.term
            this.searchTerm = term;
            this.loadProducts();
        },
        async loadProducts() {
            this.loading = true;

            let response;
            try {
                response = await fetchProducts(this.currentCategoryId, this.searchTerm);

                this.loading = false;
            } catch (e) {
                this.loading = false;

                return;
            }
            this.products = response.data['hydra:member'];
        },
    },
};
</script>
