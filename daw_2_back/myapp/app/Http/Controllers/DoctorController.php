<?php

namespace App\Http\Controllers;

use App\Doctor;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function index()
    {
        return Doctor::all();
    }

    public function show(Doctor $doctor)
    {
        return $doctor;
    }

    public function store(Request $request)
    {
        $doctor = Doctor::create($request->all());

        return response()->json($doctor, 201);
    }

    public function update(Request $request, Doctor $doctor)
    {
        $doctor->update($request->all());

        return response()->json($doctor, 200);
    }

    public function delete(Doctor $doctor)
    {
        $doctor->delete();

        return response()->json(null, 204);
    }
}
