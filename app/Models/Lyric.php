<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lyric extends Model
{
	use HasFactory;

	protected $fillable = [
		'song_id',
		'content'
	];

	/**
	 * Get the song that owns the lyric.
	 */
	public function song()
	{
		return $this->belongsTo(Song::class);
	}
}
