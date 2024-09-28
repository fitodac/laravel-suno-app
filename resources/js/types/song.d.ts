export type Song = {
	id: number
	user_id: number
	music_id: number
	title: string
	tags: string
	is_instrumental: boolean
	step: number
	music_style: string
	mood: string
	artist_gender: string
	tone: number
	tempo: number
	song_for: string
	song_from: string
	occasion: string
	details: string
}

export type SunoSongs = {
	id: string
	title: string
	audio_url: string
	duration: number | null
	gpt_description_prompt: string
	image_url: string
	lyric: string
	model_name: string
	prompt: string
	status: string
	tags: string
	type: string
	video_url: string
	created_at?: string
	error_message?: string
}[]
