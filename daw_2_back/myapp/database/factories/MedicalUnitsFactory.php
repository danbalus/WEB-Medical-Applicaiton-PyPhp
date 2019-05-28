<?php

use Faker\Generator as Faker;

$factory->define(App\MedicalUnit::class, function (Faker $faker) {
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
    return [
        'name' => $clinicName[rand(0, count($clinicName) - 1)],
        'location' => $faker->city,
        'type' => $type[rand(0, count($type) - 1)],
        'logo' => $logo[rand(0, count($logo) - 1)],
        'latitude'=> $faker->randomFloat(6,46.738439,46.7793411),
        'longitude'=> $faker->randomFloat(6,23.551423,23.591423),
        //
    ];
});
