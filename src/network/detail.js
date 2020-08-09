import {requestziji} from "./request"

export  function  getDetail() {
  return requestziji({
    url: '/detail'
    /*params:{
      iid
    }*/
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
/*
class Person{
  constructor(name,age){
    this.name=name;
    this.age=age
  }
}
const p = new Person('zhh',18)*/
