<template>
    <div id="home">

    <Header/>

        <section class="banner-homepage">
            <div class="info-banner">
                <h1>L'écume des pages</h1>
                <h2>Des livres et vous</h2>
            </div>
        </section>
        <div class="title-page">La bibliothèque</div>
        <section class="all-books">
            <BookCardVue v-for="(book, index) in books" :key="index">
                <template #title>{{ book.title }}</template>
                <template #description>{{ book.description }}</template>
                <template #author>{{ book.author }}</template>
            </BookCardVue>
        </section>
    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import BookCardVue from '../components/BookCard.vue';
import Header from '../components/Header.vue';


const books = ref([]);

// onMounted(()=> {
    fetch('http://127.0.0.1:3001/books')
        .then((response)=> response.json())
        .then((data) => {
            console.log(data)
            books.value = data;
        })
// })
</script>

<style scoped>

.all-books {
    width: 1200px;
    margin: auto;    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.5rem;
    row-gap: 2.75rem;
}
#home .banner-homepage {
    height: 320px;
    background: linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)
        ), url('../../public/book-homepage.jpeg') black;
    display: flex;  
    justify-content: center;
    align-items: center;
}
#home .banner-homepage h1 {
    color: white;
    font-family: "Cabin Sketch", cursive;
    font-size: 5rem;
    text-align: center;
    margin: 0;
}
#home .title-page {
    color: rgb(245, 0, 87);    
    margin: 2rem 0;
    text-align: center;
    font-weight: 700;
    font-size: 2.75rem;
    text-transform: uppercase;
}
#home .banner-homepage h2{
    color: white;
    font-family: cursive;
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    margin: 0;

}  

</style>
