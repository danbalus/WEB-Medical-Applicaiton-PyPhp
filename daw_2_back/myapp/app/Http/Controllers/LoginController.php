<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class LoginController extends Controller
{

    public function login(Request $request){
        //$user=new User;

        $users=User::where('email',$request->email)->get();
        $user=$users[0];

        if($user != null){
            if($user->password == $request->password){
                //Session::put('user', $user->remember_token );
                return $user;
            }
        }
        return response()
            ->view('errors.404',404);
    }

}
