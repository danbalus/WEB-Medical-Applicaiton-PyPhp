<?php

use App\MedicalUnit;
use Illuminate\Database\Seeder;

class MedicalUnitTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       // MedicalUnit::truncate();

        $faker = \Faker\Factory::create();
        $type = [
            'Clinic',
            'Hospital'
        ];
        $logo = [
            'logo.jpg',
        ];
        $clinicName = [
            'Armona Medical Alpine Resort',
            'Spitalul Clinic CF',
            'Spitalul Clinic Municipal',
            'New Medica',
        ];
        // And now, let's create a few articles in our database:
        for ($i = 0; $i < 30; $i++) {
            MedicalUnit::create([
                'name' => $clinicName[rand(0, count($clinicName) - 1)],
                'location' => $faker->city,
                'type' => $type[rand(0, count($type) - 1)],
                'logo' => $logo[rand(0, count($logo) - 1)],
                'latitude'=> $faker->numberBetween(46.768439,46.7793411),
                'longitude'=> $faker->numberBetween(23.551423,23.591423),
            ]);
        }
    }
}
