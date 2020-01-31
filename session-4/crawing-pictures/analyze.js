const cheerio = require('cheerio')
function findImg(dom,callback){
    let $ = cheerio.load(dom)
    $('img').each(function(i,elem){
        let imgSrc = $(elem).attr('src')
        callback(imgSrc,i)
    })
}
module.exports.findImg = findImg