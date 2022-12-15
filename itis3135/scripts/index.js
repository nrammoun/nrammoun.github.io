var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;

let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log("Hey " + username + "!");
}


let userfeeling;
document.getElementById("myfeeling").onclick = function(){
    username = document.getElementById("feeling").value;
    console.log("Ohh! We are feeling " + username + "too!");
}