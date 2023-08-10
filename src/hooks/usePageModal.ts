import type PageModal from "@/components/page-modal/page-modal.vue"
import { ref } from "vue"

type callbackType = (item: any) => void
export function usePageModal(editCallback?: callbackType) {
    const modalRef = ref<InstanceType<typeof PageModal>>()

    // 新增功能
    function handleNewDataClick() {
        modalRef.value?.setDialogVisible()
    }
    // 编辑功能
    function handleEditDataClick(itemData: any) {
        modalRef.value?.setDialogVisible(false, itemData)
        // 回显角色管理中权限菜单树
        if(editCallback) editCallback(itemData)
    }

    return {
        modalRef,
        handleEditDataClick,
        handleNewDataClick
    }
}