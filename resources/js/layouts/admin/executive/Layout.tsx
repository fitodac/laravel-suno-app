import { type PropsWithChildren, useEffect } from 'react'
import { Head, usePage } from '@inertiajs/react'
import { useMainStore } from '@/store'
import { useColorMode, useWindowWidth } from '@/hooks'
import { Header, Sidebar } from './components'

interface Props extends PropsWithChildren {
	pageTitle: string
}

export const Layout = ({ children, pageTitle }: Props) => {
	const { sidebarOpen, setSidebarOpen } = useMainStore()
	const { windowWidth } = useWindowWidth()
	useColorMode()

	useEffect(() => {
		if (windowWidth > 768 && !sidebarOpen) {
			setSidebarOpen(true)
		}
	}, [windowWidth])

	return (
		<>
			<Head title={pageTitle} />

			<main className="bg-background min-h-screen">
				<Header />

				<div className="flex justify-center __min-h-svh">
					<Sidebar />

					<div className="flex-1">{children}</div>
				</div>
			</main>
		</>
	)
}
