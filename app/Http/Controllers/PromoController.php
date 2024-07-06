<?php

namespace App\Http\Controllers;

use App\Models\promo;
use App\Models\produk;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\galery;


class PromoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        $promo = promo::first();
        $produk = produk::get();
        $galerylist = galery::get();
        return Inertia::render(
            "Home", ["promo" => $promo , "produk" => $produk, "galerylist" => $galerylist]
        );
    }

    public function indexDashboard()
    {
        $promo = promo::first();
        $produklist = produk::get();
        $galerylist = galery::get();
        return Inertia::render(
            "Dashboard", ["promo" => $promo , "produklist" => $produklist, "galerylist" => $galerylist]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(promo $promo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(promo $promo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, promo $promo)
    {
        $promo 
        -> where ('id',1)
        -> update ([
            'title' => $request->title,
            'line1' => $request->line1,
            'line2' => $request->line2
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(promo $promo)
    {
        //
    }
}
