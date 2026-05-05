// 1. SMOOTH SCROLL
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        let id = this.getAttribute("href");
        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// 2. TYPING EFFECT (FIXED)
let text = ["Web Developer", "CSE Student", "Learning JavaScript"];
let i = 0;
let j = 0;
let typing = document.getElementById("typing");

function type() {
    if (i < text.length) {
        typing.textContent = text[i].substring(0, j++);
        
        if (j > text[i].length) {
            j = 0;
            i++;
            setTimeout(type, 1000); // pause between words
            return;
        }
    } else {
        i = 0;
    }
    setTimeout(type, 100);
}
type();


// 3. RESUME BUTTON
document.getElementById("btn").addEventListener("click", function() {
    window.open("./resume.pdf", "_blank");
});


// 4. DYNAMIC YEAR
document.getElementById("year").textContent =
    "© " + new Date().getFullYear() + " Himani Saini";


// 5. SCROLL ANIMATION (FIXED)
window.addEventListener("scroll", function() {
    let sections = document.querySelectorAll("section");

    sections.forEach(sec => {
        let rect = sec.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});


// 6. SHOW FIRST SECTION ON LOAD
window.addEventListener("load", () => {
    document.querySelectorAll("section").forEach(sec => {
        let rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            sec.classList.add("show");
        }
    });
});