<?php

use App\Models\User;
use Illuminate\Foundation\Application;

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/login', [LoginController::class, 'create'])->name('login');
Route::post('/login', [LoginController::class, 'store'])->name('login');
Route::post('/logout', [LoginController::class, 'destroy'])->middleware('auth');

Route::middleware('auth')->group(function () {


    Route::get('/', function () {
        return Inertia::render('Home');
    });

    // filter incoming query based on whether search is in the request
    Route::get('/users', function () {
        return Inertia::render('Users/Index', [
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

    Route::get('/users/create', function () {

        return Inertia::render('Users/Create');
    });

    Route::post('/users', function () {
        // validate
        $userAttributes = Request::validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // persist
        User::create($userAttributes);

        sleep(2);

        // redirect
        return redirect('/users');
    });

    Route::get('/settings', function () {

        return Inertia::render('Settings');
    });
});


//  dynamic title and meta tags episode
