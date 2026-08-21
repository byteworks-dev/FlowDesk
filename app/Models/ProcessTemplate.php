<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'name',
    'category',
    'status',
    'step_count',
    'description',
    'owner_team',
    'published_at',
])]
class ProcessTemplate extends Model
{
    protected function casts(): array
    {
        return [
            'published_at' => 'datetime',
        ];
    }
}
