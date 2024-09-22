<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Cache;

class AdminNavbarProvider extends ServiceProvider
{
	/**
	 * Register services.
	 */
	public function register(): void
	{
		//

		$this->app->singleton(AdminNavbarProvider::class, function ($app) {
			return new AdminNavbarProvider(null);
		});
	}

	/**
	 * Bootstrap services.
	 */
	public function boot(): void {}


	/**
	 * Get the menu data.
	 */
	public function getMenu($user, $role, $permissions = []): array
	{
		$menu = [];
		$userId = $user->id ?? 0;
		$cacheKey = "menu_{$userId}_{$role}";

		// Dashboard
		$menu[] = [
			'key' => 'main',
			'title' => null,
			'menu' => [
				[
					'label' => 'Inicio',
					'route' => 'dashboard',
					'icon' => 'ri-home-5-fill'
				]
			]
		];


		return Cache::remember($cacheKey, 60, function () use ($menu) {
			return $menu;
		});
	}
}
