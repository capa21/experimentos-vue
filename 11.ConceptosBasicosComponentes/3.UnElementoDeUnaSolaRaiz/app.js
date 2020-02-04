Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div class="blog-sport">
      <h3>{{post.title}}</h3>
      <div v-html="post.content"></div>
    </div>
    `
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