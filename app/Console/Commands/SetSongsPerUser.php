<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use App\Models\SongPerUser;

class SetSongsPerUser extends Command
{
	/**
	 * The name and signature of the console command.
	 *
	 * @var string
	 */
	protected $signature = 'app:set-songs-per-user {user_id} {total}';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Command description';

	/**
	 * Execute the console command.
	 */
	public function handle()
	{
		$user = User::find($this->argument('user_id'));

		if (!$user) throw new \Error("User not found");

		$total_songs = $user->songsPerUser;

		if (!$total_songs) {
			SongPerUser::create([
				'user_id' => $this->argument('user_id'),
				'total' => $this->argument('total'),
			]);
		} else {
			SongPerUser::findOrFail($total_songs->id)->update([
				'total' => $this->argument('total'),
			]);
		}

		echo "El usuario $user->username está habilitado para crear " . $this->argument('total') . " canciones";
	}
}
