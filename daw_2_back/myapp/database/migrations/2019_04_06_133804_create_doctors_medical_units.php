<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDoctorsMedicalUnits extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctors_medical_units', function (Blueprint $table) {
            //$table->engine = 'InnoDB';

            $table->integer('doctor_id')->unsigned();

            $table->integer('medical_unit_id')->unsigned();

            $table->foreign('doctor_id')->references('id')->on('doctors')
                ->onDelete('cascade');

            $table->foreign('medical_unit_id')->references('id')->on('medical_units')
                ->onDelete('cascade');

            //$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('doctors_medical_units');
    }
}
