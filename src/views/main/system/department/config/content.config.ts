const contentConfig = {
    pageName: 'department',
    header: {
        title: '部门列表',
        btnTitle: '新建部门'
    },
    propsList:[
        { type: 'selection', label: '选择', width: '80px' },
        { type: 'index', label: '序号', width: '80px' },

        { type: 'normal', prop: 'name', label: '部门名称', width: '150px' },
        { type: 'normal', prop: 'leader', label: '部门领导', width: '150px' },
        { type: 'normal', prop: 'parentId', label: '上级部门', width: '150px' },

        // 自定义插槽定制（通用）
        // { type: 'custom', label: '自定义插槽1', prop: 'leader', width: '150px', slotName: 'leader'},
        // { type: 'custom', label: '自定义插槽2', prop: 'parentId', width: '150px', slotName: 'parent'},

        { type: 'time', prop: 'createAt', label: '创建时间' },
        { type: 'time', prop: 'updateAt', label: '更新时间' },

        { type: 'handler', label: '操作', width: '180px' },
    ]
}

export default contentConfig