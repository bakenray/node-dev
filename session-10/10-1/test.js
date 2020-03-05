// var lib = require('./index')
// var assert = require('assert')

// describe('Math',function(){
//     describe('#add',function(){
//         it('should reutrn 10',function(){
//             assert.equal('10',lib.add(5,5))
//         })
//         it('should return 0',function(){
//             assert.equal('0',lib.add())
//         })
//     })
// })

var lib = require('./index')
var should = require('should')

describe('Math',function(){
    describe('#add',function(){
        it('should reutrn 15',function(){
            lib.add(5,5,5).should.be.equal(15)
        })
        it('should return 0',function(){
            lib.add().should.be.equal(0)
        })
    })
})

describe('Type',function(){
    describe('#objType',function(){

        it('should reutrn an object',function(){
            should(lib.objType({name:'bakenray'})).be.a.Object()
        })
        it('should reutrn an object',function(){
            should(lib.objType(new Date())).be.a.Object()
        })
        it('should reutrn an object',function(){
            should(lib.objType(/^a/)).be.a.Object()
        })
    })
})

describe('Async',function(){
    describe('#setTimeout()',function(){
        it('should wait 100ms',function(done){
            lib.async(done)
        })
    })
})