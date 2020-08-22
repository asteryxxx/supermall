<template>
    <div id="detaildiv">
      <div>{{$store.state.cartList.length}}</div>
        <DeatailNavBar class="detail-nav" @titleclick="titleclick" ref="nav"></DeatailNavBar>
      <scroll class="content"  :probeType="3"
              ref="scrollzujian" @scroll="contentscroll">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <detail-shop-info :shop="shop" ></detail-shop-info>
        <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" ref="xqt"></detail-goods-info>
      <detail-comment-info :commentInfo="commentInfo" ref="pl"></detail-comment-info>
      <goods-list :goods="recommends" ref="tj"></goods-list>
      </scroll>
      <detail-bottom-bar @addCart="_addCart"></detail-bottom-bar>
    </div>
</template>

<script>
  import DetailBottomBar from "./childComps/DetailBottomBar"
  import GoodsList from "components/content/goods/GoodsList"
  import DetailCommentInfo from "./childComps/DetailCommentInfo"
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
  import DeatailNavBar from "./childComps/DetailNavBar"
  import {getRate} from "../../network/detail";
  import {getDetail,Goods,Shop,getRecommends} from "network/detail";
  import DetailSwiper from "./childComps/DetailSwiper"
  import DetailBaseInfo from "./childComps/DetailBaseInfo"
  import DetailShopInfo from "./childComps/DetailShopInfo"
  import Scroll from "components/common/scroll/Scroll"
  import {debounce} from "common/utils";
  import {itemListMixin} from "common/mixin";

  export default {
        name: "Detail",
      mixins:[itemListMixin],
      data(){
          return{
            iid : null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            commentInfo:[],
            recommends:[],
            themeTopYs:[],
            getThemeTopy:null,
            currentIndex:0
          }
      },
    methods:{
      _addCart() {
          const product = {};
          product.title = this.goods.title
          product.image = this.topImages[0]
          product.desc = this.goods.desc;
          product.iid = this.iid;
        console.log(product);
      //  this.$store.commit("addCart",product)
        this.$store.dispatch('addCart',product);
      },
      _getRecommends(){
        getRecommends().then(res=>{
            const shuju = res.data;
          console.log("推荐:"+JSON.stringify(shuju));
           this.recommends = shuju
        })
      },
      _getRateList(){
        getRate().then(res=>{
          const shuju = res.data;
          if(shuju[0].cRate>0){
            this.commentInfo = res.data
          }
        })
      },
      imageLoad(){
        console.log("当前路由名字："+ this.$route.path);
        this.refresh();
        //根据最新的数据，对应的dom是已经被渲染出来
        //但是图片依然是没有加载完的，取到的offsettop是不包含图片的
        console.log("-iamglod--");
        this.getThemeTopy()

      },
      titleclick(index){
        console.log("点击了 ："+index);
        this.$refs.scrollzujian.scronllTo(0,-this.themeTopYs[index],100)
      },
      contentscroll(position){
        //获取y值
        const positionY = -position.y;
        console.log(positionY);
        //进行对比  this.themeTopYs:[0,1000,2000,3000]
        let length = this.themeTopYs.length
        for(let i=0;i<length;i++){
          if((this.currentIndex!==i)&&(i<length-1 &&positionY>this.themeTopYs[i]
            &&positionY<this.themeTopYs[i+1])||
            (i===length-1 &&positionY>this.themeTopYs[i]
             )){
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      }
    }
      ,created() {
          setTimeout(()=>{
            console.log("5s后丶+"+this.$refs.xqt.$el.offsetTop);
          },5000)

        this.getThemeTopy = debounce(()=>{
          console.log("---");
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.xqt.$el.offsetTop)
          this.themeTopYs.push(this.$refs.pl.$el.offsetTop )
          this.themeTopYs.push(this.$refs.tj.$el.offsetTop-50 )
          console.log(this.themeTopYs);
        })

      //获取推荐
      this._getRecommends();
          //获取评论数据
       this._getRateList();
          //1、保存传入的iid
          this.iid = this.$route.params.iid
         //2、根据iid请求详情的数据
           getDetail().then(res=>{
             const shuju = res.data;
              this.topImages= shuju.itemInfo[6].topImages
             //  console.log("结果.///"+JSON.stringify(res));
             //3、获取商品信息
             console.log("111: "+ shuju.itemInfo[1].oldPrice );
             console.log("222: "+ shuju.shopInfo[3].services );
             console.log("333: "+ shuju.columns);
            this.goods =new Goods(shuju.itemInfo,shuju.columns,shuju.shopInfo[3].services)
            //查询店铺信息并显示出来
             console.log("分数.///"+JSON.stringify(shuju.shopInfo[4].score));
             this.shop = new Shop(shuju.shopInfo)
             //获取商品详细信息
             this.detailInfo = shuju.detailInfo
             console.dir("Info : "+shuju.detailInfo[0].desc)

           });

      },components:{DetailGoodsInfo,DetailCommentInfo,GoodsList,DetailBottomBar,
        DeatailNavBar,DetailSwiper,DetailBaseInfo,DetailShopInfo,Scroll
      },
    destroyed(){
      this.$bus.$off("itemimageload",this.itemImgListener)
      //离开时取消监听
    }
    }
</script>

<style scoped>
#detaildiv{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
  .detail-nav{
    position: relative;
    z-index: 999;
    background-color: #fff;
  }
  .content{
    height: calc(100% - 44px);
  }
</style>
