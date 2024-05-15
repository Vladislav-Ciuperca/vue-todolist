const { createApp } = Vue

createApp({
    data() {
        return {

            toDoList: [
                "svegliarsi",
                "lavarsi i denti",
                "fare il letto",
                "odiare la chiesa",
                "accedere a boolean",
                "programmare",
            ],

            isHidden: false
        }
    },
    methods: {
        aggiungiVocie() {
            let item = document.getElementById("campo").value
            this.toDoList.push(item)
            item = ''
        },

        rimuoviVocie(item) {
            this.toDoList.splice(item, 1)
        }
    }
}).mount('#app')