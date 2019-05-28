<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    public $timestamps = false;
    protected $fillable = ['content', 'rating','doctor_id', 'hide'];

    public function doctor(){
        return $this->belongsTo('App\Doctor');
    }
}
