<template>
  <div class="black-bg" v-if="isOpen == true" @click="isOpen = false">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>모달입니다.</p>
    </div>
  </div>


  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <hr/>
    <!-- router 적용되는 부분 -->
    <router-view/>
  <hr/>
  <div>
    <h1 :style="blue">속성 바인딩 하고 싶으면 속성 왼쪽에 : 추가</h1>
    <p>태그 안에 있는 내용을 바인딩하고 싶으면 이중중괄호 사용 {{products}}</p>
  </div>

  <hr/>

  <!-- <div v-for="(p,i) in products" :key="i">
    <h2 @click="isOpen = true">{{p}}</h2>
    <p>{{i}}번째 매물입니다.</p>
    <button v-on:click="increase(i)">허위매물신고</button> 
    <span>신고횟수: {{count[i]}}</span>
  </div> -->'

  <div v-for="r in roomArr" :key="r.id">
    <img alt="room" :src="r.image" class="room-img"> <!--속성은 콜론: 잊지말자..-->
    <h2>{{r.title}}</h2>
    <p>{{r.content}}</p>
    <span>월세 {{r.price}}원</span>
  </div>

</template>

<script>
import rooms from './assets/post';

export default {
  name: 'App',
  data(){ // 데이터 보관소, obj형태로 저장
    return {
      blue: 'color:#41B883',
      products: ['역삼동', '천호동', '마포구'],
      menu: ['home','shop','about'],
      count: [0,0,0],
      isOpen: false, 
      roomArr: rooms,
    }
  },
  methods:{ //함수 저장소
    increase(i){
      this.count[i] += 1; //함수 안에서 데이터 사용 시 this키워드를 이용해야함
    }
  },
  components: {
  }
}
</script>

<style>
body{
  margin: 0;
}
div{
  box-sizing: border-box;
}

.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}

.white-bg{
  width: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
}

.room-img{
  width: 50%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
