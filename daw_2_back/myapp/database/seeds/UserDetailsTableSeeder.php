<?php

use App\UserDetails;
use Illuminate\Database\Seeder;

class UserDetailsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UserDetails::truncate();

        $faker = \Faker\Factory::create();
        $affection= [
            'Acute stress disorder',
            'Anxiety disorders',
            'Allergic disorders',
            'Bipolar disorders',
            'Depressive disorders',
            'Hearing disorders',
            'Neurological disorder',
            'Sleep disorders',
        ];
        // And now, let's create a few articles in our database:
        for ($i = 0; $i < 20; $i++) {
            UserDetails::create([
                'name' => $faker->name,
                'affection' => $affection[rand(0, count($affection) - 1)],
                'user_id' => $i + 1

            ]);
        }
    }
}
