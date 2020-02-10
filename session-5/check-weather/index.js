const fs = require('fs')
const qs = require('querystring')
const request = require('request')

readIp(__dirname + '/ip.json',function(err,data){
  if(err) return console.log(err)
  console.log('ipData',data)
})

// 读取ip文件
function readIp(path,callback){
  fs.readFile(path,function(err,data){
    if(err){callback(err)}
    try{
      data = JSON.parse(data)
      callback(null,data)
    }
    catch(error){
      callback(error)
    }
  })
}

// 通过公共服务获取城市和天气信息
function ipToGeo(ip,callback){
  let url = 'http://www.telize.com/geoip/' + ip
  let data = {
    url:url,
    json:true
  }
  request(data,function(err,resp,body){
    console.log(resp,body)
    callback(err,body)
  })
}

// 通过openweathermap公共服务来获取当天信息
function geoToWeather(lat,lon,callback){
  var params = {
    lat:lat,
    lon:lon,
    APPID:'ad19d1d4a47dd1f3c5b89337c4e93b93'
  }
  let url = 'http://api.openweathermap.org/data/2.5/weather?' + qs.stringify(params)
  request({
    url:url,
    json:true
  },function(err,resp,body){
    callback(err,body)
  })
}

// 遍历ip地址
function geoToWeathers(geo,callback){
  let weather = []
  let geo 
  let remain = geos.length
  for(let i =0;i<geos.length;i++){
    geo = geos[i]
    (function(geo){
      geoToWeather(geo,latitude,geo.longigude,function(err,weather){
        if(err){callback(err)}
        else{
          weather.geo = geoweather.push(weather)
          remain --
        }
        if(remain ===0 ){
          callback(null,weathers)
        }
      })
    })(geo)
  }
}

// 将结果写入weather.json中
function writeWeather(weathers,callback){
  var output = []
  var weather 
  for(let i = 0;i<weather.length;i++){
    weather = weathers[i]
    output.push({
      ip:weather.geo.ip,
      weather:weather.geo.region
    })
  }
  fs.writeFile('./weather.json',JSON.stringify(output,null,' '),callback)fs.writeFile('./weather.json',JSON.stringify(output,null,' '),callback)s
}