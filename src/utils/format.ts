import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export function formatUTC(utcString: string, format = 'YYYY-MM-DD HH:mm:ss') {
    // utcOffset东八区偏移8小时
    return dayjs.utc(utcString).utcOffset(8).format(format)
}  