import hyRequest from "@/service";

// 获取顶部卡片的数据
export function getAmountListData() {
    return hyRequest.get({
        url: '/goods/amount/list'
    })
}

// 获取饼图的数据
export function getGoodsCategoryCount() {
    return hyRequest.get({
        url: '/goods/category/count'
    })
}