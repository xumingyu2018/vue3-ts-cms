import hyRequest from "@/service";

// 获取顶部卡片的数据
export function getAmountListData() {
    return hyRequest.get({
        url: '/goods/amount/list'
    })
}

// 获取饼图分类商品数量
export function getGoodsCategoryCount() {
    return hyRequest.get({
        url: '/goods/category/count'
    })
}

// 获取玫瑰图商品销量
export function getGoodsCategorySale() {
    return hyRequest.get({
        url: '/goods/category/sale'
    })
}