<template>
  <div class="ball" :style="{ background }">{{ number }}</div>
</template>

<script>
export default {
  name: "LottoGenarator",
  props: {
    number: Number,
    default: 0,
  },
  data() {
    return {
      background: "",
    };
  },
  methods: {},
  mounted() {
    if(this.number <= 10){
      this.background = 'red'
    } else if(this.number <= 20){
      this.background = 'yellow'
    } else if(this.number <= 30){
      this.background = 'green'
    } else {
      this.background = 'orange'
    }
  },
};
</script>

<style scoped>
.ball {
  display: inline-block;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
}
</style>