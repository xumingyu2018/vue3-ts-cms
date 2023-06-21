// export const BASE_URL1 = 'http://152.136.185.210:5000'
// export const TIME_OUT1 = 10000

console.log(import.meta.env.DEV);
console.log(import.meta.env.PROD);
console.log(import.meta.env.SSR);

let BASE_URL1 = ''
if(import.meta.env.PROD) {
    BASE_URL1 = 'http://codercba.prod:8000'
} else {
    BASE_URL1 = 'http://codercba.dev:8000'
}

export const TIME_OUT = 10000
export { BASE_URL1 }