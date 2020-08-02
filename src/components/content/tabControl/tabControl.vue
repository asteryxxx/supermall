<template>
    <div class="tab-Control">
      <div v-for="(item,index) in titles" @click="itemclick(index)"
           class="tab-Control-item" :class="{active: index === currentindex}">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "tabControl",
        props:{
          titles:{
            type:Array,
              default(){return []}
          }
      },
      data(){
          return{
            currentindex: 0
          }
      },
      methods:{
        itemclick(index){
          this.currentindex = index
          this.$emit("tabClick",index)
        }
      }
    }
</script>

<style scoped>
 .tab-Control{
   background-color: #fff;
   display: flex;
   text-align: center;
   font-size: 14px;

 }
 .tab-Control-item{
   flex: 1;
   height: 40px;
   line-height: 40px;
 /*这个也会继承，可以放在父元素那里*/
 }
 .tab-Control-item span{
   padding: 5px;
 }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
