window.onload = function(){
    const submit = document.getElementsByTagName("button")[0];
    var a =  document.getElementById("alias");
    var n = document.getElementById("names");
    var b = document.getElementById("bio");
    var result = document.getElementById("result");
    var input = document.getElementById("SuperHeroes")
    var request = new XMLHttpRequest();
    var avengers = "http://localhost:8080/superheroes.php"
    request.open("GET", avengers,true);
    request.send();

    function marvel(e) {
        e.preventDefault();
        console.log("You clicked a link!");
        if (request.readyState ===XMLHttpRequest.DONE){
            if (request.status === 200) {
                if (input.value != 0 ){
                    var results = JSON.parse(request.responseText);
                    if (results == "Superhero Not Found"){
                      result.innerHTML = "Superhero Not Found";
        } else{
            var alias = results.alias;
            var name = results.name; 
            var biography = results.biography;

            console.log(this.responseText);
            a.innerHTML=alias;
            n.innerHTML=name;
            b.innerHTML=biography
        }
    }else{
        result.innerHTML = this.responseText;
    }
    }else {
        alert('There was a problem with the request');
        }     
    }
    
}
submit.addEventListener("click", marvel);
}
