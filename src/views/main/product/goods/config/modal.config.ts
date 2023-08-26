const modalConfig = {
    pageName: 'goods',
    header: {
      newTitle: '新建商品',
      editTitle: '编辑商品'
    },
    formItems: [
      {
        type: 'input',
        label: '商品名称',
        prop: 'name',
        placeholder: '请输入商品名称'
      },
      {
        type: 'input',
        label: '商品描述',
        prop: 'desc',
        placeholder: '请输入商品描述'
      },
      {
        type: 'input',
        label: '库存',
        prop: 'inventoryCount',
        placeholder: '请输入商品库存'
      },
      {
        type: 'input',
        label: '原价',
        prop: 'oldPrice',
        placeholder: '请输入商品原价'
      },
      {
        type: 'input',
        label: '现价',
        prop: 'newPrice',
        placeholder: '请输入商品现价'
      },
      // 自定义类型
      {
        type: 'custom',
        slotName: 'upload'
      }
    ]
  }
  
  export default modalConfig
  