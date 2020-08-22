<template>
    <div class="goods-info" v-if="Object.keys(detailInfo).length!==0">
        <div class="info-desc clear-fix">
          <div class="desc">{{detailInfo[0].desc}}</div>
          </div>

      <div class="info-list">
        <img v-for="(item,index) in this.detailInfo[1].detailImage[3].list" :key="index"
        :src="item" alt="" @load="imgLoad">
      </div>
    </div>
</template>

<script>

  export default {
        name: "DetailGoodsInfo",
        props:{
         detailInfo:{
           type:Array,
           default:{
             return:[]
           }
        }
      },
      data(){
        return{
      //    detail_Images:[],
          counter :0,
          imagelength: 0
        }
      },
      methods:{
        imgLoad(){
          this.counter += 1;
          if(this.counter === this.imagelength){
            this.$emit("imageLoad");
            console.log("我最后在发送");
          }
        }
      }
      ,watch:{
    //     每次都调用一长串才获取到图片的长度，而我们只用获取一次图片的长度就可以。
    // 如果第一次传过来的detailInfo是空的对象，因为在detail.vue默认为空的，
    // 所以第一次进来是空的，获取是获取不到。
    // 然后用watch可以监听detailInfo对象的变化，
    // 一旦发生变化用最新的值去获取长度赋给imageslenth，就不用每一次都去调用获取
        detailInfo(){
          this.imagelength = this.detailInfo[1].detailImage[3].list.length
        },
      }
    }
</script>

<style scoped>
  .info-desc{
    padding: 10px;
    font-size: 15px;
    text-align: left;
  }
.info-list img{
  width: 100%;
}
</style>
