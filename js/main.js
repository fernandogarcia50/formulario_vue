const app = Vue.createApp({
    data: () => ({
        titulo: "Formulario con vue 3",
        datos: {
            name: "",
            edad: 15,
            lenguaje:[],
            genero: "hombre",
        },
    }),
    methods: {
        handleSubmit(){
            console.log(this.datos)
        }
    }
})