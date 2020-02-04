Vue.component('card-tarea',{
    props: ['nombretarea'],
    template:`
        <div>
            {{nombretarea}}
        </div>
    `
})

const app = new Vue({
    el: '#app',
    data: {
        titulo: 'GYM con Vue',
        tareas: [],
        tareasrealizadas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            this.actualizarLocalStorage();
        },
        editarTarea(index) {
            this.tareas[index].estado = true;
            this.tareasrealizadas.push({
                nombre:this.tareas[index].nombre
            })
            this.eliminarTarea(index);
            this.actualizarLocalStorage();
        },
        eliminarTarea(index) {
            this.tareas.splice(index,1);
            this.actualizarLocalStorage();
        },
        actualizarLocalStorage() {
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        },
        leerLocalStorage() {
            let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
            if(datosDB === null){
                this.tareas = [];
            }else{
                this.tareas = datosDB;
            }    
        }

    },
    created() {
        this.leerLocalStorage();
    }
})