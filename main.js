var app = new Vue({
    el: '#app',
    data: {randomEmail:[]},

    mounted(){
        for(let x=0; x<10; x++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then (email =>{
                if(!this.randomEmail.includes(email)){
                    this.randomEmail.push(email.data.response);
                }
            })
        }
    }
})