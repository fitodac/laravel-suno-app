import { Button, Divider, Input, Textarea, cn } from '@nextui-org/react'
import { useForm, usePage } from '@inertiajs/react'
import { FormEvent, useState } from 'react'
import { object, string } from 'yup'

import type { Song } from '@/types/song'

export const Step4 = () => {
	const { props } = usePage() as { props: { song: Song } }
	const { song } = props
	const [errors, setErrors] = useState({ title: null })

	const { data, setData, patch, processing } = useForm({
		title: song.title ?? '',
		details: song.details ?? '',
		step: 5,
	})

	const submit = (e: FormEvent) => {
		e.preventDefault()

		schema
			.validate(data, { abortEarly: false })
			.then(() => {
				patch(route('song.update', { song }), {
					onSuccess: () => {
						console.log('success')
					},
					onError: (errors) => console.log(errors),
				})
			})
			.catch((err) => {
				setErrors({
					title: err.toString().replace('ValidationError: ', ''),
				})
			})
	}

	const { patch: back } = useForm({ step: 3 })

	return (
		<form onSubmit={submit} className="w-1/2 space-y-8">
			<div className="space-y-2">
				<h3 className="font-semibold">Detalles personales</h3>

				<p className="text-foreground-700 text-sm">
					¿Qué detalles o características se deberían resaltar en la canción?
				</p>
			</div>

			<div>
				<Input
					isRequired
					label="Título"
					isDisabled={processing}
					defaultValue={data.title}
					errorMessage={errors.title ?? ''}
					isInvalid={errors.title ? true : false}
					onValueChange={(val) => setData('title', val)}
				/>
			</div>

			<div>
				<Textarea
					maxLength={125}
					isDisabled={processing}
					defaultValue={data.details}
					label="¿Para quién es la canción?"
					onValueChange={(val) => setData('details', val)}
				/>

				<div className="text-xs pt-1 flex justify-end">
					{data.details.length}/125
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

const schema = object({
	title: string().required('Por favor, agrega un título a la canción'),
})
