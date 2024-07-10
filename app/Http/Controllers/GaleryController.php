<?php

namespace App\Http\Controllers;

use App\Models\galery;
use Illuminate\Http\Request;

class GaleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $request->validate([
            'namafile' => 'required|mimes:jpeg,png|max:5000',
            'caption'=> 'required' 
        ]);

        $highestid = galery::max("id")+1;

        $galery = new galery();
        $galery->caption = $request->caption;
        $galery->namafile = $highestid.$request->file("namafile")->getClientOriginalName();
        $galery->save();

        $gambar =  $request->file("namafile");
        $gambar -> move("img",$highestid.$request->file("namafile")->getClientOriginalName());
    }

    /**
     * Display the specified resource.
     */
    public function show(galery $galery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(galery $galery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, galery $galery)
    {
         $galery -> caption = $request->caption;
         $galery -> save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(galery $galery)
    {
    
        $galery -> delete();
        if(file_exists('img/'.$galery->namafile)){
        unlink('img/'.$galery->namafile);}
    }
}
