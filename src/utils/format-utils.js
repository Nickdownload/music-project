
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
export function getPlayUrl(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
  }
  export function formatDate(time, fmt) {
    let date = new Date(time);
  
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;
  };
  
  function padLeftZero(str) {
    return ('00' + str).substr(str.length);
  };
  
  export function formatMonthDay(time) {
    return formatDate(time, "MM月dd日");
  }
  
  export function formatMinuteSecond(time) {
    return formatDate(time, "mm:ss");
  }