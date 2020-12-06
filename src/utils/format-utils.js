
export const getImageSize=(url,size)=>{
    return `${url}?param=${size}x${size}`
}

export const getCount = (num)=>{
   if(num<10000){
       return num
   }else if(num / 10000 < 10000){
       return Math.floor(num/10000) +'万'
   }
}

