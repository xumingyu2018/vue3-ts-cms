enum CacheType {
  local = 'local',
  session = 'session'
}

class MyCache {
  storage: Storage

  // 判断是localStorage还是sessionStorage
  constructor(type: CacheType) {
    this.storage = type === CacheType.local ? localStorage : sessionStorage
  }

  setCache(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    this.storage.removeItem(key)
  }

  clearCache() {
    this.storage.clear()
  }
}

const localCache = new MyCache(CacheType.local)
const sessionCache = new MyCache(CacheType.session)

export { localCache, sessionCache }
