const contentConfig = {
    pageName: 'goods',
    header: {
      title: '商品列表',
      btnTitle: '新建商品'
    },
    propsList: [
      { type: 'selection', label: '选择', width: '80px' },
      { type: 'index', label: '序号', width: '80px' },

      { type: 'normal', prop: 'name', label: '商品名称', width: '180px' },
      { type: 'normal', prop: 'desc', label: '商品描述', width: '180px' },
      { type: 'normal', prop: 'inventoryCount', label: '库存', width: '90px' },
      { type: 'normal', prop: 'oldPrice', label: '原价', width: '90px' },
      { type: 'normal', prop: 'newPrice', label: '现价', width: '90px' },
      
      { type: 'custom', label: '图片', prop: 'imgUrl', width: '150px', slotName: 'imgUrl'},

      { type: 'time', prop: 'createAt', label: '创建时间', width: '180px'},
      { type: 'time', prop: 'updateAt', label: '更新时间', width: '180px' },
      { type: 'handler', label: '操作', width: '180px' }
    ]
  }

export default contentConfig