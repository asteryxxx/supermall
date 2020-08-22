<template>
    <div class="shop-info">
       <div class="shop-top">
          <img :src="shop.logo">
         <span class="title">{{shop.name}}</span>
       </div>
      <div class="shop-middle">
        <div class="shop-middle-item shop-middle-left">
           <div class="info-sells">
              <div class="sells-count">
                {{shop.sells | sellcountfilter}}
              </div>
             <div class="sells-text">
                总销量
             </div>
           </div>

          <div class="info-goods">
              <div class="goods-count">
                {{shop.goodscount}}
              </div>
              <div class="goods-text">
                全部宝贝
              </div>
          </div>
        </div>
          <!--右边显示的-->
          <div class="shop-middle-item shop-middle-right">
             <table>
                <tr v-for="(item,index) in shop.score" :key="index" >
                  <td>{{item.name}}</td>
                  <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                  <td class="better" :class="{'better-more':item.isBetter}">
                    <span>{{item.isBetter?'高':'低'}}</span>
                  </td>
                </tr>
             </table>
          </div>



      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailShopInfo",
      props:{
          shop:{
            type:Object,
            default(){
              return {}
            }
          }
      },filters:{
          sellcountfilter:function (value) {
            console.log(value/10000);
            if(value<10000) return value
             return (value/10000).toFixed(1)+"万"
          }
      }

    }
</script>

<style scoped>
.shop-info{
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
  .shop-top{
    line-height: 45px;
    display: flex;
    align-items: center;
    /*垂直居中↑*/
  }
  .shop-top img{
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }
  .shop-top .title{
    margin-left: 7px;
    vertical-align: center;
  }
  .shop-middle{
    color: white;
    margin-top: 15px;
    display: flex;
    align-items: center;
  }
  .shop-middle-item{
    flex-grow:2
  }
 .shop-middle-left{
    display: flex;
   color: #333;
   text-align: center;
   border-right: 1px solid rgba(0,0,0,.1);
 }
.shop-middle-item .info-sells{
    height: 20px;
   line-height: 20px;
    font-size: 14px;
  margin-left: 8px;
 }
.shop-middle-item .info-goods{
  font-size: 13px;
  margin-left: 18px;
}

.shop-middle-item .sells-text{
  padding: 0 5px;
}

.goods-text{
    padding-top: 11px;
  font-size: 10px;
}
  .sells-count .goods-count{
    font-size: 14px;
  }
  .sells-text, .goods-count{
    margin-top: 5px;
    font-size: 12px;
  }
  .shop-middle-right{
    font-size: 13px;
    color: #333;
    flex: 1;
  }
 .shop-middle-right table{
   width: 120px;
   margin-left: 30px;
 }
.shop-middle-right table td{
  padding: 3px 0;
}
.shop-middle-right .score{
  color: #5ea731;
}
.shop-middle-right .score-better{
  color: #f13e3a;
}
.shop-middle-right .better span{
  color: #fff;
  text-align: center;
}
  .shop-middle-right .better-more span{
    background-color: #f13e3a;
  }

</style>
