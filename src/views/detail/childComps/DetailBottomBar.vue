<template>
    <div class="bottom-bar" style="cursor:pointer">
        <div class="bar-item">
           <div class="cart" @click="addToCart">加入购物车</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBottomBar",
      methods:{
        addToCart(){
          console.log("添加到购物车");
          this.$emit("addCart")
        }
      }
    }
</script>

<style scoped>
.bottom-bar{
  height: 49px;
  background-color:white;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
}
.bottom-bar :hover{
  cursor:pointer
}
  .bar-item{
    text-align: center;
    line-height: 49px;
    color: orange;
  }

</style>
