<?php

namespace App\Http\Controllers;

use App\Models\produk;
use Illuminate\Http\Request;



class ProdukController extends Controller
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
            'nama' => 'required',
            'deskripsi'=> 'required',
            'gambar' => 'required|mimes:jpeg,png|max:5000',
            'harga'=> 'required',

        ]);
        
        $gambar = $request->file('gambar');
        $namaGambar = $gambar->getClientOriginalName();
        $gambar->move('static', $request->nama.$namaGambar);

        $produk = new produk;
        $produk->nama = $request->nama;
        $produk->deskripsi = $request->deskripsi;
        $produk->gambar = $request->nama.$namaGambar;
        $produk->harga = $request->harga;
        $produk->save();

      //  return redirect ("/dashboard2");

       
    }

    /**
     * Display the specified resource.
     */
    public function show(produk $produk)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(produk $produk)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, produk $produk, $id)
    {

        $produk = produk::where("id", "=", $id)->first();
        if ($request->hasFile('gambar')) {
            $gambar = $request->file("gambar");
            $namaGambar = $gambar->getClientOriginalName();
            unlink("static/" . $produk->gambar);
            $gambar->move('static', $request->nama . $namaGambar);
            $produk->update([
                'nama' => $request->nama,
                'deskripsi' => $request->desk,
                'harga' => $request->harga,
                'gambar' => $request->nama . $namaGambar
            ]);
        } else {
            $produk->update([
                'nama' => $request->nama,
                'deskripsi' => $request->desk,
                'harga' => $request->harga,
            ]);
        }
    
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $produk = produk::where("id","=",$id)->first();
        unlink("static/".$produk->gambar);
        $produk->delete();
    }

}
