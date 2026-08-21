<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Users/Index', [
            'users' => User::query()
                ->orderBy('name')
                ->get([
                    'id',
                    'name',
                    'email',
                    'role',
                    'team',
                    'status',
                    'joined_at',
                ]),
        ]);
    }
}
