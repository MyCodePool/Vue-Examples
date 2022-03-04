function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    }, 
    computed: {
        monsterBarStyles() {
            if(this.monsterHealth < 0) return {width: '0%'} 
			else return {width: this.monsterHealth+'%'}
        },
        playerBarStyles(){
            if(this.playerHealth < 0) return {width: '0%'} 
			else return {width: this.playerHealth+'%'}
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0
        }
	},
    watch: {
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){  // both die at the same time
                // a draw
                this.winner = 'draw'
            }else if(value <= 0){ // player die
                // player lost
                this.winner = 'monster'
            }else if(value > 100){
                // limitation health at 100 if healed too much
                this.playerHealth = 100
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){  // both die at the same time
                // a draw
                this.winner = 'draw'
            }else if(value <= 0){ // monster die
                // monster lost
                this.winner = 'player'
            }
            
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.currentRound = 0,
            this.winner = null,
            this.logMessages = []
        },
        attackMonster() {
            this.currentRound++
            const attackValue = getRandomValue(5,12) // Attack between 5 to 12
            this.monsterHealth -= attackValue
            this.addLogMessage('Player', 'attack', attackValue)
            this.attackPlayer()
        },
        attackPlayer() {
            const attackValue = getRandomValue(8,15) // Attack between 8 to 15
            this.playerHealth -= attackValue
            this.addLogMessage('Monster', 'attack', attackValue)
        },
        specialAttackMonster() {
            this.currentRound++
            const attackValue = getRandomValue(10,25) // Attack between 10 to 25
            this.monsterHealth -= attackValue
            this.addLogMessage('Player', 'attack', attackValue)
            this.attackPlayer()
        },
        healPlayer(){
            this.currentRound++
            const healValue = getRandomValue(8,20) // Attack between 8 to 20
            this.playerHealth += healValue
            this.addLogMessage('Player', 'Heal', healValue)
            this.attackPlayer()
        },
        surrender(){
            this.playerHealth = 0
            this.winner = 'monster'
        },
        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionRound: this.currentRound,
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    }
})


app.mount('#game')


