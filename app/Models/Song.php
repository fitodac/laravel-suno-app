<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
	use HasFactory;

	protected $fillable = [
		'user_id',
		'music_id',
		'title',
		'tags',
		'is_instrumental',
		'step',
		'music_style',
		'mood',
		'artist_gender',
		'tone',
		'tempo',
		'song_for',
		'song_from',
		'occasion',
		'details',
	];

	/**
	 * Get the chat associated with the song.
	 */
	public function chat()
	{
		return $this->hasOne(Chat::class);
	}

	/**
	 * Get the user that owns the song.
	 */
	public function user()
	{
		return $this->belongsTo(User::class);
	}

	/**
	 * Get the lyric associated with the song.
	 */
	public function lyric()
	{
		return $this->hasOne(Lyric::class);
	}
}
