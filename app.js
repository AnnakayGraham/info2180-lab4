window.onload = function(){
    const submit = document.getElementsByTagName("button")[0];
    var request = new XMLHttpRequest();
    var avengers = "http://localhost:8080/superheroes.php";
    request.open("GET", avengers,true);
    request.send();

    function marvel() {
        if (request.readyState ===XMLHttpRequest.DONE){
            if (request.status === 200) {
                var response = request.responseText;
                console.log(response);
                alert(response);
        } else {
        alert('There was a problem with the request');
        }   
    }
}
    submit.addEventListener("click", marvel);
}