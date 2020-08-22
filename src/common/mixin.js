import {debounce} from "./utils";

export const itemListMixin = {
    mounted(){
      console.log("我是mixin的混入");
      this.refresh = debounce(this.$refs.scrollzujian.refresh,100)
      this.itemImgListener = ()=>{
        this.refresh()
      }//把回调函数赋给一个变量
      this.$bus.$on("itemimageload",this.itemImgListener)
    },data(){
        return{
          itemImgListener:null,
          refresh : null
       }
    }
}
