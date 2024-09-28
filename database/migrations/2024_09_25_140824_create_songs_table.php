<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create('songs', function (Blueprint $table) {
			$table->id();

			$table->unsignedBigInteger('user_id');
			$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

			$table->unsignedBigInteger('music_id')->nullable();

			// $table->unsignedBigInteger('lyrics_id')->nullable();
			// $table->foreign('lyrics_id')->references('id')->on('lyrics')->onDelete('cascade');

			$table->string('title')->nullable();
			$table->json('tags')->nullable();
			$table->boolean('is_instrumental')->default(false);
			$table->integer('step')->default(0);
			$table->string('music_style')->nullable();
			$table->string('mood')->nullable();
			$table->string('artist_gender')->nullable();
			$table->integer('tone')->default(0);
			$table->integer('tempo')->default(0);
			$table->string('song_for')->nullable();
			$table->string('song_from')->nullable();
			$table->string('occasion')->nullable();
			$table->text('details')->nullable();

			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('songs');
	}
};
