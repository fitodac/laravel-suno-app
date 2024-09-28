<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SongPerUser extends Model
{
	use HasFactory;

	protected $table = 'songs_per_user';

	protected $fillable = [
		'user_id',
		'total'
	];

	// don't use timestamps
	public $timestamps = false;

	// Belongs to user by user_id
	public function user()
	{
		return $this->belongsTo(User::class);
	}
}
