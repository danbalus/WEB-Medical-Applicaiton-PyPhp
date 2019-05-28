<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DoctorsMedicalUnits extends Model
{
    public $timestamps = false;
    protected $fillable = ['doctor_id', 'medical_unit_id'];
}
