<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Song;
use App\Models\SongPerUser;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class SongTest extends TestCase
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

	// song can be created
	public function test_song_can_be_created()
	{

		Song::create([
			'user_id' => $this->user->id,
		]);

		$this->assertDatabaseHas('songs', [
			'user_id' => $this->user->id
		]);
	}

	public function test_edit_song_page_can_be_rendered()
	{
		$response = $this->get(route('song.edit', 1));
		$response->assertStatus(200);
	}
}
