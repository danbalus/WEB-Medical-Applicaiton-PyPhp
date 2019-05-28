<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Credentials extends Model
{
    public $timestamps = false;
    public $email;
    public $password;

}
