<template>
    <div id="login">
       Email: <input type="text" v-model="email"> <br>
       Password: <input type="text" v-model="password"> <br>
        <input type="submit" value="Login" v-on:click="Login">
        {{status}} <br>
        {{token}}
    </div>
</template>

<script>

    export default {
        name: "Login",
        data: function (){
            return {
                email : 'usman.akram@gmail.com',
                password: 123456,
                token:''
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
                self=this;
                $.ajax({
                    url: "http://localhost:4000/api/login",
                    type: "POST",
                    crossDomain: true,
                    data: {email:self.email,password:self.password},
                    dataType: "json",
                    success: function (response) {
                        self.$store.commit('login');
                        alert(response);
                    },
                    error: function (xhr, status) {
                        //self.$state.commit('logout');
                        alert(status);
                    }
                });

                //alert('login Click');
            }
        }

    }
</script>

<style scoped>

</style>