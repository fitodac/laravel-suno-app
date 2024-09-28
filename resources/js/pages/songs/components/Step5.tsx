import { Button, Divider } from '@nextui-org/react'
import { useForm, usePage, router } from '@inertiajs/react'
import { FormEvent, useState } from 'react'

import type { Song } from '@/types/song'

export const Step5 = () => {
	const { props } = usePage() as { props: { song: Song } }
	const { song } = props

	const { data, setData, patch, processing } = useForm({
		step: 6,
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

	const { patch: back } = useForm({ step: 4 })

	return (
		<form onSubmit={submit} className="w-1/2 space-y-6">
			<h3 className="font-semibold">Letra</h3>

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
