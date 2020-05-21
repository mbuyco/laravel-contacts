<?php

namespace App\Modules\Contacts\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'city',
        'email',
        'first_name',
        'last_name',
        'street',
        'zip_code',
    ];
}
