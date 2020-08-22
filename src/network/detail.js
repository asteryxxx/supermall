import {requestziji} from "./request"

export  function  getDetail() {
  return requestziji({
    url: '/detail'
  })
}
export function getRate(){
  console.log("getrate");
  return requestziji({
    url: "/rate"
  })
}
export function getRecommends(){
  return requestziji({
    url: "/recommends"
  })
}
export class Goods{
   constructor(itemInfo , columns ,services){
     this.title = itemInfo[5].title
     this.desc = itemInfo[0].desc
     this.newPrice = itemInfo[4].Price
     this.oldPrice = itemInfo[1].oldPrice
     this.discount = itemInfo[3].discountDesc
     this.columns = columns
     this.services = services
   }
}
export  class Shop{
  constructor(shopInfo){
    this.logo = shopInfo[6].shopLogo
    this.name = shopInfo[5].name
    this.fans = shopInfo[0].cFans
    this.sells = shopInfo[1].cSells
    this.score = shopInfo[4].score
    this.goodscount = shopInfo[2].cGoods
  }
}
/*
class Person{
  constructor(name,age){
    this.name=name;
    this.age=age
  }
}
const p = new Person('zhh',18)*/
