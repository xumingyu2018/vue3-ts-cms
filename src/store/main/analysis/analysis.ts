import { getAmountListData, getGoodsCategoryCount } from "@/service/main/analysis/analysis";
import { defineStore } from "pinia";

interface IAnalysisState {
    amountList: any[],
    goodsCategoryCount: any[]
}
const useAnalysisStore = defineStore('analysis', {
    state: (): IAnalysisState => ({
        amountList: [],
        goodsCategoryCount: []
    }),
    actions: {
        async fetchAnalysisDataAction() { 
            // 顶部卡片数据
            const amountResult = await getAmountListData()
            this.amountList = amountResult.data

            // 获取饼图数据
            const goodsResult = await getGoodsCategoryCount()
            this.goodsCategoryCount = goodsResult.data
        },
    }
})

export default useAnalysisStore