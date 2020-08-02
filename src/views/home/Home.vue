<template>
     <div id="home">
       <!--这个首页是唯一的直接用id最好-->
       <NavBar class="home-nav">
         <div slot="center">购物街</div>
         <!--指定替换中间的插槽-->
       </NavBar>
      <HomeSwiper :banners="banners"></HomeSwiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
     <feature-view></feature-view>
       <tab-control :titles = "['流行','新款','精选']"
         @tabClick="tabClick"     class="tab-control"></tab-control>
      <goods-list :goods="showgoods"></goods-list>
       <!--因为这里currenttype是响应式的，你点击改变了所以数据也会变-->
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

  export default {
     name: "Home",
     components:{
       HomeSwiper,
          NavBar,HomeRecommendView,FeatureView,tabControl,GoodsList,GoodsListItem
      },data(){
        return{
           banners : [],
          recommends: [],
          goods:{
             new:{page:0,list:[]},
             pop:{page:0,list:[]},
             sell:{page:0,list:[]}
          },
          currentType:'pop'
        }
    },
    computed:{
        showgoods(){
          return this.goods[this.currentType].list
        }
    },
    created() {
           this.getHomeMultidata()
             //下面是请求商品数据
         , this.getHomeGoods('new')
         , this.getHomeGoods('pop')
        , this.getHomeGoods('sell')
    },
    methods:{
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
              console.log(".///"+JSON.stringify(res));
               // for(var i in res.data){
                this.goods[type].list.push(...res.data)
                 // this.goods[type].list.push(res.data[i])
            //  }
              this.goods[type].page+=1;
         })
       },
      getHomeMultidata(){
        //1、请求多个数据 ，轮播图数据和其他数据
        getHomeMultidata().then(res=>{
          //   console.log("打印下 "+res.data.success);//true
          //    console.log("打印下 "+res.data.returnCode);//SUCCESS
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
  #home{
    margin-top: 44px;
  }
.home-nav{
   background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
}
  .tab-control{
    z-index: 9;
    position: sticky;
    /*移动端一般都支持这个属性，到达一定高度的时候自动变成fixed*/
    top: 44px;
  }
</style>
