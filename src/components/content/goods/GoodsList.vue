<template>
    <div class="goods">
    <GoodsListItem v-for="item in goods" :gooditem="item"></GoodsListItem>
      <!--goodsitem里面不需要插槽，然后遍历goods，根据列表遍历出
      得到很多小组件【一个组件展示一个对象】，这个组件不负责展示-->
    </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem"
    export default {
      name: "GoodsList",
      components:{GoodsListItem},
      props: {
        goods: {
        type: Array,
           default() {
             return []
        }
      }
    }
    }
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /*均等分*/
  /*默认不包裹，所以东西往一行里面塞，设置包裹，根据宽度来确定一行显示多少个
  150px就显示三个，100px显示三个*/
}
/*如果希望每一行只显示两个，下面的item必须有宽度，不然就均分
往一行里面塞的，显得非常挤。默认往一行里面塞内容，很紧凑
  可以给子组件固定宽度  width: 150px;
  最好设置百分比，不然换个机型就不行了*/

</style>
