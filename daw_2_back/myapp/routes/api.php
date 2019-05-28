<?php

use Illuminate\Http\Request;
Use App\Article;
Use App\Doctor;
Use App\MedicalUnit;
Use App\User;
Use App\UserDetails;
Use \App\Comment;
Use \App\MedicalUnitChart;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('register', 'Auth\RegisterController@register');

Route::get('articles', function() {
    // If the Content-Type and Accept headers are set to 'application/json',
    // this will return a JSON structure. This will be cleaned up later.
    return Article::all();
});

Route::get('articles/{article}', function($article) {
    return Article::find($article);
});

Route::post('articles', function(Request $request) {
    return Article::create($request->all);
});

Route::put('articles/{article}', function(Request $request, $article) {
    $article = Article::findOrFail($article);
    $article->update($request->all());

    return $article;
});

Route::delete('articles/{article}', function($article) {
    Article::find($article)->delete();

    return 204;
});
//--------------------------------------------------------------------------------------------------
Route::get('doctors', function() {
    // If the Content-Type and Accept headers are set to 'application/json',
    // this will return a JSON structure. This will be cleaned up later.
    return Doctor::with('medicalUnits')->get();
});

Route::get('doctors/{doctor}', function($doctor) {
    return Doctor::with('comments')->with('medicalUnits')->get()->find($doctor);
//return User::with('userDetails')->get()->find($user);
});

Route::post('doctors', function(Request $request) {
    //return Doctor::create($request->all);
    $doctor = Doctor::with('comments')->findOrFail($request->input('id'));

    $doctor->id=$request->input('id');
    $doctor->name=$request->input('name');
    $doctor->specialization=$request->input('specialization');
    $doctor->graduationYear=$request->input('graduationYear');
    $doctor->profilePicture=$request->input('profilePicture');

    $comments = new Comment();
    //$comments->id=$request->input('comments.0.id');
    $comments->content=$request->input('comments.0.content');
    $comments->rating=$request->input('comments.0.rating');
    $comments->doctor_id=$request->input('id');
    //$allUserDetails = array($userDetails);
    //echo json_encode($allUserDetails);
    //$user->userDetails()->updateOrCreate($allUserDetails);

    //DB::table('comments')->where('doctor_id', $doctor->id)->delete();
   // DB::table('doctors')->where('id', $doctor->id)->delete();

    $doctor->save();
    $comments->save();

    return $doctor;
});
Route::put('doctors', function(Request $request, $doctor) {
//    $doctor = Doctor::findOrFail($doctor);
//    $doctor->update($request->all());
//
//    return $doctor;
    $doctor = User::findOrFail($doctor)->with('comments')->get();
    //UserDetails::deleted($user->userDetails);
    print("-----");
    print($doctor->comments);
    DB::table('comments')->where('doctor_id', $doctor->id);

    $doctor->comments()->update($request->all());

    return $doctor;
});

Route::delete('doctors/{doctor}', function($doctor) {
    Doctor::find($doctor)->delete();

    return 204;
});
//--------------------------------------------------------------------------------------------------
Route::get('medicalUnits', function() {
    // If the Content-Type and Accept headers are set to 'application/json',
    // this will return a JSON structure. This will be cleaned up later.

    //echo(MedicalUnit::with('doctors')->get());//--------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //echo(MedicalUnit::with('doctors')->get()->first);
    return MedicalUnit::with('doctors')->get();
});//MedicalUnit::with('*')->get();

Route::get('medicalUnits/{medicalUnit}', function($medicalUnits) {
    return MedicalUnit::with('doctors')->get()->find($medicalUnits);
});//    return Doctor::with('comments')->with('medicalUnits')->get()->find($doctor);

Route::post('medicalUnits', function(Request $request) {
    return MedicalUnit::create($request->all);
});


Route::put('medicalUnits/{medicalUnit}', function(Request $request, $medicalUnits) {
    $medicalUnits = MedicalUnit::findOrFail($medicalUnits);
    $medicalUnits->update($request->all());

    return $medicalUnits;
});

