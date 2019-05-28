<?php

namespace App\Http\Controllers;

use App\MedicalUnit;
use Illuminate\Http\Request;

class MedicalUnitController extends Controller
{
    public function index()
    {
        return MedicalUnit::all();
    }

    public function show(MedicalUnit $medicalUnit)
    {
        return $medicalUnit;
    }

    public function store(Request $request)
    {
        $medicalUnit = MedicalUnit::create($request->all());

        return response()->json($medicalUnit, 201);
    }

    public function update(Request $request, MedicalUnit $medicalUnit)
    {
        $medicalUnit->update($request->all());

        return response()->json($medicalUnit, 200);
    }

    public function delete(MedicalUnit $medicalUnit)
    {
        $medicalUnit->delete();

        return response()->json(null, 204);
    }
}
