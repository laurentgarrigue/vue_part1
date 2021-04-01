<template>
    <div>
        <div :class="componentClass">
            <h5 class="text-center">Categories</h5>
            <div v-show="!collapsed">
                <ul class="nav flex-column mb4">
                    <li class="nav-item">
                        <a class="nav-link" href="/">All Products</a>
                    </li>

                    <li
                        v-for="(category, index) in categories"
                        :key="index"
                        class="nav-item"
                    >
                        <a class="nav-link" :href="category.link">{{
                            category.name
                        }}</a>
                    </li>
                </ul>
                <hr>
            </div>
            <div class="d-flex justify-content-end">
                <button
                    class="btn btn-secondary btn-sm"
                    @click="toggleCollapsed"
                    v-text="collapsed ? '>>' : '<< Collapse'"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            collapsed: false,
            categories: [
                {
                    name: 'Dot Matrix Printers',
                    link: '#',
                },
                {
                    name: 'Iomega Zip Drives',
                    link: '#',
                },
            ],
        };
    },
    computed: {
        componentClass() {
            const classes = [this.$style.component, 'p-3', 'mb-5'];

            if (this.collapsed) {
                classes.push(this.$style.collapsed);
            }

            return classes;
        }


    },
    created() {
        console.log(this.categories);
    },
    methods: {
        toggleCollapsed() {
            this.collapsed = !this.collapsed;
        },
    },
};
</script>

<style lang="scss" module>
@import '~styles/components/light-component.scss';

.component {
    @include light-component;

    &.collapsed {
        width: 70px;
    }

    ul {
        li a:hover {
            background: $blue-component-link-hover;
        }
    }
}
</style>
