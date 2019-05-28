<?php

namespace App\Http\Controllers;

use http\Env\Response;
use http\Exception;
use Illuminate\Http\Request;
use App\User;
use function Sodium\add;
use Symfony\Component\HttpKernel\Exception\HttpException;

class RegisterController extends Controller
{
    public function register(Request $request){
        //$user=new User;


       // print($user);
        //print ("ddd");
        try{
            $users=User::where('email',$request->email)->get();
            $user=$users[0];
        }catch(\Exception $e){
            $userController = new UserController();
            $userController->store($request);
            return $request;
        }

            print("lista are elemente");
        }

}
