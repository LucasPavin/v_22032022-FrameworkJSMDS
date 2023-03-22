<template>
    <div id="header">
        <div class="logo">
            <p>L'écume des pages</p>
        </div>
    
        <div class="burger" @click="state = !state" :class="{'burger-open' :  state}">
            <div class="trait"></div>
            <div class="trait"></div>
            <div class="trait"></div>
        </div>

        <div class="menu-burger" :class="{'open' : state}">

        </div>
    </div>


</template>

<script setup>
    import { ref } from 'vue';

    const state = ref(false);

</script>

<style scoped>
    #header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #2d2e80;
        padding: 3px 30px;
    }  
    #header .logo {
        font-size: 1rem;
        font-family: "Cabin Sketch", cursive;
        color: #FFF;
    }
    #header .burger .trait{
        height: 3px;
        width: 23px;
        background: #FFF;
        margin-bottom: 3px;
    }
    #header .menu-burger{
        height: 100vh;
        background: #2d2e80;
        position: fixed;
        top: 0;
        left: 100%;
        width: 100vw;
        transition: .3s ease-in-out;
    } 
    #header .open {
        left: 0;
    }
    .burger-open {

        z-index: 2;
    }

    @media screen and (min-width: 992px) {
        #header .burger,
        #header .menu-burger {
            display: none;
        }
        #header .logo p {
            font-size: 2rem;
            margin: 10px 0;
        }

    }
</style>