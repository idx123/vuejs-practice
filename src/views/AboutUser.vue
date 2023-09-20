<template>
    <h1>This is About</h1>
    <div class="grid-wrapper">
        <label for="name">이름</label>
        <input id="name" type="text" v-model="infos.name" @input="print"/>
        <label for="age">나이</label>
        <input id="age" type="number" v-model="infos.age" @change="print"/>
        <label for="job">직업: {{infos.job}}</label>
        <input id="job" type="text" v-model.lazy="infos.job"/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            infos: { name: '', age: 0, job: '' },
        }
    },
    methods:{
        print(){
            console.log(this.infos);
        }
    }
}
</script>
<style>
    .grid-wrapper{
        display: grid;
        width: 50%;
        margin: 0 auto;
    }
</style>