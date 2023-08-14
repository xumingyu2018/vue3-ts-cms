import useLoginStore from '@/store/login/login'

function usePermission(pageName: string, handleName: string) {
  const queryPermission = `${pageName}:${handleName}`
  const { permissions } = useLoginStore()
  
  // !!将字符串转换为布尔值
  return !!permissions.find((item) => item.includes(queryPermission))
}

export default usePermission
