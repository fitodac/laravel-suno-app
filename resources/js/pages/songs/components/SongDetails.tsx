import { ScrollShadow, Divider } from '@nextui-org/react'
import { usePage } from '@inertiajs/react'

import type { Song } from '@/types/song'

interface Props {}

export const SongDetails = ({}: Props) => {
	const { props } = usePage() as { props: { song: Song } }

	const { song } = props

	return (
		<div className="space-y-1.5 select-none">
			<ScrollShadow className="w-full h-[400px]">
				{song.title && (
					<>
						<div>
							<small className="text-foreground-500 font-medium">Título</small>
							<div className="min-h-4">{song.title}</div>
						</div>

						<Divider className="mt-2" />
					</>
				)}

				{song.music_style && (
					<>
						<div>
							<small className="text-foreground-500 font-medium">Género</small>
							<div className="min-h-4">{song.music_style}</div>
						</div>

						<Divider className="mt-2" />
					</>
				)}

				{song.mood && (
					<>
						<div>
							<small className="text-foreground-500 font-medium">Mood</small>
							<div className="min-h-4">{song.mood}</div>
						</div>

						<Divider className="mt-2" />
					</>
				)}

				{song.artist_gender && (
					<>
						<div>
							<small className="text-foreground-500 font-medium">Artista</small>
							<div className="min-h-4">{song.artist_gender}</div>
						</div>

						<Divider className="mt-2" />
					</>
				)}

				{song.tone > 0 && (
					<>
						<div>
							<small className="text-foreground-500 font-medium">Tono</small>
							<div className="min-h-4">{song.tone}</div>
						</div>

						<Divider className="mt-2" />
					</>
				)}

				{song.tempo > 0 && (
					<>
						<div>
							<small className="text-foreground-500 font-medium">Ritmo</small>
							<div className="min-h-4">{song.tempo}</div>
						</div>

						<Divider className="mt-2" />
					</>
				)}

				{song.song_for && (
					<>
						<div>
							<small className="text-foreground-500 font-medium">
								¿Para quién es la canción?
							</small>
							<div className="min-h-4 text-xs italic">{song.song_for}</div>
						</div>

						<Divider className="mt-2" />
					</>
				)}

				{song.song_from && (
					<>
						<div>
							<small className="text-foreground-500 font-medium">
								¿De parte de quién es la canción?
							</small>
							<div className="min-h-4 text-xs italic">{song.song_from}</div>
						</div>

						<Divider className="mt-2" />
					</>
				)}

				{song.occasion && (
					<>
						<div>
							<small className="text-foreground-500 font-medium">
								¿Cuál es la ocasión?
							</small>
							<div className="min-h-4 text-xs italic">{song.occasion}</div>
						</div>

						<Divider className="mt-2" />
					</>
				)}

				{song.details && (
					<>
						<div>
							<small className="text-foreground-500 font-medium">
								Detalles
							</small>
							<div className="min-h-4">{song.details}</div>
						</div>
					</>
				)}

				<div className="h-10"></div>
			</ScrollShadow>
		</div>
	)
}
