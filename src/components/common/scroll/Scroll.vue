<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
      props:{
        probeType:{
          type:Number,
          default:0
        },
        pullUpLoad:{
          type:Boolean,
          default: false
        }
      },
      data(){
          return{
            scroll:null,
            mess:"ceshixiamsg",

          }
      },
      mounted() {

        this.scroll = new BScroll(this.$refs.wrapper,{
             click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad //开启监听上拉加载更多,写错大小字母都不行
            //如果probeType传的是3就说明监听
          })
          //第一个参数是监听对象的类型，第二个是必须要给的参数
        if(this.probeType ===2 || this.probeType ===3){
          this.scroll.on('scroll',(postion)=>{
            // console.log(postion);
            this.$emit("scroll",postion)
          })
        }//更加严谨

        console.log("kankan: "+this.scroll.scrollerHeight);

        if(this.pullUpLoad){//判断一下为true才回调，比较严谨
          this.scroll.on("pullingUp",()=>{
            this.$emit("pullingup")
            })
         }
      },
      methods:{
        scronllTo(x, y, time=3000){
            this.scroll.scrollTo(x,y,time);
          },
        refresh(){
          console.log("----");
          this.scroll && this.scroll.refresh();
        },
        finishPulling(){
          this.scroll && this.scroll.finishPullUp();
        }

      }
    }
</script>

<style scoped>

</style>
