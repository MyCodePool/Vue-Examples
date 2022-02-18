
Vue.createApp({
    data() {
        return{
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue)
            this.enteredValue =""
        },
        resetGoals(){
            this.goals.splice(0);
        },
        deleteGoal(index) {
            this.goals.splice(index, 1)
        }

    }
    
}).mount("#app");