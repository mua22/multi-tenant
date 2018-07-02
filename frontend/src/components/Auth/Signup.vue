<template>
    <div>
        <h1>{{msg}}Sign up

        </h1>
        <input type="text" v-model="msg">
    </div>

</template>

<script>
    export default {
        name: "Signup",
        props: {
            msg: String
        }
    }
</script>

<style scoped>

</style>