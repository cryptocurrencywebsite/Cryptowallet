/* =========================================
   CRYPTOVAULT DEMO
   Fictional frontend authentication
========================================= */


/* ================= DEMO LOGIN DETAILS ================= */

const DEMO_EMAIL = "laciosoha@gmail.com";
const DEMO_PASSWORD = "laci2026";


/* ================= EDITABLE CONTACT LINKS ================= */

/*
   CHANGE THESE TWO VALUES when you want
   to use your own demo contact destinations.

   Telegram example:
   https://t.me/YourUsername

   Zangi:
   Use the appropriate Zangi contact/share
   destination for your demo representative.
*/

const TELEGRAM_LINK = "https://services.telegram.com/dl/conversation/Millyojima";

const ZANGI_LINK = "https://services.zangi.com/dl/conversation/5294627658";


/* ================= ELEMENTS ================= */

const loginPage =
    document.getElementById("loginPage");

const dashboardPage =
    document.getElementById("dashboardPage");

const loginForm =
    document.getElementById("loginForm");

const loginError =
    document.getElementById("loginError");

const emailInput =
    document.getElementById("email");

const passwordInput =
    document.getElementById("password");

const showPasswordButton =
    document.getElementById("showPassword");

const logoutButton =
    document.getElementById("logoutButton");

const mobileLogoutButton =
    document.getElementById("mobileLogoutButton");

const demoModal =
    document.getElementById("demoModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalMessage =
    document.getElementById("modalMessage");

const modalClose =
    document.getElementById("modalClose");

const mainModalContent =
    document.getElementById("mainModalContent");

const contactContent =
    document.getElementById("contactContent");

const paymentInfoButton =
    document.getElementById("paymentInfoButton");

const contactButton =
    document.getElementById("contactButton");

const cancelButton =
    document.getElementById("cancelButton");

const backToModalButton =
    document.getElementById("backToModalButton");

const telegramLink =
    document.getElementById("telegramLink");

const zangiLink =
    document.getElementById("zangiLink");


/* =========================================
   SET CONTACT LINKS
========================================= */

telegramLink.href =
    TELEGRAM_LINK;

zangiLink.href =
    ZANGI_LINK;


/* =========================================
   CHECK LOGIN STATUS
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const loggedIn =
            sessionStorage.getItem(
                "cryptoDemoLoggedIn"
            );

        if (loggedIn === "true") {

            showDashboard();

        } else {

            showLogin();

        }

    }
);


/* =========================================
   LOGIN
========================================= */

loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const email =
            emailInput.value.trim();

        const password =
            passwordInput.value;

        loginError.textContent = "";


        if (
            email === DEMO_EMAIL &&
            password === DEMO_PASSWORD
        ) {

            sessionStorage.setItem(
                "cryptoDemoLoggedIn",
                "true"
            );

            loginForm.reset();

            showDashboard();

        } else {

            loginError.textContent =
                "Incorrect email or password.";

            passwordInput.value = "";

        }

    }
);


/* =========================================
   SHOW PASSWORD
========================================= */

showPasswordButton.addEventListener(
    "click",
    function () {

        if (
            passwordInput.type === "password"
        ) {

            passwordInput.type = "text";

            showPasswordButton.textContent =
                "Hide";

        } else {

            passwordInput.type = "password";

            showPasswordButton.textContent =
                "Show";

        }

    }
);


/* =========================================
   SHOW DASHBOARD
========================================= */

function showDashboard() {

    loginPage.classList.add("hidden");

    dashboardPage.classList.remove("hidden");

}


/* =========================================
   SHOW LOGIN
========================================= */

function showLogin() {

    dashboardPage.classList.add("hidden");

    loginPage.classList.remove("hidden");

}


/* =========================================
   LOGOUT FUNCTION
========================================= */

function logoutUser() {

    sessionStorage.removeItem(
        "cryptoDemoLoggedIn"
    );

    closeDemo();

    showLogin();

    emailInput.value = "";

    passwordInput.value = "";

    loginError.textContent = "";

    showPasswordButton.textContent =
        "Show";

    passwordInput.type =
        "password";

    window.scrollTo(0, 0);

}


/* =========================================
   DESKTOP LOGOUT
========================================= */

if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function () {

            logoutUser();

        }
    );

}


/* =========================================
   MOBILE LOGOUT
========================================= */

if (mobileLogoutButton) {

    mobileLogoutButton.addEventListener(
        "click",
        function () {

            logoutUser();

        }
    );

}


/* =========================================
   SHOW DEMO MODAL
========================================= */

function showDemo(action) {

    /*

       The dashboard actions remain fictional.

       No real payment is processed.

    */

    modalTitle.textContent =

        action + " Unavailable Now, Kindly activate your account";

    modalMessage.textContent =

        "Your account is not yet activated, you cannnot withdraw, deposit or send money now."+ 

        " Payment fee required to activate account is €500.00" +

        " only.";

    mainModalContent.classList.remove(

        "hidden"

    );

    contactContent.classList.add(

        "hidden"

    );

    demoModal.classList.add("show");

}

/* ================================

}


/* =========================================
   PAYMENT INFO BUTTON
========================================= */

if (paymentInfoButton) {

    paymentInfoButton.addEventListener(
        "click",
        function () {

            modalTitle.textContent =
                "Payment Information ";

            modalMessage.textContent =
                "This payment is to activate your account." +
                " Only the amount specified should be paid." +
                " Make sure you click any of our contacts link in the Click to pay button to make payment." +
                " Your account will be activated withing 24 hours after making payment.";

        }
    );

}


/* =========================================
   CLICK TO PAY / CONTACT BUTTON
========================================= */

if (contactButton) {

    contactButton.addEventListener(
        "click",
        function () {

            mainModalContent.classList.add(
                "hidden"
            );

            contactContent.classList.remove(
                "hidden"
            );

        }
    );

}


/* =========================================
   BACK BUTTON
========================================= */

if (backToModalButton) {

    backToModalButton.addEventListener(
        "click",
        function () {

            contactContent.classList.add(
                "hidden"
            );

            mainModalContent.classList.remove(
                "hidden"
            );

        }
    );

}


/* =========================================
   CANCEL BUTTON
========================================= */

if (cancelButton) {

    cancelButton.addEventListener(
        "click",
        function () {

            closeDemo();

        }
    );

}


/* =========================================
   CLOSE BUTTON
========================================= */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        function () {

            closeDemo();

        }
    );

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeDemo() {

    demoModal.classList.remove(
        "show"
    );

    /*
       Reset the modal to its
       first screen next time.
    */

    mainModalContent.classList.remove(
        "hidden"
    );

    contactContent.classList.add(
        "hidden"
    );

}


/* =========================================
   CLICK OUTSIDE MODAL
========================================= */

window.addEventListener(
    "click",
    function (event) {

        if (
            event.target === demoModal
        ) {

            closeDemo();

        }

    }
);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeDemo();

        }

    }
);
