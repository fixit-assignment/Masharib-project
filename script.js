// TYPEWRITER EFFECT

const typingText =
    document.getElementById("typing-text");

const text =
    "Explore the structure, design and functionality of modern websites.";

let textIndex = 0;

function typeWriter() {

    if (typingText && textIndex < text.length) {

        typingText.textContent +=
            text.charAt(textIndex);

        textIndex++;

        setTimeout(typeWriter, 35);
    }
}

typeWriter();


// BACK TO TOP

const topButton =
    document.getElementById("top-button");


if (topButton) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });


    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}