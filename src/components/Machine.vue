<template>
  <div id="SlotMachine">
    <div class="badge">
      <span>SUMMER</span>
    </div>
    <div class="body">
      <div class="window">
        <!--  -->
        <div class="container">
          <Gift
            v-for="(config, index) in configs"
            @finished="isFinished"
            :trigger="trigger"
            :config="config"
            :key="index">
          </Gift>
        </div>
        <!--  -->
      </div>
      <div :class="['handler', { 'active': active }, { 'disabled': disabled }]">
        <div class="stick2"></div>
        <div class="stick"></div>
        <div class="ball" @click="!disabled && turn()"></div>
      </div>
    </div>
    <audio src="/public/little_fat.m4a" ref="playAuto" type="audio/x-m4a" class="auto-play"> 
    </audio>  
    <div
      class="history"
      @click="openResultList = true">
      OPEN RESULT
    </div>
    <div
       @click.self="openResultList = false"
       :class="['resultList', {'openResultList' : openResultList }]">
      <div class="resultList-container">
        <div class="result" v-for="(result, index) in resultList" :key="index">{{ `Round${index + 1}: ${result}` }}</div>
      </div>
    </div>

  </div>
</template>

<script>
import Gift from './Gift.vue'
export default {
  name: 'SlotMachine',
  components:{
    Gift
  },
  data () {
    return {
      run3D: false,
      trigger: null,
      active: false,
      disabled: false,
      configs: [
        {
          style: 'gift-style',
          gifts: [
        {
          type: 'text',
          name: 'Aesop 馥香水'
        },
        {
          type: 'text',
          name: 'iPhone 13 pro'
        },
        {
          type: 'text',
          name: '象牙宮'
        },
        {
          type: 'text',
          name: 'apple watch'
        },
        {
          type: 'text',
          name: 'New Balance'
        },
        {
          type: 'text',
          name: 'Celine 包包'
        },
        {
          type: 'text',
          name: 'MUJI 旅行箱'
        },
        {
          type: 'text',
          name: '米茶口水巾'
        },
        {
          type: 'text',
          name: '小胖髒髒包'
        },
        {
          type: 'text',
          name: '穿不破的襪子'
        }
      ],
          duration: 30000,
          fontSize: 30,
          height: 100,
          width: 200
        }
      ],
      openResultList: false,
      resultList: [],
      result: []
    }
  },
  methods: {
    turn () {
      this.$refs.playAuto.play();
      this.active = true
      setTimeout(() => {
        this.active = false
      }, 500)
      this.disabled = true
      this.trigger = new Date()
    },
    isFinished (val) {
      const autoTurnList = this.$el.querySelectorAll('.autoTurn')
      this.result.push(val)
      if (autoTurnList.length === 1) {
        this.disabled = false
        this.resultList.push(this.result)
        this.result = []
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lobster');
.auto-play {
  display: none;
}
#SlotMachine {
  //
  $red: #ea5e56;
  $dark-red: #8f4343;
  $blue: #09384e;
  $white: #f4f2e0;
  $border-size: 5px;
  //
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  .badge {
    position: relative;
    margin-top: 30px;
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    width: 180px;
    height: 100px;
    border: 10px solid $blue;
    border-radius: 50%;
    background-color: $red;
    box-shadow: 0px -5px 0px $white;
    text-align: center;
    span {
      position: absolute;
      top: 15px;
      color: $dark-red;
      font-size: 20px;
      font-family: 'Lobster', cursive;
      &::before {
        position: absolute;
        right: 1px;
        bottom: 1px;
        color: $blue;
        content: 'SUMMER';
      }
      &::after {
        position: absolute;
        right: 3px;
        bottom: 3px;
        color: $white;
        content: 'SUMMER';
      }
    }
  }
  .body {
    width: 200px;
    position: absolute;
    padding: 12px;
    border: $border-size solid $blue;
    border-radius: 30px;
    background-color: $red;
    box-shadow: 5px 5px 0px $white;
  }
  .window {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: $border-size solid $blue;
    border-radius: 30px;
    overflow: hidden;
    transform: translateZ(0); // for safari border-radius issue
    &::after,
    &::before {
      position: absolute;
      z-index: 5;
      width: 100%;
      height: 100%;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2) inset;
      content: ' ';
    }
    &::before {
      box-shadow: 0 -10px 15px rgba(0, 0, 0, 0.2) inset;
    }
    .container {
      width: 100%;
      height: 100px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3) inset;
      overflow: hidden;
      .fence1,
      .fence2 {
        position: absolute;
        z-index: 10;
        left: 190px;
        width: 10px;
        height: 200px;
        border: 3px solid $blue;
        background-color: $red;
      }
      .fence2 {
        left: 400px;
      }
    }
    .gift-style {
      font-family: 'Lobster', cursive;
      color: #09384e;
      border-right: none;
      border-left: none;
      background-color: #f5f2e2;
    }
  }
  .handler {
    position: absolute;
    top: 50%;
    right: -55px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.active {
      .ball {
        top: 0px;
      }
      .stick {
        top: -10px;
        height: 20px;
      }
    }
    &.disabled {
      .ball {
        cursor: not-allowed;
        animation: none;
      }
    }
    .stick {
      position: absolute;
      top: -50px;
      right: -5px;
      width: 20px;
      height: 60px;
      border: $border-size solid $blue;
      border-radius: 20px;
      background-color: $red;
      transition: 350ms;
    }
    .stick2 {
      position: absolute;
      top: -10px;
      right: 10px;
      width: 30px;
      height: 20px;
      border: $border-size solid $blue;
      border-radius: 0 20px 20px 0;
      background-color: $red;
    }
    .ball {
      position: absolute;
      top: -75px;
      right: -10px;
      width: 30px;
      height: 30px;
      border: $border-size solid $blue;
      border-radius: 50%;
      background-color: $red;
      cursor: pointer;
      transition: 500ms;
      animation: ballLight 1s infinite alternate-reverse linear;
    }
  }
  .github {
    margin-top: 10px;
    a {
      color: #fff;
    }
  }
  .history {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    white-space: nowrap;
    padding: 15px 30px;
    outline: none;
    border: none;
    border: solid 5px $blue;
    border-radius: 10px;
    background-color: $red;
    color: $white;
    font-size: 20px;
    font-family: 'Lobster', cursive;
    cursor: pointer;
    user-select: none;
    &:after {
      position: absolute;
      padding: 3px;
      width: 100%;
      height: 100%;
      border: solid 3px $white;
      border-radius: 10px;
      left: -6px;
      top: -6px;
      content: ' ';
    }
  }
  .resultList {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    visibility: hidden;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.4);
    opacity: 0;
    transition: 500ms;
    &.openResultList {
      visibility: visible;
      opacity: 1;
    }
    &-container {
      position: absolute;
      padding: 20px;
      min-width: 600px;
      height: 400px;
      border: solid 5px $blue;
      border-radius: 30px;
      background-color: $white;
      box-shadow: 5px 5px 15px rgba(0,0,0,0.4);
      overflow-y: auto;
      .result {
        font-family: 'Lobster', cursive;
        padding: 15px;
        list-style: none;
        color: $blue;
        font-size: 60px;
      }
    }
  }
  @keyframes ballLight {
    from {
      border: solid 5px $white;
      box-shadow: 0px 0px 10px $white;
    }
    to {
      border: solid 5px $white;
      box-shadow: 0px 0px 30px $white;
    }
  }
}
</style>