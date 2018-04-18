
var xhr = new XMLHttpRequest();
xhr.open('GET', __URL_SPORT);   

xhr.onreadystatechange = function() {
if (this.readyState != 4) return; //пока ждём

// по окончании запроса доступны:
// status, statusText
// responseText, responseXML (при content-type: text/xml)    
if (this.status != 200) {
// обработать ошибку
console.log(new Error('ошибка: ' + (this.status ? this.statusText : 'запрос не удался')));
return;
}
console.log(this.responseText);
}
xhr.send();
