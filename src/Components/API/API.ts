// imports
import axios from "axios";

// settings axios
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    data: null,
    withCredentials: true,
    headers: {'API-KEY': 'bb507bdb-8e96-4353-8e86-10a14bdf8963'}
})

// functions
export const requestsAPI = {
    getUsers: (currentPage: number, pageSize: number) => instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data),
    setProfile: (userId: string) => instance.get(`profile/${userId}`).then(res => res.data),
    setAuth: () => instance.get(`auth/me`).then(res => res.data),
    followFriend: (id: number) => instance.post(`follow/${id}`),
    unfollowFriend: (id: number) => instance.delete(`follow/${id}`)

}