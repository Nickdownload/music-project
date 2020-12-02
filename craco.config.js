const path = require('path')

const resolve = dir =>path.join(__dirname,dir)

module.exports={
   webpack:{
       alias:{
         "@": resolve('src') 
       }
   }
}