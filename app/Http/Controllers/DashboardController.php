<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    // Dashboard
    public function index()
    {
        // Retorna a view com a variável de erro se existir
        return view('dashboard.index', ['menu' => 'dashboard', 'error' => session('error')]);
    }
}
