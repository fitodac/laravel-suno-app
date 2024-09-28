import { Slider, Button, ButtonGroup, Divider, cn } from '@nextui-org/react'
import { useForm, usePage } from '@inertiajs/react'
import { FormEvent, useState } from 'react'

import type { Song } from '@/types/song'

export const Step2 = () => {
	const { props } = usePage() as { props: { song: Song } }
	const { song } = props

	const [errors, setErrors] = useState({ music_style: null })

	const { data, setData, patch, processing, progress } = useForm({
		artist_gender: song.artist_gender ?? 'Mujer',
		tone: song.tone ?? 0,
		tempo: song.tempo ?? 0,
		step: 3,
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

	const { patch: back } = useForm({ step: 1 })

	return (
		<form onSubmit={submit} className="w-1/2 space-y-8">
			<h3 className="font-semibold">Elige el artista</h3>

			<div className="">
				<ButtonGroup isDisabled={processing}>
					<Button
						color="primary"
						className={cn(data.artist_gender !== 'Mujer' && 'opacity-60')}
						onPress={() => setData('artist_gender', 'Mujer')}
					>
						Mujer
					</Button>
					<Button
						color="primary"
						className={cn(data.artist_gender !== 'Hombre' && 'opacity-60')}
						onPress={() => setData('artist_gender', 'Hombre')}
					>
						Hombre
					</Button>
				</ButtonGroup>
			</div>

			<div className="space-y-1">
				<p className="text-sm font-semibold">Tono</p>

				<Slider
					size="lg"
					step={10}
					color="primary"
					endContent="Bajo"
					startContent="Alto"
					className="max-w-md"
					aria-label="Tono"
					defaultValue={data.tone}
					isDisabled={processing}
					onChange={(val) => setData('tone', Array.isArray(val) ? val[0] : val)}
				/>
			</div>

			<div className="space-y-1">
				<p className="text-sm font-semibold">Ritmo</p>

				<Slider
					size="lg"
					step={10}
					color="primary"
					endContent="Rápido"
					startContent="Lento"
					className="max-w-md"
					aria-label="Tempo"
					defaultValue={data.tempo}
					isDisabled={processing}
					onChange={(val) =>
						setData('tempo', Array.isArray(val) ? val[0] : val)
					}
				/>
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
