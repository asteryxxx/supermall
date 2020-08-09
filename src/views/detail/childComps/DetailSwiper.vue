<template>
      <swiper class="detail-swiper">
        <swiper-item v-for="item in topImages">
          <img :src="item">
        </swiper-item>
      </swiper>
  <!--其实不用写div包裹，因为swiper也是一个根元素-->
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper"

    export default {
        name: "DetailSwiper",
      props:{
          topImages:{
            type:Array,
            default(){ return [] }
           }
      },
      components:{
          SwiperItem,Swiper
      },
      created() {
        console.log("detailswiper的图片 "+this.topImages.length);
      }
    }
</script>

<style scoped>
.detail-swiper{
  height: 250px;
  overflow: hidden;
}
</style>
