const searchConfig = {
    formItems: [
        {
            type: 'input',
            prop: 'id',
            label: 'id',
            placeholder: '请输入查询的商品类别id',
        },
        {
            type: 'input',
            prop: 'name',
            label: '类别名称',
            placeholder: '请输入查询的商品类别名称',
        },
        {
            type: 'date-picker',
            prop: 'createAt',
            label: '创建时间'
        }
    ]
}

export default searchConfig