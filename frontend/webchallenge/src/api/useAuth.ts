import create from 'zustand';
import axios from 'axios'
import { unstable_batchedUpdates } from 'react-dom';
import { persist } from 'zustand/middleware'

interface user {
    name: string,
    avatar: string,
    role: string,
}

interface userState {
    user: user | undefined,
    setUser: (user: user) => void,
    token: string | undefined,
    setToken: (token: string) => void
}

export const useUser = create<userState>(set => ({
    user: undefined,
    setUser: (user) => set({ user }),
    token: undefined,
    setToken: (token) => set({ token }),
}))

