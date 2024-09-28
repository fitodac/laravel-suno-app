import { Button, Divider, Input, Textarea, cn } from '@nextui-org/react'
import { useForm, usePage } from '@inertiajs/react'
import { FormEvent } from 'react'

import type { Song } from '@/types/song'

export const Step3 = () => {
	const { props } = usePage() as { props: { song: Song } }
	const { song } = props

	const { data, setData, patch, processing } = useForm({
		song_for: song.song_for ?? '',
		song_from: song.song_from ?? '',
		occasion: song.occasion ?? '',
		step: 4,
	})

	const submit = (e: FormEvent) => {
		e.preventDefault()

		patch(route('song.update', { song }), {
			onSuccess: () => {
				console.log('success')
			},
			onError: (errors) => console.log(errors),
		})
	}

	const { patch: back } = useForm({ step: 2 })

	return (
		<form onSubmit={submit} className="w-1/2 space-y-8">
			<div className="space-y-2">
				<h3 className="font-semibold">Los básicos</h3>

				<p className="text-foreground-700 text-sm">
					Mientras más detalles incluyas, más perzonalizada será tu canción.
				</p>
				<p className="text-foreground-700 text-sm">
					Cualquier cosa que escribas aquí podría terminar en la canción. Si no
					quieres que algo se incluya,por favor, no lo pongas aquí.
				</p>
			</div>

			<div className="space-y-4">
				<div>
					<Textarea
						label="¿Para quién es la canción?"
						defaultValue={data.song_for}
						maxLength={125}
						isDisabled={processing}
						onValueChange={(val) => setData('song_for', val)}
					/>

					<div className="text-xs pt-1 flex justify-end">
						{data.song_for.length}/125
					</div>
				</div>

				<div>
					<Textarea
						label="¿De parte de quién es la canción?"
						defaultValue={data.song_from}
						maxLength={125}
						isDisabled={processing}
						onValueChange={(val) => setData('song_from', val)}
					/>

					<div className="text-xs pt-1 flex justify-end">
						{data.song_from.length}/125
					</div>
				</div>

				<div>
					<Textarea
						label="¿Cuál es la ocasión?"
						value={data.occasion}
						maxLength={125}
						isDisabled={processing}
						onValueChange={(val) => setData('occasion', val)}
					/>

					<div className="text-xs pt-1 flex justify-end">
						{data.occasion.length}/125
					</div>
				</div>
			</div>

			<Divider />

			<div className="flex justify-between">
				<div>
					<Button
						variant="flat"
						isDisabled={processing}
						onPress={() => {
							back(route('song.update', { song }))
						}}
					>
						Atrás
					</Button>
				</div>

				<div>
					<Button color="primary" type="submit" isDisabled={processing}>
						Siguiente
					</Button>
				</div>
			</div>
		</form>
	)
}

const characterCounter = (value: string) => {
	return `${value.length}/125`
}
