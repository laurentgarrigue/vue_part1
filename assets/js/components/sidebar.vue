<template>
    <div>
        <div :class="componentClass">
            <div v-show="!collapsed">
                <h5 class="text-center">Categories</h5>
                <ul class="nav flex-column mb4">
                    <li class="nav-item">
                        <a
                            :class="{
                                'nav-link': true,
                                'selected': currentCategoryId === null,
                            }"
                            href="/"
                        >All Products</a>
                    </li>

                    <li
                        v-for="category in categories"
                        :key="category['@id']"
                        class="nav-item"
                    >
                        <a
                            :class="{
                                'nav-link': true,
                                'selected': currentCategoryId === category['@id'],
                            }"
                            :href="`/category/${category.id}`"
                        >
                            {{ category.name }}
                        </a>
                    </li>
                </ul>
                <hr>
            </div>
            <div class="d-flex justify-content-end">
                <button
                    class="btn btn-secondary btn-sm"
                    @click="$emit('toggle-collapsed')"
                    v-text="collapsed ? '>>' : '<< Collapse'"
                />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Sidebar',
    props: {
        collapsed: {
            type: Boolean,
            required: true,
        },
        currentCategoryId: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            categories: [],
        };
    },
    computed: {
        componentClass() {
            const classes = [this.$style.component, 'p-3', 'mb-5'];

            if (this.collapsed) {
                classes.push(this.$style.collapsed);
            }

            return classes;
        },
    },
    async mounted() {
        const response = await axios.get('/api/categories');

        this.categories = response.data['hydra:member'];
    },
    methods: {
    },
};
</script>

<style lang="scss" module>
@import '~styles/components/light-component.scss';

.component :global {
    @include light-component;

    ul {
        li a:hover {
            background: $blue-component-link-hover;
        }

        li a.selected {
            background: $light-component-border;
        }
    }
}
</style>
