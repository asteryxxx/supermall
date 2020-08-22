<template>
    <div class="comment-info" v-if="Object.keys(commentInfo).length!==0">
      <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">
          更多
        </div>
      </div>

      <div class="info-middle">
        <div class="touxiang">
           <img :src="commentInfo[2].user[0].avatar"/>
          </div>
        <div class="uname">{{commentInfo[2].user[1].uname}}</div>
      </div>
      <div class="info-content">
        {{commentInfo[1].list[0].content}}
      </div>

      <div class="info-bottom">
        <div class="info-time">{{commentInfo[1].list[1].created | showDate}}
          <span>{{commentInfo[1].list[2].style}}</span>
          </div>
      </div>

      <div class="info-images">
        <img v-for="(item,index) in commentInfo[1].list[3].images" :src="item" :key="index">
      </div>
    </div>
</template>

<script>
  import {formatDate} from "../../../common/utils";

  export default {
        name: "DetailCommentInfo",
      props:{
        commentInfo:{
          type:Array,
          default:{
            return:[]
          }
        }
      },
      created() {
        console.log(this.commentInfo);
      },
    filters:{
       showDate(value){
         let date = new Date (value *1000)
            return formatDate(date,'yyyy-MM-dd')
          }
    }
    }
</script>

<style scoped>
  .comment-info{
    border-top:5px solid #f2f5f8;
    margin-top: 7px;
    border-bottom:5px solid #f2f5f8;
    margin-bottom: 15px;
  }
.info-header{
  margin-left: 5px;
  width: 96%;
  height: 50px;
  line-height: 50px;
  display: flex;
  position: relative;
  border-bottom:2px solid #f2f5f8;

}
  .header-title{
    font-size: 13px;
    padding-left: 5px;
  }
.header-title,.header-more{
  flex: 1;
}
  .header-more{
     position: absolute;
     right: 0;
    padding-right: 8px;
    font-size: 13px;

  }
  .info-middle{
    display: flex;
    align-items: center;
  }
 .uname{
    flex: 1;
  }
  .touxiang{
    margin-left: 10px;
  }
  .touxiang img{
    width: 50px;
    height: 50px;
  }
.info-content{
  font-size: 14px;
  margin-left: 16px;
}
  .info-bottom{
    display: flex;
    margin-top: 5px;
    font-size: 13px;
    margin-left: 16px;
  }
 .info-time{
   margin-top: 5px;
   color: darkgray;
 }
  .info-images{
    margin-left: 16px;
    display: flex;
  }
  .info-images img{
    width: 95px;
    height: 95px;
  }
</style>
