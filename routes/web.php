<?php

use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

// filter incoming query based on whether search is in the request
Route::get('/users', function () {
    return Inertia::render('Users', [
        'users' => User::query()
            /* when you find something for the search input, append to the query */
            ->when(Request::input('search'), function ($query, $search) {
                $query->where('name', 'like', "%{$search}%");
            })
            ->paginate(10)
            ->withQueryString()
            ->through(fn ($user) => [
                'id' => $user->id,
                'name' => $user->name,
            ]),

        'filters' => Request::only(['search'])
    ]);
});

Route::get('/settings', function () {

    return Inertia::render('Settings');
});

Route::post('/logout', function () {
    dd('user logged out');
});

//  dynamic title and meta tags episode
