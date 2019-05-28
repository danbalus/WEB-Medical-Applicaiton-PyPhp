<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    public $timestamps = false;
    protected $fillable = ['name', 'specialization', 'graduationYear', 'profilePicture'];

    public function comments(){
        return $this->hasMany('App\Comment');
    }

    public function medicalUnits()
    {
        //return $this->belongsToMany(MedicalUnit::class, 'doctor_medical_unit');
        return $this->belongsToMany('App\MedicalUnit', 'doctors_medical_units');
    }


}
