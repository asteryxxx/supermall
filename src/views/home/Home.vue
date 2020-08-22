<template>
     <div id="home">
       <!--这个首页是唯一的直接用id最好-->
       <NavBar class="home-nav">
         <div slot="center">购物街</div>
         <!--指定替换中间的插槽-->
       </NavBar>
       <tab-control :titles = "['流行','新款','精选']" :class="{fixed :isTabFixed}"
         class="tabcontrol1"   v-show="isTabFixed"  @tabClick="tabClick"  ref="tabcontrol1">
       </tab-control>

       <scroll class="content" ref="scrollzujian" :probeType="3"
       @scroll="contentscroll" :pullUpLoad="true" @pullingup="loadmore">
      <HomeSwiper :banners="banners" @swiperimageload="swiperimageload"></HomeSwiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
     <feature-view></feature-view>
       <tab-control :titles = "['流行','新款','精选']" :class="{fixed :isTabFixed}"
         @tabClick="tabClick"  ref="tabcontrol2">
       </tab-control>
      <goods-list :goods="showgoods"></goods-list>
       <!--因为这里currenttype是响应式的，你点击改变了所以数据也会变-->
       </scroll>
       <back-top @click.native="backclick()" v-show="isShowBacktop"></back-top>

       <ul>
         <li>======</li>
         <li>xx</li>
         <li>x</li>
         <li>xx</li>
         <li>aa</li>
         <li>hh</li>
         <li>gg</li>
         <li>dd</li>
         <li>kk</li>
         <li>oo</li>
         <li>gg</li>
         <li>dd</li>
         <li>kk</li>
         <li>oo</li>    <li>gg</li>
         <li>dd</li>
         <li>kk</li>
         <li>oo</li>    <li>gg</li>
         <li>dd</li>
         <li>kk</li>
         <li>oo</li>
         <li>gg</li>
         <li>dd</li>
         <li>kk</li>
         <li>oo</li>    <li>gg</li>
         <li>dd</li>
         <li>kk</li>
         <li>oo</li>    <li>gg</li>
         <li>dd</li>
         <li>kk</li>
         <li>oo</li>
         <li>gg</li>
         <li>dd</li>
         <li>kk</li>
         <li>oo</li>    <li>gg</li>
         <li>dd</li>
         <li>kk</li>
         <li>oo</li>    <li>gg</li>
         <li>dd</li>
         <li>kk</li>
         <li>oo</li>
         <li>gg</li>
         <li>dd</li>
         <li>kk</li>
         <li>oo</li>    <li>gg</li>
         <li>dd</li>
         <li>kk</li>
         <li>oo</li>    <li>gg</li>
         <li>dd</li>
         <li>kk</li>
         <li>oo</li>
       </ul>
     </div>
</template>

