const contentConfig = {
    pageName: 'category',
    header: {
      title: '分类列表',
      btnTitle: '新建分类'
    },
    propsList: [
      { type: 'selection', label: '选择', width: '80px' },
      { type: 'index', label: '序号', width: '80px' },
      { type: 'normal', prop: 'id', label: 'id', width: '180px' },
      { type: 'normal', prop: 'name', label: '商品类别', width: '180px' },
      { type: 'time', prop: 'createAt', label: '创建时间' },
      { type: 'time', prop: 'updateAt', label: '更新时间' },
      { type: 'handler', label: '操作', width: '180px' }
    ]
  }

export default contentConfig