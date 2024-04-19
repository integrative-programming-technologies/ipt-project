<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Mail\ConfirmEmail;
use Illuminate\Support\Str;
use Illuminate\Http\JsonResponse;

class RegisterController extends BaseController
{
    public function register(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $input['confirmation_token'] = Str::random(60);

        try {
            $user = User::create($input);
            Mail::to($user->email)->send(new ConfirmEmail($user)); // Send confirmation email
            return response()->json(['message' => 'User registered successfully. Please check your email to confirm.']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Registration failed.'], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function confirmEmail(Request $request): JsonResponse
    {
        $user = User::where('confirmation_token', $request->confirmation_token)->first();

        if (!$user) {
            return response()->json(['error' => 'Invalid confirmation token.'], JsonResponse::HTTP_BAD_REQUEST);
        }

        $user->confirmation_token = null;
        $user->email_verified_at = now();
        $user->save();

        return response()->json(['message' => 'Email confirmed successfully.']);
    }
}
