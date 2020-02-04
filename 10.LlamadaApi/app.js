Vue.component('pock-card', {
    props: ['name', 'url'],
    template: `
        <li>
            <h2>{{ name }}</h2>
            <h2>{{ url }}</h2>
        </li>
    `,
})

new Vue({
    el:'#app',
    data(){
        return {
            info:null
        }
    },
    mounted () {
        // axios
        fetch('https://pokeapi.co/api/v2/pokemon?offset=500&limit=500')
        // .get('https://pokeapi.co/api/v2/pokemon?offset=500&limit=500')
        .then(response => {
        //   this.info = response.data.results;
            return response.json()
        })
        .then(info => {
            this.info = info.results;
        })
        .catch(error => console.log(error))
    }
})