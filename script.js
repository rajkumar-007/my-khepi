const text = `To My Khepi 👻,
You make my day brighter with your smile, kindness, and love.
Having you in my life is a blessing, and I cherish every moment we share.
You will always hold a special place in my heart. ❤️
I hope you'll always remain a part of my life. 💖`;
const typingElement = document.getElementById("typing");
if (typingElement) {
  let i = 0;
    function typeWriter() {
        if (i < text.length) {
            if (text.charAt(i) === "\n") {
                typingElement.innerHTML += "<br>";
            } else {
                typingElement.innerHTML += text.charAt(i);
            }
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
}

