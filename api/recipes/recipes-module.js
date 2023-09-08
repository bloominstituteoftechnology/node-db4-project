// function getRecipeById(recipe_id){
//     return Promise.resolve('awesome')
// }
//以上 Promise.resolve（）是用于检测function是否启用
function getRecipeById(recipe_id){
    return Promise.resolve(`awesome id: ${recipe_id}`)

}

module.exports={
    getRecipeById
}