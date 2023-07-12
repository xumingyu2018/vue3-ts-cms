let BASE_URL1 = ''
if(import.meta.env.PROD) {
    BASE_URL1 = 'http://121.37.196.89:8880'
} else {
    BASE_URL1 = 'http://121.37.196.89:8880'
}

export const TIME_OUT1 = 10000
export { BASE_URL1 }