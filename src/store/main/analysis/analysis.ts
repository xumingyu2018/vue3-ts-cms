import { getAmountListData, getGoodsAddressSale, getGoodsCategoryCount, getGoodsCategoryFavor, getGoodsCategorySale } from "@/service/main/analysis/analysis";
import { defineStore } from "pinia";

interface IAnalysisState {
    amountList: any[],
    goodsCategoryCount: any[],
    goodsCategorySale: any[],
    goodsCategoryFavor: any[],
    goodsAddressSale: any[]
}
const useAnalysisStore = defineStore('analysis', {
    state: (): IAnalysisState => ({
        amountList: [],
        goodsCategoryCount: [],
        goodsCategorySale: [],
        goodsCategoryFavor: [],
        goodsAddressSale: []
    }),
    actions: {
        async fetchAnalysisDataAction() { 
            // 顶部卡片数据
            const amountResult = await getAmountListData()
            this.amountList = amountResult.data

            // 获取饼图、玫瑰图数据
            const goodsCountResult = await getGoodsCategoryCount()
            this.goodsCategoryCount = goodsCountResult.data

            // 获取折线图数据
            const goodsSaleResult = await getGoodsCategorySale()
            this.goodsCategorySale = goodsSaleResult.data

            // 获取柱状图数据
            const goodsFavorResult = await getGoodsCategoryFavor()
            this.goodsCategoryFavor = goodsFavorResult.data

            // 获取地图数据
            const goodsAddressSaleResult = await getGoodsAddressSale()
            this.goodsAddressSale = goodsAddressSaleResult.data
            console.log(this.goodsAddressSale);
        },
    }
})

export default useAnalysisStore