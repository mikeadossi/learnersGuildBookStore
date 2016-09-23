
var str = document.querySelector('.bookDescr');
var strInner = str.innerHTML
var bookLogo = document.querySelector('#bookLogo');
var homeLink = document.querySelector('.homeLink');

strInner.substring(0, Math.min(10,strInner.length))

//if(strInner.length > 10) str = strInner.substring(0,10);
var strTruncated = strInner.substring(0, Math.min(10,strInner.length));

//str.update('strTruncated');
//strInner.innerHTML = strTruncated

// str.style.color = 'blue';

console.log('strInner.length:', strInner.length)
console.log('strTruncated:',strTruncated)

bookLogo.onmouseover = function(){
  homeLink.style.color = 'orange';
}

bookLogo.onmouseout = function(){
  homeLink.style.color = 'white';
}
