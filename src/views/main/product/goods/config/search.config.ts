const searchConfig = {
    formItems: [
        {
            type: 'input',
            prop: 'id',
            label: 'id',
            placeholder: '请输入查询的商品id',
        },
        {
            type: 'input',
            prop: 'name',
            label: '商品名称',
            placeholder: '请输入查询的商品名称',
        },
        {
            type: 'input',
            prop: 'desc',
            label: '商品描述',
            placeholder: '请输入查询的商品描述',
        },
        {
            type: 'date-picker',
            prop: 'createAt',
            label: '创建时间'
        }
    ]
}

export default searchConfig