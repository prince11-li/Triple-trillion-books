document.addEventListener("DOMContentLoaded", function() {
    const chatButton = document.createElement("button");
    chatButton.innerText = "Chat with AI";
    chatButton.style.position = "fixed";
    chatButton.style.bottom = "20px";
    chatButton.style.right = "20px";
    chatButton.style.padding = "10px";
    chatButton.style.background = "blue";
    chatButton.style.color = "white";
    document.body.appendChild(chatButton);

    chatButton.addEventListener("click", function() {
        alert("This is a simple AI chatbot placeholder!");
    });
});
