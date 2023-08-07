const contentConfig = {
    pageName: 'menu',
    header: {
      title: '菜单列表',
      btnTitle: '新建菜单'
    },
    propsList: [
      { type: 'normal', prop: 'name', label: '菜单名称', width: '180px' },
      { type: 'normal', prop: 'type', label: '级别', width: '120px' },
      { type: 'normal', prop: 'url', label: '菜单url', width: '150px' },
      { type: 'normal', prop: 'icon', label: '菜单icon', width: '180px' },
      { type: 'normal', prop: 'sort', label: '排序', width: '120px' },
      { type: 'normal', prop: 'permission', label: '权限', width: '150px' },
      { type: 'time', prop: 'createAt', label: '创建时间' },
      { type: 'time', prop: 'updateAt', label: '更新时间' },
      { type: 'handler', label: '操作', width: '150px'}
    ]
  }

export default contentConfig