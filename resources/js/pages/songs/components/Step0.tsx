import { Select, SelectItem, Button, Divider } from '@nextui-org/react'
import { useForm, usePage } from '@inertiajs/react'
import { FormEvent, useState } from 'react'
import { object, string } from 'yup'

import type { Song } from '@/types/song'

export const Step0 = () => {
	const { props } = usePage() as { props: { song: Song } }
	const { song } = props

	const [errors, setErrors] = useState({ music_style: null })

	const { data, setData, patch, processing } = useForm({
		music_style: song.music_style ?? '',
		step: 1,
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
					music_style: err.toString().replace('ValidationError: ', ''),
				})
			})
	}

	return (
		<form onSubmit={submit} className="w-1/2 space-y-6 relative">
			<h3 className="font-semibold">Elige el género</h3>

			<div>
				<Select
					disallowEmptySelection
					isDisabled={processing}
					label="Elige el género"
					value={data.music_style}
					onSelectionChange={(e: any) => {
						setErrors({ music_style: null })
						setData('music_style', e.anchorKey)
					}}
					errorMessage={errors.music_style ?? ''}
					defaultSelectedKeys={[data.music_style]}
					isInvalid={errors.music_style ? true : false}
				>
					<SelectItem key="Pop">Pop</SelectItem>
					<SelectItem key="Hip Hop">Hip Hop</SelectItem>
					<SelectItem key="Jazz">Jazz</SelectItem>
					<SelectItem key="Rhythm and Blues">Rhythm and Blues</SelectItem>
					<SelectItem key="Música clásica">Música clásica</SelectItem>
					<SelectItem key="Rock and Roll">Rock and Roll</SelectItem>
					<SelectItem key="Reggae">Reggae</SelectItem>
				</Select>
			</div>

			<Divider />

			<div className="flex justify-between">
				<div></div>

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
	music_style: string().required('Debes seleccionar un género'),
})
