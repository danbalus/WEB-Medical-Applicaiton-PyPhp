<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMedicalUnits extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medical_units', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->string('name');
            $table->string('location');
            $table->string('type');
            $table->string('logo');
            $table->double('latitude');
            $table->double('longitude');
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
        Schema::dropIfExists('medical_units');
    }
}
