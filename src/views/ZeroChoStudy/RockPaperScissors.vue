<template>
  <div>
    <div
      id="computer"
      :style="{
        background:
          'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' +
          this.rockPosition +
          ' 0',
      }"
    ></div>
    <div>
      <v-btn @click="onClickButton">바위</v-btn>
      <v-btn @click="onClickButton">가위</v-btn>
      <v-btn @click="onClickButton">보</v-btn>
    </div>
    <div>{{ result }}</div>
    <div>현재 : {{ score }}점</div>
    <div>
      <v-btn @click="gameStart">다시시작</v-btn>
    </div>
  </div>
</template>

<script>
let interval = null;
const rspCoords = {
  바위: "0",
  가위: "-140px",
  보: "-290px",
};
export default {
  name: "RockPaperScissors",
  data() {
    return {
      score: 0,
      result: "",
      rockPosition: rspCoords.바위,
    };
  },
  methods: {
    onClickButton(e) {
      console.log("onClickButton > choice", e.target.innerText);
      if (e.target.innerText === "바위") {
        console.log("onClickButton > this.rockPosition", this.rockPosition);
        if (this.rockPosition === rspCoords.가위) {
          this.result = "이겼습니다.";
          this.score = this.score + 10;
        } else if (this.rockPosition === rspCoords.바위) {
          this.result = "비겼습니다.";
        } else {
          this.result = "졌어요";
          this.score = this.score - 10;
        }
      } else if (e.target.innerText === "가위") {
        console.log("onClickButton > this.rockPosition", this.rockPosition);
        if (this.rockPosition === rspCoords.보) {
          this.result = "이겼습니다.";
          this.score = this.score + 10;
        } else if (this.rockPosition === rspCoords.가위) {
          this.result = "비겼습니다.";
        } else {
          this.result = "졌어요";
          this.score = this.score - 10;
        }
      } else if (e.target.innerText === "보") {
        console.log("onClickButton > this.rockPosition", this.rockPosition);
        if (this.rockPosition === rspCoords.바위) {
          this.result = "이겼습니다.";
          this.score = this.score + 10;
        } else if (this.rockPosition === rspCoords.보) {
          this.result = "비겼습니다.";
        } else {
          this.result = "졌어요";
          this.score = this.score - 10;
        }
      }
      clearInterval(interval);
    },
    gameStart() {
      interval = setInterval(() => {
        if (this.rockPosition === rspCoords.바위) {
          this.rockPosition = rspCoords.가위;
        } else if (this.rockPosition === rspCoords.가위) {
          this.rockPosition = rspCoords.보;
        } else {
          this.rockPosition = rspCoords.바위;
        }
      }, 100);
    },
  },
  beforeCreate() {
    console.log("beforeCreate > start");
  },
  created() {
    console.log("created > start");
  },
  beforeMount() {
    console.log("beforeMount > start");
  },
  mounted() {
    console.log("mounted > start");
    this.gameStart();
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    clearInterval(interval);
  },
  destroyed() {
    console.log("updated > start");
  },
};
</script>

<style scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>
