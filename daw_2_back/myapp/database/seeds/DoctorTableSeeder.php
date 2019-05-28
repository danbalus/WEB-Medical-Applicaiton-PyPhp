<?php

use App\Doctor;
use Illuminate\Database\Seeder;

class DoctorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Doctor::truncate();

        $faker = \Faker\Factory::create();
        $specialization = [
            'Cardiology',
            'Gastroenterology',
            'Neurology',
            'Orthopaedics',
            'Paediatrics',
            'Psychiatry',
        ];
        $profilePicture = [
            'user.jpg',
        ];


        // And now, let's create a few articles in our database:
        for ($i = 0; $i < 30; $i++) {
            Doctor::create([
                'name' => $faker->name,
                'specialization' => $specialization[rand(0, count($specialization) - 1)],
                'graduationYear' => $faker->year,
                'profilePicture' => $profilePicture[rand(0, count($profilePicture) - 1)],
            ]);
        }
    }
}
//doctor_id', 'medical_unit_id'