Route::delete('medicalUnits/{medicalUnit}', function($medicalUnits) {
    MedicalUnit::find($medicalUnits)->delete();

    return 204;
});
//--------------------------------------------------------------------------------------------------
Route::get('users', function() {
    // If the Content-Type and Accept headers are set to 'application/json',
    // this will return a JSON structure. This will be cleaned up later.
    return User::with('userDetails')->get();
});

Route::get('users/{user}', function($user) {
   // print ("gggg");
    return User::with('userDetails')->get()->find($user);
});//Article::with('userDetails')->get()->find($user);

Route::post('users', function(Request $request) {
    $user = User::with('userDetails')->findOrFail($request->input('id'));
    $user->id=$request->input('id');
    $user->email=$request->input('email');
    $user->password=$request->input('password');
    $user->type=$request->input('type');
    $userDetails = new UserDetails();
    $userDetails->id=$request->input('userDetails.id');
    $userDetails->user_id=$request->input('id');
    $userDetails->name=$request->input('userDetails.name');
    $userDetails->affection=$request->input('userDetails.affection');

    //$allUserDetails = array($userDetails);
    //echo json_encode($allUserDetails);
    //$user->userDetails()->updateOrCreate($allUserDetails);

    DB::table('user_details')->where('user_id', $user->id)->delete();
    $user->save();

    $userDetails->save();

    return $user;
    //return User::create($request);

});
//Route::post('users', 'UserController@getUserInfo');
//Route::get('user/{id}', 'UserController@getUserInfo');

//MedicalUnit::with('doctors')->get();
//Route::post('users','UserController@addUser');

Route::put('users', function(Request $request, $user) {
    $user = User::findOrFail($user)->with('userDetails')->get();
    //UserDetails::deleted($user->userDetails);
    print("-----");
    print($user->userDetails->id);
    DB::table('users_details')->where('user_id', $user->userDetails->id);

    $user->userDetails()->update($request->all());

    return $user;
});

Route::delete('users/{user}', function($user) {
    User::find($user)->delete();

    return 204;
});
//--------------------------------------------------------------------------------------------------
Route::post('login','LoginController@login');
Route::post('register','RegisterController@register');

Route::get('comments', function() {
    // If the Content-Type and Accept headers are set to 'application/json',
    // this will return a JSON structure. This will be cleaned up later.
    return Comment::all();
});

Route::get('comments/{id}', function($doctor_id) {
    // If the Content-Type and Accept headers are set to 'application/json',
    // this will return a JSON structure. This will be cleaned up later.
    //return Comment::all()->where('doctor_id', $doctor_id);
    return Comment::select()->where('doctor_id', $doctor_id)->get();
});

//Route::get('articles/{article}', function($article) {
//    return Article::find($article);
//});

//--------------------------------------------------------------------------------------------------
Route::get('medical-units-rating', function() {
    $listChartsData = [];
    $med_units = MedicalUnit::with('doctors')->get();
    foreach ($med_units as &$value) {
        $sum_doctor_rating_of_an_med_unit = 0;
        $all_doc_of_med_units = $value.doctors;
        foreach ($all_doc_of_med_units as $one_of_doctor) {
            $specific_doctor_ccomments = Comment::select()->where('doctor_id', $one_of_doctor.doctor_id)->get();
            $sum_doctor_Rating = 0;
            foreach ($specific_doctor_ccomments as $one_of_doctor_comments) {
                $sum_doctor_Rating = $sum_doctor_Rating + $one_of_doctor_comments.rating;
            }
            $doctor_rating_average = $sum_doctor_Rating / sizeof($specific_doctor_ccomments.length) ;
            $sum_doctor_rating_of_an_med_unit = $sum_doctor_rating_of_an_med_unit + $doctor_rating_average;
        }
        $all_doctors_of_med_unit_average = $sum_doctor_rating_of_an_med_unit / sizeof($all_doc_of_med_units);
        $mu = new MedicalUnitChart($value.name, $all_doctors_of_med_unit_average);
        array_push($listChartsData, $mu);
    }

    return $listChartsData;
});