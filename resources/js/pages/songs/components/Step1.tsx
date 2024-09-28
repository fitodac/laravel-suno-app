import { Select, SelectItem, Button, Divider } from '@nextui-org/react'
import { useForm, usePage, router } from '@inertiajs/react'
import { FormEvent, useState } from 'react'
import { object, string } from 'yup'

import type { Song } from '@/types/song'

export const Step1 = () => {
	const { props } = usePage() as { props: { song: Song } }
	const { song } = props

	const [errors, setErrors] = useState({ mood: null })

	const { data, setData, patch, processing } = useForm({
		mood: song.mood ?? '',
		step: 2,
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
					mood: err.toString().replace('ValidationError: ', ''),
				})
			})
	}

	const { patch: back } = useForm({ step: 0 })

	return (
		<form onSubmit={submit} className="w-1/2 space-y-6">
			<h3 className="font-semibold">Elige el ánimo</h3>

			<div>
				<Select
					label="Elige el mood"
					disallowEmptySelection
					value={data.mood}
					onSelectionChange={(e: any) => {
						setErrors({ mood: null })
						setData('mood', e.anchorKey)
					}}
					isInvalid={errors.mood ? true : false}
					errorMessage={errors.mood ?? ''}
					defaultSelectedKeys={[data.mood]}
					isDisabled={processing}
				>
					<SelectItem key="Alegre">Alegre</SelectItem>
					<SelectItem key="Triste">Triste</SelectItem>
					<SelectItem key="Romántica">Romántica</SelectItem>
					<SelectItem key="Graciosa">Graciosa</SelectItem>
					<SelectItem key="Reflexiva">Reflexiva</SelectItem>
				</Select>
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
	mood: string().required('Debes seleccionar un género'),
})
