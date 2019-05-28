<?php

use Faker\Generator as Faker;

$factory->define(App\Doctor::class, function (Faker $faker) {
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
    return [
        'name' => $faker->name,
        'specialization' => $specialization[rand(0, count($specialization) - 1)],
        'graduationYear' => $faker->year,
        'profilePicture' => $profilePicture[rand(0, count($profilePicture) - 1)],
        //
    ];
});
