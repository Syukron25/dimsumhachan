<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PromoController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\GaleryController;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
        return Inertia::render('Home', [
        
        ]);
    });


Route::get('/',[PromoController::class, 'index']);
Route::put('/testUpdate',[PromoController::class, 'update']);
Route::post('/tambahproduk',[ProdukController::class, 'store'])->name('addprod');
Route::post('/updateProduk/{id}',[ProdukController::class, 'update']);
Route::delete('/deleteProduk/{id}',[ProdukController::class, 'destroy']);
//Route::put('/galeryupdate/{id}',[GaleryController::class, 'update']);

Route::resource('galery',GaleryController::class);

Route::get('/dashboard', [PromoController::class, 'indexDashboard']) -> middleware('auth')->name('dashboard');


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard2');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';
