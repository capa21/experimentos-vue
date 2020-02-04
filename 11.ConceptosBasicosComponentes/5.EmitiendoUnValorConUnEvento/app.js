Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div class="blog-sport">
      <h3>{{post.title}}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Agrandar texto
      </button>
      <button v-on:click="$emit('reduce-text', 0.1)">
        Achicar texto
      </button>
      <div v-html="post.content"></div>
    </div>
    `
})

new Vue({
    el: '#app-blog',
    data: {
        posts: [
            {
                id:1, 
                title: 'Mi viaje con Vue',
                content: 'Los nombres de atributos <i>HTML</i> no distinguen entre mayúsculas y minúsculas, por lo que los <b>navegadores interpretarán</b> los caracteres en mayúscula como en minúscula. Eso significa que cuando usa plantillas del DOM, los nombres de propiedades en formato camelCase necesitan usar sus equivalentes en formato kebab (delimitados por guiones):'
            },
            {   
                id:2, 
                title: 'Bloggin con Vue',
                content: 'Los nombres de atributos HTML no distinguen entre mayúsculas y minúsculas, por lo que los navegadores interpretarán los caracteres en mayúscula como en minúscula. Eso significa que cuando usa plantillas del DOM, los nombres de propiedades en formato camelCase necesitan usar sus equivalentes en formato kebab (delimitados por guiones):'
            },
            {
                id:3, 
                title: 'Por qué Vue es tan divertido',
                content: 'Los nombres de atributos HTML no distinguen entre mayúsculas y minúsculas, por lo que los navegadores interpretarán los caracteres en mayúscula como en minúscula. Eso significa que cuando usa plantillas del DOM, los nombres de propiedades en formato camelCase necesitan usar sus equivalentes en formato kebab (delimitados por guiones):'
            },
        ],
        postFontSize: 1
    }
})