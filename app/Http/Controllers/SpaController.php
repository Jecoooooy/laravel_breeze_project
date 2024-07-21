<?php

namespace App\Http\Controllers;
use Illuminate\View\View;
use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function index(): View
    {
        return view('layouts.app');
    }
}
