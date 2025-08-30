const { onMounted } = Vue;
const NavLink = {
  props: [
    "icon",
    "label",
    "link",
    "hashurl",
    "ishome",
    "ishome",
    "active_hash",
  ],
  template: ` <a :href="link">
            <div class="nav-item">
              <div class="txt-icon">
                <div class="icon">
                  <img
                    :src="icon"
                    alt=""
                  />
                </div>
                <div class="txt"> {{label}}  </div>
              </div>
              <div class="active-in mobile-nav-item-a">
                <div class="sub-in"></div>
              </div>
            </div>
          </a>
`,
  setup(props) {
    // const active = ref(true);
    // const changeUrl = () => {
    //   const url = new URL(window.location.href);
    //   if (url.hash == props.hashurl) {
    //     active.value = true;
    //   } else if (!url.hash && props.ishome) {
    //     active.value = true;
    //   } else {
    //     active.value = false;
    //   }
    // };
    // window.addEventListener("hashchange", () => {
    //   changeUrl();
    // });
    // onMounted(() => {
    //   changeUrl();
    // });
    
    // active-mobile-nav 
    
    return {
    };
  },
};

const mobileNav = Vue.createApp({});
mobileNav.component("Mobilelink", NavLink);
mobileNav.mount(".mobile-link");
