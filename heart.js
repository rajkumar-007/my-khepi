document.addEventListener("click", function(e){

    for(let i=0;i<12;i++){

        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left =
            (e.clientX + Math.random()*100 - 50) + "px";

        heart.style.top =
            (e.clientY + Math.random()*100 - 50) + "px";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },2000);
    }
});
