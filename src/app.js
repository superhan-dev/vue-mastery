const app = Vue.createApp({
  data(){
    return {
      cart: [],
    }
  },
  methods: {
    // this.$emit(event, payload) 는 두가지 인자를 넘겨 사용한다.
    // - 발생시킬 이벤드
    // - 이벤트 발생시 payload = id
    updateCart(id) {
      this.cart.push(id);

    }
  },
})