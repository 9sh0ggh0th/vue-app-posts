<script>
import NavBar from './Components/NavBar.vue';

    export default {
        components:{
            NavBar
        }

    }
</script>

<template>
    <NavBar></NavBar>
    <div class="app">
        <RouterView></RouterView>
    </div>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app{
    padding: 20px;
}
</style>