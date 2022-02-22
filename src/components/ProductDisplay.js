app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="product-display">
    <div class="product-container">
     
      <div class="product-info">
        <br />
        <button 
          class="button" 
          v-on:click="addToCart">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  `,

  data() {
    return {
      selectedVariant:0,
      variants: [
        { id: 2234, color: 'green', image: '../assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: '../assets/images/socks_blue.jpg', quantity: 0 },
      ],
    }
  },
  methods: {
    addToCart(){
      this.$emit('add-to-cart', this.getRandomInt(1,50))
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }
  
  },

})