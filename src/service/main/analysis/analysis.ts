import hyRequest from "@/service";

// 获取顶部卡片的数据
export function getAmountListData() {
    return hyRequest.get({
        url: '/goods/amount/list'
    })
}

// 获取饼图、玫瑰图分类商品数量
export function getGoodsCategoryCount() {
    return hyRequest.get({
        url: '/goods/category/count'
    })
}

// 获取折线图商品销量
export function getGoodsCategorySale() {
    return hyRequest.get({
        url: '/goods/category/sale'
    })
} 

// 获取柱状图商品收藏数量
export function getGoodsCategoryFavor() {
    return hyRequest.get({
        url: '/goods/category/favor'
    })
} 

// 获取地图数据
export function getGoodsAddressSale() {
    return hyRequest.get({
        url: '/goods/address/sale'
    })
}