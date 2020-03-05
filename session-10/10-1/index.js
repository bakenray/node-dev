function add(){
    if(arguments.length > 0){
        return [].slice.call(arguments).reduce(function(a,b){
            return a + b ;
        })
    }else{
        return 0
    }
}
function objType(ele){
    if(typeof ele === 'object'){
        return {}
    }else {
        return false
    }
}

function async(callback){
    setTimeout(function(){
        console.log('async')
        callback()
    },100)
}

module.exports ={
    add:add,
    objType:objType,
    async:async
}

