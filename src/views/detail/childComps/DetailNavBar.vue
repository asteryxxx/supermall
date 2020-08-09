<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backclick">
        <img src="~assets/img/common/back.svg">
      </div>
    <div slot="center" class="titles">
      <div v-for="(item,index) in titles" @click="itemclick(index)"
           class="title-item" :class="{active: index===currentIndex}">
        {{item}}
      </div>
    </div>
  </nav-bar>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/Navbar"

  export default {
      name: "DetailNavBar"
     ,components:{
        NavBar
      },
    data(){
        return{
          titles:['商品','参数','评论','推荐'],
          currentIndex :0
        }
    },
    methods:{
      itemclick(index){
        this.currentIndex = index;
      },
      backclick(){
        this.$router.go(-1)
      }
    }
    }
</script>

<style scoped>
.titles{
  display: flex;
}
  .title-item{
    flex: 1;
    font-size: 13px;
  }
  .active{
    color:var(--color-high-text) ;
  }
  .back{
    margin-top: 10px;
  }
</style>
