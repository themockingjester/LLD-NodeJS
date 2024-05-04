const crypto = require("crypto")

class Payment{
    constructor(){
        this.id = crypto.randomUUID()
        this.statrtedAt = new Date().toLocaleString()
        return this
    }
    setStatus(status){
        this.status = status
        return this
    }
    setMode(mode){
        this.mode = mode
        return this
    }
    setUser(userId){
        this.userId = userId
        return this
    }
}