<script>
  import NavBar from 'components/common/navbar/Navbar'
  // 上面公共组件放一起
  import {getHomeMultidata,getHomeGoods} from "network/home";
  // 公共方法放一起,子组件放一起
  import HomeSwiper from "./childComps/HomeSwiper"
  import HomeRecommendView from "./childComps/HomeRecommendView"
  import FeatureView from "./childComps/FeatureView"
  import tabControl from "components/content/tabControl/tabControl"
  import GoodsList from "components/content/goods/GoodsList"
  import GoodsListItem from "components/content/goods/GoodsListItem"
  import Scroll from "components/common/scroll/Scroll"
  import backTop from "components/content/backTop/backTop"
  // 导入函数
  import {debounce} from "common/utils";
  import {itemListMixin} from "common/mixin";

  export default {
     name: "Home",
    mixins:[itemListMixin],
     components:{
       HomeSwiper,backTop,
          NavBar,HomeRecommendView,FeatureView,tabControl,GoodsList,GoodsListItem,Scroll
      },data(){
        return{
           banners : [],
          recommends: [],
          goods:{
             new:{page:0,list:[]},
             pop:{page:0,list:[]},
             sell:{page:0,list:[]}
          },
          currentType:'pop',
          isShowBacktop:false,
          tabOffsetTop: 0,
          isTabFixed :false,
          saveY:0,
        }
    },
    computed:{
        showgoods(){
          return this.goods[this.currentType].list
        }
    },
    activated(){
      console.log("activated" + this.saveY);
      this.$refs.scrollzujian.scronllTo(0,this.saveY,500);
       //this.$refs.scrollzujian.refresh()
    },
    deactivated(){
       this.saveY = this.$refs.scrollzujian.scroll.y;
      console.log("离开的y: "+this.$refs.scrollzujian.scroll.y);;
        this.$bus.$off("itemimageload",this.itemImgListener)
      //离开时取消监听
    },
    created() {

      this.getHomeMultidata()
             //下面是请求商品数据
         , this.getHomeGoods('new')
         , this.getHomeGoods('pop')
        , this.getHomeGoods('sell')
    },

    methods:{
      swiperimageload(){
        this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
        console.log("this.tabOffsetTop "+this.tabOffsetTop)
        //只要轮播图加载完这边就能获取到正确的到顶部的高度值
      },
      loadmore(){
        console.log("home在加载");
        this.getHomeGoods(this.currentType)
       // this.$refs.scrollzujian.scroll.refresh()
      },
    /*  debounce(fun,delay){
        let timer = null;
        return function (...args) {
          if(timer)clearTimeout(timer)
          timer = setTimeout(()=>{
             fun.apply(this,args)
          },delay)
        }
      },*/
      contentscroll(position){
        this.isShowBacktop = (-position.y) > 1000

        this.isTabFixed = (-position.y) > this.tabOffsetTop
        //如果大于579px说明可以吸顶了。给tabcontrol绑定样式
      }
       ,
      backclick(){
        this.$refs.scrollzujian.scronllTo(0,0,500);
      },
      /**
       *事件监听的方法
       * @param type
       */
      tabClick(index){
        console.log(index);
        switch (index) {
          case 0:this.currentType = 'pop'
                break;
          case 1:this.currentType = 'new'
            break;
          case 2:this.currentType = 'sell'
            break;
        }
        this.$refs.tabcontrol1.currentindex = index
        this.$refs.tabcontrol2.currentindex = index
      },
      /**
       *网络请求的方法
       * @param type
       */
       getHomeGoods(type){
         console.log("进来了gethomegoods 的类型："+type);
         //2、请求商品数据
          const page = this.goods[type].page+1
            getHomeGoods(type,page).then(res=>{
            //  console.log(".///"+JSON.stringify(res));
               // for(var i in res.data){
                this.goods[type].list.push(...res.data)
            //  }
              this.goods[type].page+=1;
                this.$refs.scrollzujian.finishPulling()//刷下
         })
       },
      getHomeMultidata(){
        //1、请求多个数据 ，轮播图数据和其他数据
        getHomeMultidata().then(res=>{
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list
          //因为res是局部变量，出了作用域就没了，所有要保存起来
          //这里的this往上找发现created(){}里面有this，就是当前组件对象
        })
      }
    }
  }
</script>

<style scoped>
  .tabcontrol1{
    position: relative;
    z-index: 9;
  }
  .fixed{
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  }
  #home{
    /*margin-top: 44px;
    因为下面的.content设置了top 44px ,有定位了，所以这里没必要在设置了*/
    position: relative;
    height: 100vh;
  }
.home-nav{
   background-color: var(--color-tint);
    color: #fff;
   /* position: fixed;
    left: 0;
    right: 0;
    top: 0;z-index: 9;*/

}

  .content{
/*    margin-top: 44px;
    height: calc(100% - 93px);*/
    overflow: hidden;
    position: absolute;
    top: 44px;bottom: 49px;
    background-color: #fff;
    /*还需要给个背景颜色，因为脱标了*/
    /*这里的top的高度要和整个home的高度一样，因为不能被购物街挡住*/
    left: 0;
    right: 0;
  }
</style>
