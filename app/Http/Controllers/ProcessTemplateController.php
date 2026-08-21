<?php

namespace App\Http\Controllers;

use App\Models\ProcessTemplate;
use Inertia\Inertia;
use Inertia\Response;

class ProcessTemplateController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Processes/Index', [
            'processTemplates' => ProcessTemplate::query()
                ->latest('updated_at')
                ->get([
                    'id',
                    'name',
                    'category',
                    'status',
                    'step_count',
                    'description',
                    'owner_team',
                    'published_at',
                    'updated_at',
                ]),
        ]);
    }
}
