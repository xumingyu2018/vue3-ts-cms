const modalConfig = {
    header: {
        newTitle: '新建部门',
        editTitle: '编辑部门',
    },
    pageName: 'department',
    formItems: [
        {
            type: 'input',
            prop: 'name',
            label: '部门名称',
            placeholder: '请输入部门名称'
        },
        {
            type: 'input',
            prop: 'leader',
            label: '部门领导',
            placeholder: '请输入查询的领导名称',
            initialValue: '张三'
        },
        {
            type: 'select',
            prop: 'parentId',
            label: '上级部门',
            options: []
        }
    ]
}

export default modalConfig