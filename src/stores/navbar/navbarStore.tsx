import { create } from 'zustand'

interface NavbarStore {
	link: string
	setLink: (newHref: string) => void
}

export const useNavbarStore = create<NavbarStore>((set) => ({
	link: '/',
	setLink: (link: string) => set({ link }),
}))
