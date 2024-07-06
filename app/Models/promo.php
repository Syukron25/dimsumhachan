<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class promo extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'line1',
        'line2',
    ];
}
