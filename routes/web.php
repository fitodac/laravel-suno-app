<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MediaManagerController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SongController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\PromptController;

Route::get('/', function () {
	return Inertia::render('Welcome', [
		'canLogin' => Route::has('login'),
		'canRegister' => Route::has('register'),
		'laravelVersion' => Application::VERSION,
		'phpVersion' => PHP_VERSION,
	]);
});


// Route::get('dashboard', function () {
// 	return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
	Route::get('dashboard', [SongController::class, 'index'])->name('dashboard');

	Route::get('song', [SongController::class, 'create'])->name('song.create');
	Route::get('song/{song}', [SongController::class, 'edit'])->name('song.edit');
	Route::match(['put', 'patch'], 'song/{song}', [SongController::class, 'update'])->name('song.update');

	Route::get('profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::match(['put', 'patch'], 'profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::delete('profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

	Route::post('profile/image-profile', [ProfileController::class, 'update_image'])->name('profile.update_image');
	Route::delete('profile/image-profile', [ProfileController::class, 'remove_image'])->name('profile.remove_image');
});




require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
