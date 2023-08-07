import type PageContent from "@/components/page-content/page-content.vue"
import { ref } from "vue"

export function usePageContent() {
    const contentRef = ref<InstanceType<typeof PageContent>>()
    // 搜索功能
    function handleQueryClick(searchInfo: any) {
        console.log(searchInfo);
        contentRef.value?.fetchPageListData(searchInfo)
    } 
    // 重置功能
    function handleResetClick() {
        contentRef.value?.fetchPageListData()
    }

    return {
        contentRef,
        handleQueryClick,
        handleResetClick
    }
}