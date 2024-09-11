const myButton = document.getElementById("btn-say-hello");

myButton.onClick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone!";
    document.getElementById("stuff").classList.add("special");
};

document.getElementById("say-goodbue").onclick = () => {
    document.getElementById(message).innerHTML ="Goodbye Everyone";
    document.getElementById(stuff).classList.remove("special");
}