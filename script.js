/*====================================
        SCROLL REVEAL
====================================*/

const revealElements = document.querySelectorAll(
    `
.about-card,
.skill-group,
.project-card,
.timeline-item,
.contact-form,
.section-title,
.section-sub
`
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});


/*====================================
        ACTIVE NAVBAR
====================================*/

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href")
                === `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    }
);


/*====================================
        TERMINAL TYPING
====================================*/

const terminalBody =
    document.querySelector(".terminal-body");

if (terminalBody) {

    const lines = [

        "> npm run start",

        "✔ Redis Connected",

        "✔ Kafka Connected",

        "✔ MongoDB Connected",

        "✔ BullMQ Started",

        "✔ API Running :3000"

    ];

    let index = 0;

    terminalBody.innerHTML = "";

    function typeLine() {

        if (index >= lines.length) return;

        const p =
            document.createElement("p");

        p.textContent = lines[index];

        if (lines[index].includes("✔")) {

            p.classList.add("green");

        }

        terminalBody.appendChild(p);

        index++;

        setTimeout(typeLine, 600);

    }

    typeLine();

}


/*====================================
        STATS COUNTER
====================================*/

const counters =
    document.querySelectorAll(".stats h2");

const counterObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const counter =
                        entry.target;

                    const target =
                        parseInt(
                            counter.innerText
                                .replace("+", "")
                                .replace("%", "")
                        );

                    let count = 0;

                    const speed =
                        target / 80;

                    const update = () => {

                        count += speed;

                        if (count < target) {

                            counter.innerText =
                                Math.floor(count) +
                                (counter.innerText.includes("%")
                                    ? "%"
                                    : "+");

                            requestAnimationFrame(update);

                        } else {

                            counter.innerText =
                                counter.innerText.includes("%")
                                    ? target + "%"
                                    : target + "+";

                        }

                    };

                    update();

                }

            });

        },
        {
            threshold: 0.5
        }

    );

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*====================================
        SMOOTH SCROLL
====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 70,

                behavior: "smooth"

            });

        }

    });

});


/*====================================
        NAVBAR BACKGROUND
====================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background = "rgba(8,11,18,.88)";

        navbar.style.backdropFilter = "blur(20px)";

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.background = "rgba(8,11,18,.55)";

        navbar.style.boxShadow = "none";

    }

});


/*====================================
        PROJECT CARD TILT
====================================*/

const cards = document.querySelectorAll(

    ".project-card,.skill-group,.about-card"

);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = ((y - rect.height / 2) / 18);

        const rotateY = ((rect.width / 2 - x) / 18);

        card.style.transform =

            `perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =

            "perspective(900px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/*====================================
        BUTTON MAGNET EFFECT
====================================*/

const buttons = document.querySelectorAll(

    ".primary-btn,.secondary-btn,.resume-btn"

);

buttons.forEach(btn => {

    btn.addEventListener("mousemove", (e) => {

        const rect = btn.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) / 6;

        const moveY = (y - rect.height / 2) / 6;

        btn.style.transform =

            `translate(${moveX}px,${moveY}px)`;

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translate(0,0)";

    });

});


/*====================================
        SHINE EFFECT
====================================*/

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =

            `radial-gradient(
circle at ${x}px ${y}px,
rgba(255,255,255,.10),
rgba(255,255,255,.03) 45%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.04)";

    });

});


/*====================================
        FLOATING BLOBS
====================================*/

const blobs = document.querySelectorAll(".blob");

window.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;

    const y = e.clientY / window.innerHeight;

    blobs.forEach((blob, index) => {

        const speed = (index + 1) * 25;

        blob.style.transform =

            `translate(${x * speed}px,${y * speed}px)`;

    });

});


/*====================================
        HERO PARALLAX
====================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const offset = window.scrollY;

    if (hero) {

        hero.style.transform =

            `translateY(${offset * 0.15}px)`;

    }

});


/*====================================
        RANDOM GLOW
====================================*/

setInterval(() => {

    cards.forEach(card => {

        card.style.borderColor =

            `rgba(${Math.floor(Math.random() * 120) + 120},
${Math.floor(Math.random() * 60) + 80},
255,.18)`;

    });

}, 3500);


/*====================================
        PAGE LOADER
====================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    requestAnimationFrame(() => {

        document.body.style.transition = "opacity .9s";

        document.body.style.opacity = "1";

    });

});


/*====================================
        CONSOLE MESSAGE 😎
====================================*/

console.log(

    "%cDesigned & Developed by Arjun Singh Negi",

    "color:#60a5fa;font-size:18px;font-weight:bold"

);