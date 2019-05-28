<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MedicalUnit extends Model
{
    protected $fillable = ['name', 'location', 'type', 'logo','latitude','longitude'];
    public $timestamps = false;
    public function doctors()
    {
        //return $this->belongsToMany(Doctor::class, 'doctor_medical_unit');
        return $this->belongsToMany('App\Doctor', 'doctors_medical_units');
    }

}
//MedicalUnit::with('*')->get();