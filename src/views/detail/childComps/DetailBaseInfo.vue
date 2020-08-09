<template>
    <div class="base-info" v-if="Object.keys(goods).length !==0">
       <div class="info-title">{{goods.title}}</div>
       <div class="info-price">
         <span class="n-price">{{goods.newPrice}}</span>
         <span class="o-price">{{goods.oldPrice}}</span>
         <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
       </div>
      <div class="info-other">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="info-service">
        <span class="info-service-item" v-for="index in goods.services.length-1"
        :key="index">
          <img :src="goods.services[index-1].icon">
          <!--因为他index从1开始的-->
          <span>{{goods.services[index-1].name}}</span>
        </span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBaseInfo",
        props:{
          goods:{
            type:Object,
            default(){
              return{}
            }
          }
        }
    }
</script>

<style scoped>
.base-info{
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 1px solid #BFBFBF;
}
.info-title{
  font-size: 15px;
  color: black;
  padding-bottom: 8px;
}
.info-other{
  justify-content: space-between;
  padding-top: 19px;
  display: flex;
  padding-bottom: 5px;
}
.info-other span{

  font-size: 13px;
}

  .info-service img{
    width: 15px;
    height: 15px;
  }
.info-service {
  display: flex;
  font-size: 12px;
  justify-content: space-between;
}

  .info-other{
    margin-bottom: 12px;
    border-bottom: 1px solid #BFBFBF;
  }

  .n-price{
    color: #DC143C;
    font-size: 22px;
  }
.o-price{
  color:#A9A9A9;
  font-size: 14px;
  text-decoration:line-through;

}
.info-price{
  position: relative;
}
  .discount{
    width: 50px;height: 16px;
    text-align: center;
    line-height: 16px;
    position: absolute;
    top:-1px;
    left: 147px;
    color: #fff;
    font-size: 7px;
    background-color:#DC143C;
    border-radius:7px;
    /* 圆角的大小 */
  }
</style>
