<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Song;
use App\Models\Lyric;
use App\Models\SongPerUser;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class LyricTest extends TestCase
{
	use RefreshDatabase;

	protected $user;

	protected function setUp(): void
	{
		parent::setUp();

		// Create a user with roles and permissions
		$this->user = User::factory()->create();
		$userRole = Role::create(['name' => 'User']);
		$privateAccess = Permission::create(['name' => 'Private Access']);
		$userRole->givePermissionTo($privateAccess);
		$this->user->assignRole('User');
		SongPerUser::create([
			'user_id' => $this->user->id,
			'total' => 1
		]);

		$this->post('/login', [
			'login' => $this->user->username,
			'password' => 'password',
		]);
	}

	// lyric can be created
	public function test_lyric_can_be_created()
	{

		$song = Song::create([
			'user_id' => $this->user->id,
		]);

		Lyric::create([
			'song_id' => $song->id,
			'content' => 'test lyric'
		]);

		$this->assertDatabaseHas('lyrics', [
			'song_id' => $song->id,
			'content' => 'test lyric'
		]);
	}

	//lyric can be edited
	// public function test_lyric_can_be_edited()
	// {

	// 	$song = Song::create([
	// 		'user_id' => $this->user->id,
	// 	]);

	// 	$lyric = Lyric::create([
	// 		'song_id' => $song->id,
	// 		'content' => 'test lyric'
	// 	]);

	// 	$this->patch('/lyric/' . $lyric->id, [
	// 		'content' => 'edited lyric'
	// 	]);

	// 	$this->assertDatabaseHas('lyrics', [
	// 		'id' => $lyric->id,
	// 		'content' => 'edited lyric'
	// 	]);
	// }

	//lyric can be deleted
	// public function test_lyric_can_be_deleted()
	// {

	// 	$song = Song::create([
	// 		'user_id' => $this->user->id,
	// 	]);

	// 	$lyric = Lyric::create([
	// 		'song_id' => $song->id,
	// 		'content' => 'test lyric'
	// 	]);

	// 	$this->delete('/lyric/' . $lyric->id);

	// 	$this->assertDatabaseMissing('lyrics', [
	// 		'id' => $lyric->id
	// 	]);
	// }
}
