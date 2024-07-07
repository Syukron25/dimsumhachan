<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PromoController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\GaleryController;
use Illuminate\Support\Facades\URL;


if (env('APP_ENV') === 'production') {
    URL::forceScheme('https');
}


Route::get('/',[PromoController::class, 'index']);
Route::put('/testUpdate',[PromoController::class, 'update']);
Route::post('/tambahproduk',[ProdukController::class, 'store'])->name('addprod');
Route::post('/updateProduk/{id}',[ProdukController::class, 'update']);
Route::delete('/deleteProduk/{id}',[ProdukController::class, 'destroy']);

Route::resource('galery',GaleryController::class);

Route::get('/dashboard', [PromoController::class, 'indexDashboard']) -> middleware('auth')->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';
