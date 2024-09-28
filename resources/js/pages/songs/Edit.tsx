import { Layout } from '@/layouts/admin/executive/Layout'
import { PageContent } from '@/components'
import { t } from '@/i18n'
import { Link } from '@inertiajs/react'
import { Progress, Chip } from '@nextui-org/react'
import {
	Step0,
	Step1,
	Step2,
	Step3,
	Step4,
	Step5,
	Step6,
	SongDetails,
} from './components'
import { useState } from 'react'

interface Props {
	song: any
}

const Page = ({ song }: Props) => {
	console.log('song', song)

	const { step } = song

	return (
		<PageContent className="max-w-screen-xl mx-auto">
			<div className="w-full px-3">
				<div className="select-none pointer-events-none">
					<Progress
						value={progressPercent * step}
						color="primary"
						label={wizzard.map((e) => (
							<Chip
								key={e}
								color="primary"
								className="ring-4 ring-background"
								size="sm"
							>
								{e}
							</Chip>
						))}
						classNames={{
							base: 'relative',
							labelWrapper: '-inset-x-2 -top-1.5 absolute z-10',
							label: 'w-full flex justify-between',
						}}
					/>
				</div>

				<section className="mt-10 flex gap-20">
					<div className="w-60">
						<SongDetails />
					</div>

					<div className="flex-1">
						{step === 0 && <Step0 />}
						{step === 1 && <Step1 />}
						{step === 2 && <Step2 />}
						{step === 3 && <Step3 />}
						{step === 4 && <Step4 />}
						{step === 5 && <Step5 />}
						{step === 6 && <Step6 />}
					</div>
				</section>
			</div>
		</PageContent>
	)
}

const wizzard = [
	'Género',
	'Mood',
	'Artista',
	'Básicos',
	'Detalles',
	'Letra',
	'Música',
]
const progressPercent = 100 / (wizzard.length - 1)

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Song')) }} />
)

export default Page
