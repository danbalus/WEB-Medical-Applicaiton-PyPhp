<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDetails extends Model
{
    public $timestamps = false;
    protected $fillable = ['user_id', 'name', 'affection'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
