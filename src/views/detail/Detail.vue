<template>
    <div id="detaildiv">
        <DeatailNavBar></DeatailNavBar>
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    </div>
</template>

<script>
  import DeatailNavBar from "./childComps/DetailNavBar"
  import {getDetail,Goods} from "network/detail";
  import DetailSwiper from "./childComps/DetailSwiper"
  import DetailBaseInfo from "./childComps/DetailBaseInfo"

  export default {
        name: "Detail",
      data(){
          return{
            iid : null,
            topImages:[],
            goods:{}
          }
      },created() {
          //1、保存传入的iid
          this.iid = this.$route.params.iid
         //2、根据iid请求详情的数据
           getDetail().then(res=>{
             const shuju = res.data;
              this.topImages= shuju.itemInfo[6].topImages
               console.log("结果.///"+JSON.stringify(res));
             //3、获取商品信息
             console.log("111: "+ shuju.itemInfo[1].oldPrice );
             console.log("222: "+ shuju.shopInfo[3].services );
             console.log("333: "+ shuju.columns);
            this.goods =new Goods(shuju.itemInfo,shuju.columns,shuju.shopInfo[3].services)
           });
      },components:{
        DeatailNavBar,DetailSwiper,DetailBaseInfo
      }

    }
</script>

<style scoped>

</style>
