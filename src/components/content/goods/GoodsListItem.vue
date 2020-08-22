<template>
  <div class="goods-item" @click="itemclick">
    <img :src="showImage" @load="imageload">
    <div class="goods-info">
      <p>{{gooditem.title}}</p>
      <span class="price">{{gooditem.price}}</span>
      <span class="collect">{{gooditem.cfav}}</span>
    </div>
  </div>

</template>

<script>
    export default {
      name: "GoodsListItem",
      props: {
        gooditem: {
            type: Object,
          //因为遍历出的是对象，所以要用这个类型
          default() {
             return {}
          }
        }
      }
      ,methods:{
        imageload(){
          this.$bus.$emit("itemimageload")
        },
        itemclick(){
          console.log("跳转到详情页"+this.gooditem.iid);
          this.$router.push("/detail/"+ this.gooditem.iid)
        }
      },
      computed:{
        showImage(){
          return this.gooditem.img || this.gooditem.show.img
        }
      },

    }
</script>

<style scoped>
  .goods-item {
   padding-bottom: 80px;
    position: relative;
    width: 48%;

  }

  .goods-item img {
    width: 100%;
    /*跟item一样大，然后有个圆角*/
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  /*一行显示更多的显示。。。*/

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
    /*收藏的图标相对于数字来定位*/
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
  /*收藏前面的图标*/
</style>
