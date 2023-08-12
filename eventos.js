let btn = document.getElementById('miboton');

btn.addEventListener('click', function() {
    event.stopPropagation();
    alert('Hola!');
    });



let div = document.getElementById('miDiv');

div.addEventListener('click', function() {
  alert('Hola! Soy el div');
});