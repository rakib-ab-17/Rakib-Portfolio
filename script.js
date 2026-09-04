/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {

    travel: {

        number: "01",

        title: "Travel Management System",

        image: "images/travelease.png",

        description:
            "A database-driven travel management portal designed to provide a simple interface for discovering, searching and exploring holiday packages.",

        features: [
            "Travel destination and package browsing",
            "Destination and package search interface",
            "Package sorting functionality",
            "Holiday package information",
            "Login and Sign Up interface",
            "Responsive travel-focused frontend"
        ],

        technologies: [
            "PHP",
            "MySQL",
            "HTML",
            "CSS",
            "Bootstrap"
        ]

    },


    attendance: {

        number: "02",

        title: "Student Attendance System",

        image: "images/attendance.png",

        description:
            "A full-stack academic web application created to digitize student attendance management and provide administrative controls for managing academic records.",

        features: [
            "Teacher management",
            "Student management",
            "Add User functionality",
            "Batch management",
            "Subject management",
            "Student enrollment",
            "Administrative dashboard",
            "Delete management actions"
        ],

        technologies: [
            "PHP",
            "MySQL",
            "HTML",
            "CSS",
            "Bootstrap"
        ]

    },


    fire: {

        number: "03",

        title: "Fire Alarm Alert System",

        image: "images/fire-alarm.png",

        description:
            "An IoT-based fire and smoke detection concept using a Raspberry Pi and connected electronic components for sensing and alert indication.",

        features: [
            "Raspberry Pi based system",
            "Sensor integration",
            "Buzzer alert mechanism",
            "LED status indication",
            "Push button interaction",
            "GPIO-based component connections",
            "IoT simulation environment"
        ],

        technologies: [
            "Raspberry Pi",
            "MicroPython",
            "IoT",
            "Sensors",
            "GPIO"
        ]

    }

};


/* =========================================================
   OPEN PROJECT
========================================================= */

function openProject(projectId) {

    const project = projects[projectId];

    if (!project) {
        return;
    }


    /* PROJECT NUMBER */

    const modalNumber =
        document.getElementById("modalNumber");

    if (modalNumber) {
        modalNumber.textContent = project.number;
    }


    /* PROJECT TITLE */

    const modalTitle =
        document.getElementById("modalTitle");

    if (modalTitle) {
        modalTitle.textContent = project.title;
    }


    /* PROJECT IMAGE */

    const modalImage =
        document.getElementById("modalImage");

    if (modalImage) {

        modalImage.src = project.image;

        modalImage.alt =
            project.title + " preview";

    }


    /* PROJECT DESCRIPTION */

    const modalDescription =
        document.getElementById("modalDescription");

    if (modalDescription) {

        modalDescription.textContent =
            project.description;

    }


    /* =====================================================
       FEATURES
    ===================================================== */

    const featuresContainer =
        document.getElementById("modalFeatures");

    if (featuresContainer) {

        featuresContainer.innerHTML = "";

        project.features.forEach(feature => {

            const li =
                document.createElement("li");

            li.textContent = feature;

            featuresContainer.appendChild(li);

        });

    }


    /* =====================================================
       TECHNOLOGIES
    ===================================================== */

    const techContainer =
        document.getElementById("modalTech");

    if (techContainer) {

        techContainer.innerHTML = "";

        project.technologies.forEach(technology => {

            const span =
                document.createElement("span");

            span.textContent = technology;

            techContainer.appendChild(span);

        });

    }


    /* =====================================================
       SHOW MODAL
    ===================================================== */

    const modal =
        document.getElementById("projectModal");

    if (modal) {

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    }

}


/* =========================================================
   CLOSE PROJECT
========================================================= */

function closeProject() {

    const modal =
        document.getElementById("projectModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


/* =========================================================
   CLOSE WHEN CLICKING OUTSIDE MODAL
========================================================= */

const projectModal =
    document.getElementById("projectModal");

if (projectModal) {

    projectModal.addEventListener(
        "click",
        function (event) {

            if (event.target === this) {

                closeProject();

            }

        }
    );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeProject();

        }

    }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;


            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }
);