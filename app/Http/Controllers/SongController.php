<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Song;

class SongController extends Controller
{

	protected $user;

	public function __construct()
	{
		$this->user = auth()->user();
	}

	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		$songs = $this->user->songs;
		$available_slots = 0;

		if ($this->user->availableSlots()) {
			$available_slots = $this->user->songsPerUser->total - $songs->count();
		}

		return Inertia::render('Dashboard', compact('songs', 'available_slots'));
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create()
	{
		if (!$this->user->availableSlots()) {
			return redirect()->route('dashboard');
		}

		$song = $this->store();
		return redirect()->route('song.edit', ['song' => $song]);
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store()
	{
		$song = Song::create(['user_id' => $this->user->id]);
		// Chat::create('user_id', $user_id);

		return $song;
	}

	/**
	 * Display the specified resource.
	 */
	public function show(string $id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(Song $song)
	{
		/**
		 * Check if the song belongs to the user
		 */
		if ($song->user_id !== $this->user->id) {
			return redirect()->route('dashboard');
		}

		return Inertia::render('songs/Edit', compact('song'));
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, Song $song)
	{
		$song->update($request->all());
		return redirect()->back();
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(string $id)
	{
		//
	}
}
