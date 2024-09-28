<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\demo\UsersSeeder;
use Database\Seeders\demo\ProductsSeeder;
use Database\Seeders\RoleSeeder;
use Database\Seeders\MediaManagerSeeder;
use App\Models\User;
use App\Models\SongPerUser;

class DatabaseSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 */
	public function run(): void
	{

		$this->call([
			RoleSeeder::class,
		]);

		User::factory()->create([
			'name' => 'Max',
			'lastname' => 'Masterson',
			'username' => 'maxmasterson',
			'email' => 'superadmin@local.com'
		])
			->assignRole('Super Admin');

		User::factory()->create([
			'name' => 'Emma',
			'lastname' => 'Smith',
			'username' => 'real_emma',
			'email' => 'admin@local.com'
		])->assignRole('Admin');

		$user = User::factory()->create([
			'name' => 'John',
			'lastname' => 'Doe',
			'username' => 'johndoe',
			'email' => 'user@local.com'
		])->assignRole('User');

		SongPerUser::create([
			'user_id' => $user->id,
			'total' => 1
		]);
	}
}
