<?php

namespace Tests\Feature\Auth;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RegistrationTest extends TestCase
{
	use RefreshDatabase;

	protected function setUp(): void
	{
		parent::setUp();

		// Create roles and permissions
		$userRole = Role::create(['name' => 'User']);
		$privateAccess = Permission::create(['name' => 'Private Access']);
		$userRole->givePermissionTo($privateAccess);
	}

	public function test_registration_screen_can_be_rendered(): void
	{
		$response = $this->get('/register');

		$response->assertStatus(200);
	}

	public function test_new_users_can_register(): void
	{
		$response = $this->post('/register', [
			'username' => 'testuser',
			'email' => 'test@example.com',
			'password' => 'password',
			'password_confirmation' => 'password',
		]);

		$this->assertAuthenticated();
		$response->assertRedirect(route('dashboard', absolute: false));
	}

	// On user creation the user will be assigned to the default role
	// which is the 'User' role in this case.
	public function test_new_user_is_assigned_default_role(): void
	{
		$this->post('/register', [
			'username' => 'testuser',
			'email' => 'test@example.com',
			'password' => 'password',
			'password_confirmation' => 'password',
		]);

		$user = auth()->user();
		$this->assertTrue($user->hasRole('User'));
	}

	// On register, the user muts have a songs_per_user record
	// which is set to 5 by default.
	public function test_songs_per_user_must_be_created_on_user_registration(): void
	{
		$this->post('/register', [
			'username' => 'testuser',
			'email' => 'test@example.com',
			'password' => 'password',
			'password_confirmation' => 'password',
		]);

		$user = auth()->user();
		$this->assertNotNull($user->songsPerUser);
	}
}
