import request from '@/utils/request'
import { config } from '@/config/config.local'

interface userLogin {
    username: string,
    password: string
}
export default {
    async login(data: userLogin) {
        return request(`${config.baseApi}/login`, {
            data
        })
    }
}