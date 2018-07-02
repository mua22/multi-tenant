<template>
    <div id="login">
       Email: <input type="text" v-model="email"> <br>
       Password: <input type="text" v-model="password"> <br>
        <input type="submit" value="Login" v-on:click="Login">
        {{status}}
    </div>
</template>

<script>

    export default {
        name: "Login",
        data: function (){
            return {
                email : 'usman.akram@gmail.com',
                password: 123456,

            }
        },
        computed: {
            status(){
                return this.$store.state.status;
                // return "Hello";
            }
        },
        methods: {
            Login: function(event){
                $.post('localhost:4000/api/login',{email});
                alert('login Click');
            }
        }

    }
</script>

<style scoped>

</style>