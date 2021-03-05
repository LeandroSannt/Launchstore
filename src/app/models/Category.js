const db =require("../lib/configs/db")

module.exports={
    all(){
        return db.query(`
        SELECT *FROM categories
        `)
    }
}