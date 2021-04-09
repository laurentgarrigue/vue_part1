<template>
    <div :class="[$style.component, 'container-fluid']">
        <div class="row">
            <aside class="col-xs-12 col-lg-3" />
            <div class="col-xs-12 col-lg-9">
                <title-component text="Shopping Cart" />
                <div class="content p-3">
                    <loading v-show="completeCart === null" />
                    <div v-if="completeCart !== null">
                        <div
                            v-for="(cartItem, index) in completeCart.items"
                            :key="index"
                        >
                            {{ cartItem.product.name }}
                            {{ cartItem.color }}
                            ({{ cartItem.quantity }})
                        </div>

                        <div v-if="completeCart.items.length === 0">
                            Your cart is empty! Get to shopping!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TitleComponent from '@/components/title';
import ShoppingCartMixin from '@/mixins/get-shopping-cart';
import { fetchProductsById } from '@/services/products-service';
import Loading from '../components/loading.vue';

export default {
    name: 'ShoppingCart',
    components: {
        TitleComponent,
        Loading,
    },
    mixins: [ShoppingCartMixin],
    data() {
        return {
            products: null,
            colors: null,
        };
    },
    computed: {
        completeCart() {
            if (!this.cart || !this.products) {
                return null;
            }

            const completeItems = this.cart.items.map((cartItem) => (
                {
                    product: this.products.find((product) => product['@id'] === cartItem.product),
                    color: this.colors.find((color) => color['@id'] === cartItem.color),
                    quantity: cartItem.quantity,
                }
            ));

            return {
                items: completeItems,
            };
        },
    },
    watch: {
        async cart() {
            const productIds = this.cart.items.map((item) => item.product);
            const productsResponse = await fetchProductsById(productIds);
            this.products = productsResponse.data['hydra:member'];

            const colorIds = this.cart.items.map((item) => item.color);
            const colorsResponse = await fetchColorsById(colorIds);
            this.colors = colorsResponse.data['hydra:member'];

        },
    },
};
</script>

<style lang="scss" module>
@import '~styles/components/light-component.scss';
.component :global {
    .content {
        @include light-component;
    }
}
</style>
