import { getAmountListData, getGoodsCategoryCount, getGoodsCategorySale } from "@/service/main/analysis/analysis";
import { defineStore } from "pinia";

interface IAnalysisState {
    amountList: any[],
    goodsCategoryCount: any[],
    // goodsCategorySale: any[]
}
const useAnalysisStore = defineStore('analysis', {
    state: (): IAnalysisState => ({
        amountList: [],
        goodsCategoryCount: [],
        // goodsCategorySale: []
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
            // const goodsSaleResult = await getGoodsCategorySale()
            // this.goodsCategorySale = goodsSaleResult.data
        },
    }
})

export default useAnalysisStore