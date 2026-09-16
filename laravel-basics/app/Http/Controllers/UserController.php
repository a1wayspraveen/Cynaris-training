<?php

namespace App\Http\Controllers;

class UserController extends Controller
{
    public function index()
    {
        $users = ['Praveen', 'Rahul', 'Anjali'];

        return view('users', compact('users'));
    }

    public function store()
    {
        return "User Stored Successfully";
    }
}