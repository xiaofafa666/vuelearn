import {request} from './request'

export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

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
