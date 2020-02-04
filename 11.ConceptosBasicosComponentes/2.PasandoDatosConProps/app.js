Vue.component('blog-post', {
    props: ['title'],
    template: `<h3>{{title}}</h3>`
})

new Vue({
    el: '#app-blog',
    data: {
        posts: [
            {id:1, title: 'Mi viaje con Vue'},
            {id:2, title: 'Bloggin con Vue'},
            {id:3, title: 'Por qué Vue es tan divertido'},
        ]
    }
})