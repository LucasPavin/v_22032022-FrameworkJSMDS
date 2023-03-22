<template>
    <article class="book-card">
        <header>
            <h3><slot name="title"></slot></h3>
            <p><slot name="author">author</slot></p>
        </header>
        <p><slot name="description">description</slot></p>
        <footer>
            <section class="rating">
                <p>notes</p>
                <p>42 avis</p>
            </section>
            <div class="link-book">
                <a href="#" class="link">Découvrir ce livre</a>
            </div>
        </footer>
    </article>
</template>

<script setup>
// import { defineProps } from 'vue';

// const props = defineProps({
    
// })

</script>

<style scoped>

.book-card {
    height: 100%;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
.book-card header {
    padding: .5rem 1rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #595cff;
}

.book-card header:nth-of-type(2) {
    padding: 1rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: blue;
}
.book-card header h3 {
    font-size: 2rem;
    font-weight: 600;
    color: white;
    margin-top: 0;
} 
.book-card header p {    
    font-size: 1rem;
    color: white;
}   
.book-card p {
    padding: 1rem;
    margin: 0;
    font: inherit;
}
.book-card footer .rating {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.book-card footer .link-book{
    background-color: #595cff;
    height: 41px;
    margin: 1rem;
    display: flex;
    align-items: center;
}
.book-card footer .link-book a {
    color: white;
    text-decoration: none;
    padding: 0.8rem;
}
</style>