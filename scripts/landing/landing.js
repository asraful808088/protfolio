const queryAll = document.querySelectorAll(".link-dot-indicator");
const avtiveNavqueryAll = document.querySelectorAll(".active-link-bar");
const sections = document.querySelectorAll("section");
const modile_nav_a = document.querySelectorAll(".mobile-nav-item-a");
const modile_nav_box = document.querySelector("#mobile-nav-box");
const modile_nav_box_menu_deactive = document.querySelector("#menu-deactive");
const modile_nav_box_menu_active = document.querySelector("#menu-active");
const mainblur_box = document.querySelector("#blur-box");
const video_link_1 = document.querySelector("#video_1");
const video_link_2 = document.querySelector("#video_2");
const video_link_3 = document.querySelector("#video_3");
let storeHash = "";
let prevstoreHash = "";
let active_mobile_navbar = false;

let videoFrameShow = false;
function changeVideoFrameShowStatus(index = 1) {
  if (videoFrameShow) {
    videoFrameShow = false;
    mainblur_box.classList.remove("display-flex");
    video_link_1.classList.remove("display-flex");
    video_link_2.classList.remove("display-flex");
    video_link_3.classList.remove("display-flex");
  } else {
    videoFrameShow = true;
    mainblur_box.classList.add("display-flex");
    if (index == 1) {
      video_link_1.classList.add("display-flex");
      video_link_2.classList.remove("display-flex");
      video_link_3.classList.remove("display-flex");
    } else if (index == 2) {
      video_link_1.classList.remove("display-flex");

      video_link_2.classList.add("display-flex");
      video_link_3.classList.remove("display-flex");
    } else {
      video_link_1.classList.remove("display-flex");

      video_link_2.classList.remove("display-flex");
      video_link_3.classList.add("display-flex");
    }
  }
}

function changeMobileNavbarStatus() {
  active_mobile_navbar = !active_mobile_navbar;
  if (active_mobile_navbar) {
    modile_nav_box.classList.remove("mobile-nav-deactive_i");
    modile_nav_box_menu_deactive.classList.add("display-none-2");
    modile_nav_box_menu_active.classList.remove("display-none-2");
  } else {
    modile_nav_box.classList.add("mobile-nav-deactive_i");
    modile_nav_box_menu_deactive.classList.remove("display-none-2");
    modile_nav_box_menu_active.classList.add("display-none-2");
  }
}
const hash = window.location.hash;
storeHash = hash;
if (!storeHash) {
  storeHash = "#home";
  prevstoreHash = "#home";
}

function removeNavActiveClass() {
  avtiveNavqueryAll.forEach((element) => {
    element.classList.remove("active");
  });
}

function removeMobileNavActiveClass() {
  modile_nav_a.forEach((element) => {
    element.classList.remove("active-mobile-nav");
  });
}

function removeActiveClass() {
  queryAll.forEach((element) => {
    element.classList.remove("nav-active");
  });
}
function findActivePath() {
  removeActiveClass();
  removeNavActiveClass();
  removeMobileNavActiveClass();
  if (storeHash == "#home" || !storeHash) {
    queryAll[0].classList.add("nav-active");
    modile_nav_a[0].classList.add("active-mobile-nav");
    avtiveNavqueryAll[0].classList.add("active");
  } else if (storeHash == "#about") {
    queryAll[1].classList.add("nav-active");
    modile_nav_a[1].classList.add("active-mobile-nav");
    avtiveNavqueryAll[1].classList.add("active");
  } else if (storeHash == "#protfolio") {
    queryAll[2].classList.add("nav-active");
    modile_nav_a[2].classList.add("active-mobile-nav");
    avtiveNavqueryAll[2].classList.add("active");
  } else if (storeHash == "#project") {
    queryAll[3].classList.add("nav-active");
    modile_nav_a[3].classList.add("active-mobile-nav");
    avtiveNavqueryAll[3].classList.add("active");
  } else if (storeHash == "#contact") {
    queryAll[4].classList.add("nav-active");
    modile_nav_a[4].classList.add("active-mobile-nav");
    // avtiveNavqueryAll[4].classList.add("active")
  }
}

function initCheckActivePath() {
  findActivePath();
}

initCheckActivePath();

window.addEventListener("hashchange", () => {
  const hash = window.location.hash;
  console.log(hash);
  setTimeout(() => {
    storeHash = hash;
    prevstoreHash = hash;
  }, 300);
  const id = hash.replace("#", "");

  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
});
const { ref } = Vue;
const TextAnimation = {
  props: ["text", "delay", "speed"],
  template: `{{name}}`,
  setup(props) {
    const WcTO = `${props.text}`.split("");
    const currentIndex = ref(0);
    let name = ref("");
    setTimeout(() => {
      const trackTime = setInterval(() => {
        if (WcTO.length == currentIndex.value) {
          clearInterval(trackTime);
        } else {
          name.value += WcTO[currentIndex.value];
          currentIndex.value += 1;
        }
      }, props.speed ?? 70);
    }, props.delay ?? 0);
    return {
      name,
    };
  },
};

const name = Vue.createApp({});
name.component("Textanimations", TextAnimation);
name.mount(".txt-anim");

const observer = new IntersectionObserver(
  (entries) => {
    storeHash = `#${entries[0]?.target.id}`;
    findActivePath();
  },
  {
    root: null,
    threshold: 0.8,
  }
);

window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".indi-box");
  console.log(sections);
  sections.forEach((section) => observer.observe(section));
});

(function () {
  emailjs.init("AMG7gvevxJF8ig7Sz");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_7do9wm3", "template_x8xt1oi", "#contact-form")
      .then(
        () => {
          alert("✅ Message sent successfully!");
          document.getElementById("contact-form").reset();
        },
        (error) => {
          alert("❌ Failed to send message: " + JSON.stringify(error));
        }
      );
  });
