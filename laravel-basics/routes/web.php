<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';

Route::middleware(['auth'])->group(function () {

    Route::get('/profile', function () {
        return 'Profile Page';
    });

    Route::get('/settings', function () {
        return 'Settings Page';
    });

    Route::get('/admin', function () {
        return 'Admin Page';
    });

});


