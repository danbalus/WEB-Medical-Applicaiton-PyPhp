<?php

use App\Doctor;
use Illuminate\Database\Seeder;
use App\DoctorsMedicalUnits;

class DoctorsMedicalUnitsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
//    public function run()
//    {
//        //            $table->integer('doctor_id')->unsigned();
//        //
//        //            $table->integer('medical_unit_id')->unsigned();
//        DoctorsMedicalUnits::truncate();
//
//        $faker = \Faker\Factory::create();
//
//        // And now, let's create a few articles in our database:
//        for ($i = 0; $i < 10; $i++) {
//            DoctorsMedicalUnits::create([
//                'doctor_id' => $i,
//                'medical_unit_id' => $i,
//                //'graduationYear' => $faker->year,
//               // 'profilePicture' => $faker->text,
//            ]);
//        }
//
//    }
    public function run()
    {
        //Seed roles table with 20 entries
        factory('App\Doctor', 20)->create();

        //Seed users table with 20 entries
        factory('App\MedicalUnit', 20)->create();

        //Get array of ids
        $doctorIds      = App\Doctor::pluck('id');//DB::table('doctors')->pluck('id');
        $medicalUnitsIds      = App\MedicalUnit::pluck('id'); //DB::table('medical_units')->pluck('id');

        //Seed user_role table with 20 entries
        foreach ((range(1, 20)) as $index)
        {
            DB::table('doctors_medical_units')->insert(
                [
                    'doctor_id' => $doctorIds[$index - 1],
                    'medical_unit_id' => $medicalUnitsIds[$index - 1]
                ]
            );
        }

    }
}
