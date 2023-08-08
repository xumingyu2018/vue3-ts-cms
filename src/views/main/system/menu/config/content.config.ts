const contentConfig = {
    pageName: 'menu',
    header: {
      title: '菜单列表',
      btnTitle: '新建菜单'
    },
    propsList: [
      // 若要实现树形数据，就不能加type，会冲突
      { prop: 'name', label: '菜单名称', width: '180px' },
      { prop: 'type', label: '级别', width: '120px' },
      { prop: 'url', label: '菜单url', width: '150px' },
      { prop: 'icon', label: '菜单icon', width: '180px' },
      { prop: 'sort', label: '排序', width: '120px' },
      { prop: 'permission', label: '权限', width: '150px' },
      { type: 'time', prop: 'createAt', label: '创建时间' },
      { type: 'time', prop: 'updateAt', label: '更新时间' },
      { type: 'handler', label: '操作', width: '150px'}
    ],
    childrenTree: {
      rowKey: 'id',
      treeProps: {
        children: 'children'
      }
    }
  }

export default contentConfig