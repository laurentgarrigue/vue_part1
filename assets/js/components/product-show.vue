<template>
    <div>
        <h1>productId : {{ productId }}</h1>
    </div>
</template>

<script>
export default {
    name: 'ProductShow',
    props: {
        productId: {
            type: String,
            required: true,
        },
    },
};
</script>
