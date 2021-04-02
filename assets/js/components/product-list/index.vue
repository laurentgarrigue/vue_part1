<template>
    <div class="row">
        <product-card
            v-for="product in products"
            :key="product['@id']"
            :product="product"
        />
    </div>
</template>

<script>
import productCard from '@/components/product-list/product-card.vue';

export default {
    name: 'ProductList',
    components: { 
        productCard,
    },
    props: {
        products: {
            type: Array,
            required: true,
        },
    },
};
</script>
