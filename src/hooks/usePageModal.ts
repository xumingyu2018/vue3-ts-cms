import type PageModal from "@/components/page-modal/page-modal.vue"
import { ref } from "vue"

export function usePageModal() {
    const modalRef = ref<InstanceType<typeof PageModal>>()

    // 新增功能
    function handleNewDataClick() {
        modalRef.value?.setDialogVisible()
    }
    // 编辑功能
    function handleEditDataClick(itemData: any) {
        modalRef.value?.setDialogVisible(false, itemData)
    }

    return {
        modalRef,
        handleEditDataClick,
        handleNewDataClick
    }
}