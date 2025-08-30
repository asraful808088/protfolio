const {} =  Vue
const Cardcom = {
    props: ["label",'des','startcount','halfst','icon'],
    template: ` 
        <div class="card">
          <div class="image">
            <div class="icon">
              <img :src="icon" alt="" />
            </div>
          </div>
          <div class="txt">
            <div class="top-hr">
              <img src="./assets/line/Group 2.svg" alt="" />
            </div>
            <div class="card-header"> {{label}} </div>
            <div class="star-box" >
              <div class="star" v-for="(item, index) in generateRange(startcount)" :key="item">
                <img src="./assets/line/Group 4.svg" alt="">
              </div>
               <div class="star" v-if="halfst==true" :key="item">
                <img src="./assets/line/Group 5.svg" alt="">
              </div>
            </div>
            <div class="card-des"> {{des}}
              
            </div>
            <div class="bottom-hr">
              <img src="./assets/line/Group 1.svg" alt="" />
            </div>
          </div>
        </div>
  `,
    setup(){
       
        return {
          
        }
    },
    methods: {
        generateRange(count) {
          return Array.from({ length: count }, (v, k) => k + 1);
        }
      }
}

const cardCom = Vue.createApp({});
cardCom.component("Card",Cardcom)
cardCom.mount(".prot-card");