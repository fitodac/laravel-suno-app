import { Layout } from '@/layouts/admin/executive/Layout'
import { PageContent } from '@/components'
import { t } from '@/i18n'
import { Link } from '@inertiajs/react'

interface Props {
	songs: any
	available_slots: number
}

const Page = ({ songs, available_slots }: Props) => {
	// console.log('songs', songs)
	// console.log('available_slots', Array.from({ length: available_slots }))

	return (
		<PageContent className="max-w-screen-xl mx-auto">
			<div className="">
				<h3 className="">Mis canciones</h3>

				<div className="space-y-3 mt-5">
					{songs &&
						songs.map((song: any) => (
							<Link
								key={`song-slot-${song.id}`}
								href={route('song.edit', { song })}
								className="border border-default-500 h-24 grid place-content-center aspect-video rounded-xl"
							>
								Song {song.id}
							</Link>
						))}

					{available_slots > 0 &&
						Array.from({ length: available_slots }).map((_, idx) => (
							<Link
								key={`slot-${idx}`}
								href={route('song.create')}
								className="text-foreground-500 border border-dashed border-default-500 h-24 grid place-content-center aspect-video rounded-xl"
							>
								<span className="">New song</span>
							</Link>
						))}
				</div>
			</div>
		</PageContent>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Dashboard')) }} />
)

export default Page
