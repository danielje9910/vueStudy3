<template>
  <div>
    <div>당첨숫자</div>
    <div id="결과창">
      <lotto-ball
        v-for="(ball, index) in lottoVO.winballs"
        :key="index"
        :number="ball"
      ></lotto-ball>
    </div>
    <div>보너스</div>
    <div id="보너스창">
      <lotto-ball v-if="lottoVO.bonusBall !== 0" :number="lottoVO.bonusBall">
      </lotto-ball>
    </div>
    <v-btn @click="reStartLotto">한번더</v-btn>
  </div>
</template>

<script>
import LottoBall from "@/components/LottoBall";

function getWinNumber() {
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];

  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);

  return [...winNumbers, bonusNumber];
}

export default {
  name: "LottoGenarator",
  components: {
    LottoBall,
  },
  data() {
    return {
      lottoVO: {
        winNumbers: [],
        winballs: [],
        bonusBall: 0,
      },
      defaultLottoVO: {},
      timeOut: [],
    };
  },
  mounted() {
    this.defaultLottoVO = JSON.parse(JSON.stringify(this.lottoVO));
    this.startLotto();
  },
  watch: {
    // 최대한 watch 는 자제 하고 처리 하기
    // lottoVO(value, oldValue){
    //   if(value.winballs.length === 0){
    //     this.startLotto()
    //   }
    // }
  },
  methods: {
    startLotto() {
      console.log("startLotto() > start");
      this.lottoVO.winNumbers = getWinNumber();

      let basicNumber = this.lottoVO.winNumbers.slice(0, 6);
      let bonusNumber = this.lottoVO.winNumbers.slice(6, 7);

      basicNumber.forEach((item, index) => {
        this.timeOut[index] = setTimeout(() => {
          this.lottoVO.winballs.push(item);
        }, (index + 1) * 1000);
      });
      this.timeOut[6] = setTimeout(() => {
        this.lottoVO.bonusBall = bonusNumber[0];
      }, 7000);
    },
    reStartLotto() {
      this.lottoVO = JSON.parse(JSON.stringify(this.defaultLottoVO));
      this.startLotto();
    },
    beforeDestroy() {
      this.timeOut.forEach((item) => {
        clearTimeout(item);
      });
    },
  },
};
</script>

<style scoped>
</style>