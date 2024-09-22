<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\UserAdminController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Middleware\CheckRoleAccess;

/**
 * Users
 * 
 * 
 * 
 */
Route::middleware(['auth', 'can:Admin Access'])
	->prefix('dashboard/corporate')
	->name('dashboard.')
	->group(function () {

		// Route::get('users', [UserController::class, 'index'])->name('users.list');
		// Route::get('users/create', [UserController::class, 'create'])->name('user.create');
		// Route::post('users', [UserController::class, 'store'])->name('user.store');
		// Route::get('users/{user}', [UserController::class, 'show'])->name('user.show');
		// Route::get('users/{user}/edit', [UserController::class, 'edit'])
		// 	->middleware(CheckRoleAccess::class)
		// 	->name('user.edit');
		// Route::match(['put', 'patch'], 'users/{user}', [UserController::class, 'update'])->name('user.update');
		// Route::delete('users/{user}', [UserController::class, 'destroy'])->name('user.destroy');

		// Route::post('users/image-profile/{user}', [UserController::class, 'update_image_profile'])->name('user.update_image_profile');
		// Route::delete('users/image-profile/{user}', [UserController::class, 'remove_image_profile'])->name('user.remove_image_profile');

		// Sessions
		Route::delete('session/{id}/invalidate', [UserController::class, 'invalidate_session'])->name('session.invalidate');
	});




Route::middleware(['auth', 'role:Super Admin'])
	->prefix('dashboard/corporate')
	->name('dashboard.')
	->group(function () {
		/**
		 * Roles
		 * 
		 * 
		 * 
		 */
		// Route::get('roles', [RoleController::class, 'index'])->name('roles.list');
		// Route::get('roles/create', [RoleController::class, 'create'])->name('role.create');
		// Route::post('roles', [RoleController::class, 'store'])->name('role.store');
		// Route::get('roles/{role}/edit', [RoleController::class, 'edit'])
		// 	->middleware(CheckRoleAccess::class)
		// 	->name('role.edit');
		// Route::match(['put', 'patch'], 'roles/{role}', [RoleController::class, 'update'])->name('role.update');
		// Route::delete('roles/{role}', [RoleController::class, 'destroy'])->name('role.destroy');

		/**
		 * Permissions
		 * 
		 * 
		 * 
		 */
		// Route::get('permissions', [PermissionController::class, 'index'])->name('permissions.list');
		// Route::post('permissions', [PermissionController::class, 'store'])->name('permissions.store');
		// Route::match(['put', 'patch'], 'permissions/{permission}', [PermissionController::class, 'update'])->name('permissions.update');
		// Route::delete('permissions/{permission}', [PermissionController::class, 'destroy'])->name('permissions.destroy');

		/**
		 * Administrators
		 * 
		 * 
		 * 
		 */
		// Route::get('administrators', [UserAdminController::class, 'index'])->name('admins.list');

		// Route::get('administrator/create', [UserAdminController::class, 'create'])->name('admin.create');
		// Route::post('administrator', [UserAdminController::class, 'store'])->name('admin.store');
		// Route::get('administrator/{user}', [UserAdminController::class, 'show'])->name('admin.show');
		// Route::get('administrator/{user}/edit', [UserAdminController::class, 'edit'])->name('admin.edit');
		// Route::match(['put', 'patch'], 'administrator/{user}', [UserAdminController::class, 'update'])->name('admin.update');
		// Route::delete('administrator/{user}', [UserAdminController::class, 'destroy'])->name('admin.destroy');
	});
