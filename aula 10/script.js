const raiz = document.getElementById('lista');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://juliovasquez.pythonanywhere.com/api/funcionarios');

xhr.onload = function(){
    var data = JSON.parse(xhr.response);
    console.log(data);

}

xhr.send();