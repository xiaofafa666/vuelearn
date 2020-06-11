import {request} from './request'

export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function getRecommend(){
    return request({
        url:'/recommend',
    })
}

//商品信息
export class Goods{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.oldPrice = itemInfo.oldPrice;
        this.lowNowPrice = itemInfo.lowNowPrice;
        this.price = itemInfo.price;
        this.discountBgColor = itemInfo.discountBgColor;
        this.discountDesc = itemInfo.discountDesc;
    
        this.columns = columns;
    
        this.services = services;
        
    }
}
//关于店铺信息
export class Goodsshop{
    constructor(shopInfo){
        this.shoplogo = shopInfo.shopLogo;
        this.shopname = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
        this.shopurl =shopInfo.shopUrl
    }
}
//商品参数信息
export class Goodsparams{
    constructor(itemParams){
        this.rule = itemParams.rule.tables;
        this.info = itemParams.info.set;
    }
}


