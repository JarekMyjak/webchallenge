import create from 'zustand';
import axios from 'axios'
import { unstable_batchedUpdates } from 'react-dom';
import { devtools, persist } from 'zustand/middleware'

interface user {
    name: string,
    avatar: string,
    role: string,
}

interface userState {
    user: user | undefined,
    setUser: (user: user) => void,
    logout: () => void,
    token: string | undefined,
    setToken: (token: string) => void
}

export const useUser = create<userState>()(
    devtools(
        persist(
            (set) => ({
                user: undefined,
                setUser: (user: user) => set({ user }),
                logout: () => set({ user: undefined}),
                token: undefined,
                setToken: (token: string) => set({ token }),
            }),
            {
                name: 'auth-state'
            }
        )))

