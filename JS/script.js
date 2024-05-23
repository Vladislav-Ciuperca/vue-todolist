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

        rimuoviVocie() {
            for (let i = 0; i < this.toDoList.length; i++) {
                // const element = this.toDoList[i];

                this.toDoList.splice(i, 1)
            }
        }
    }
}).mount('#app')