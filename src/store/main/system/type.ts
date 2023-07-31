export interface IUser {
    id: number
    name: string
    realname: string
    cellphone: number
    enable: number
    departmentId: number
    roleId: number
    createAt: string
    updateAt: string
}
  
export interface ISystemState {
    usersList: IUser[]
    usersTotalCount: number

    // 抽取公共页面数据
    pageList: any[]
    pageTotalCount: number
}