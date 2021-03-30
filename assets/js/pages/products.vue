<template>
    <h1>Hello {{ firstName }} !</h1>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
export default {
    name: 'Products',
    data() {
        return {
            firstName: 'Ryan',
        };
    },
}
</script>
