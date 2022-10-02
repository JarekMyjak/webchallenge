import create from 'zustand';
import axios from 'axios'
import { unstable_batchedUpdates } from 'react-dom';

type User = {
    "username": "user42833142",
    "email": "jarekmyjak99@gmail.com",
    "name": "JarekMyjak",
    "role": "USER",
}

interface userState {
    user: {} | undefined,
    setUser: (test: any) => void
}

export const useUser = create<userState>(set => ({
    //   count: 1,
    //   inc: () => set(state => ({ count: state.count + 1 })),

    user: undefined,
    setUser: (test) => set({ user: { name: test.toString() } })

}))

