<template>
    <h1>{{titulo}}</h1>
</template>

<script>
export default {
    name: 'teste',
    props:['titulo'],
    data() {
        return {

        }
    }
}
</script>

<style>
    h1 {
        color: red;
    }
</style>
