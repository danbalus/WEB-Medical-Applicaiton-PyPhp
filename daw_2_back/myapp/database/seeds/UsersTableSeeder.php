<?php

use Illuminate\Database\Seeder;
use App\User;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's clear the users table first
        //User::truncate();

        $faker = \Faker\Factory::create();

        // Let's make sure everyone has the same password and 
        // let's hash it before the loop, or else our seeder 
        // will be too slow.
        $password = Hash::make('toptal');


//        $logo = [
//            'Admin',
//            'Normal User'
//        ];
//        'logo' => $logo[rand(0, count($logo) - 1)]


        User::create([

            'email' => 'admin@test.com',
            'password' => '12345',//$password,
            'type' => 'Administrator',
        ]);

        // And now let's generate a few dozen users for our app:
        for ($i = 0; $i < 20; $i++) {
            User::create([

                'email' => $faker->email,
                'password' => '12345',//$password,
                'type' => 'normal user'
            ]);
        }
    }
}
