// imports
import axios from "axios";

// settings axios
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    data: null,
    withCredentials: true,
    headers: {'API-KEY': '20af6c8d-612b-4369-bc4f-11b94638fe2f'}
})

// functions
export const requestsAPI = {
    getUsers: (currentPage: number, pageSize: number) => instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data),
    setAuth: () => instance.get(`auth/me`).then(res => res.data),
    followFriend: (id: number) => instance.post(`follow/${id}`),
    unfollowFriend: (id: number) => instance.delete(`follow/${id}`),
}

export const profileAPI = {
    getProfile: (userId: number) => instance.get(`profile/${userId}`).then(res => res.data),
    getStatus: (userId: number) => instance.get(`profile/status/${userId}`),
    updateStatus: (status: string) => instance.put(`profile/status`, {status: status}),
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}