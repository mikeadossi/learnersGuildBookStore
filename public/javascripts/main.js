
var str = document.querySelector('.descr');
var strInner = str.innerHTML

strInner.substring(0, Math.min(10,strInner.length))

//if(strInner.length > 10) str = strInner.substring(0,10);
var strTruncated = strInner.substring(0, Math.min(10,strInner.length));

//str.update('strTruncated');
//strInner.innerHTML = strTruncated

// str.style.color = 'blue';

console.log('strInner.length:', strInner.length)
console.log('strTruncated:',strTruncated)
