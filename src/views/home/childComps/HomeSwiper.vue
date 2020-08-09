<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageload">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'

  export default {
        name: "HomeSwiper",
        data(){
          return{
            isLoad:false
          }
        },
        props:{
          banners:{
            type:Array,
            default(){
              return [] //默认必须是函数
            }
          }
        },
         components:{
        Swiper,SwiperItem
       },
    methods:{
      imageload(){

        if(!this.isLoad){
          console.log("imageload------");
          this.$emit("swiperimageload")
          this.isLoad = true;
        }
      }
    }
    }
</script>

<style scoped>

</style>
