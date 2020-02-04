Vue.component('alert-box', {
    template: `
        <div>
            <strong>Error!</strong>
            <slot></slot>
        </div>
    `
})

new Vue({
    el: '#app'
})