import { type PropsWithChildren, useEffect } from 'react'
import { Head } from '@inertiajs/react'
import { useMainStore } from '@/store'
import { useColorMode, useWindowWidth } from '@/hooks'
import { Sidebar, Header } from './components'

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
		} else {
			setSidebarOpen(false)
		}
	}, [windowWidth])

	return (
		<>
			<Head title={pageTitle} />

			<main className="bg-background min-h-screen">
				<Header />

				<div className="flex ">
					<Sidebar />

					<div className="flex-1">{children}</div>
				</div>
			</main>
		</>
	)
}
