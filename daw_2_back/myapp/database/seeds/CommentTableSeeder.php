<?php

use App\Comment;
use Illuminate\Database\Seeder;

class CommentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
//    public function run()
//    {
//        //Comment::truncate();
//
//        $faker = \Faker\Factory::create();
//
//        // And now, let's create a few articles in our database:
//        for ($i = 0; $i < 10; $i++) {
//            Comment::create([
//                'content' => $faker->text,
//                'rating' => $faker->numberBetween(1,10),
//                'doctor_id' => $i,
////                'user_id' => function() {
////                    return factory(App\User::class)->create()->id;
////                },
//            ]);
//        }
//    }

    public function run()
    {
        //Seed roles table with 20 entries
       // factory('App\Doctor', 20)->create();

        //Seed users table with 20 entries
        //factory('App\MedicalUnit', 20)->create();

        //Get array of ids
        $doctorIds      = App\Doctor::pluck('id');//DB::table('doctors')->pluck('id');
        //$medicalUnitsIds      = App\MedicalUnit::pluck('id'); //DB::table('medical_units')->pluck('id');

        //Seed user_role table with 20 entries
        $contentComments = [
            'Bun medic',
            'Foarte bun medic',
            'Experimentat si atent',
            'Bun doctor, recomand'
        ];

        $faker = \Faker\Factory::create();
        foreach ((range(1, 20)) as $index)
        {
            DB::table('comments')->insert(
                [
                    'content' => $contentComments[rand(0, count($contentComments) - 1)],
                    'rating' => $faker->numberBetween(5,10),
                    'hide' => 0,
                    'doctor_id' => $doctorIds[$index - 1],
                    //'medical_unit_id' => $medicalUnitsIds[$index]
                ]
            );
        }

    }
}
