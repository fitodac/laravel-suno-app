<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\SongPerUser;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class DashboardTest extends TestCase
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

	public function test_dashboard_page_has_total_songs_per_user_prop(): void
	{
		$response = $this->get(route('dashboard'));
		$response->assertSee(['songs', 'available_slots']);
	}

	public function test_dashboard_page_can_render(): void
	{
		$response = $this->get(route('dashboard'));

		$response->assertStatus(200);
	}
}
