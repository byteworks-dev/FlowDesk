<?php

namespace Database\Seeders;

use App\Models\ProcessTemplate;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Rene Admin',
                'email' => 'test@example.com',
                'role' => 'Administrator',
                'team' => 'Operations',
                'status' => 'active',
                'joined_at' => '2024-01-15',
            ],
            [
                'name' => 'Anna Keller',
                'email' => 'anna.keller@example.com',
                'role' => 'Administrator',
                'team' => 'HR',
                'status' => 'active',
                'joined_at' => '2023-08-01',
            ],
            [
                'name' => 'Markus Weber',
                'email' => 'markus.weber@example.com',
                'role' => 'Process Manager',
                'team' => 'IT',
                'status' => 'active',
                'joined_at' => '2023-10-12',
            ],
            [
                'name' => 'Laura Schneider',
                'email' => 'laura.schneider@example.com',
                'role' => 'Approver',
                'team' => 'Finance',
                'status' => 'active',
                'joined_at' => '2024-02-05',
            ],
            [
                'name' => 'Jonas Richter',
                'email' => 'jonas.richter@example.com',
                'role' => 'Employee',
                'team' => 'Operations',
                'status' => 'active',
                'joined_at' => '2024-04-22',
            ],
            [
                'name' => 'Miriam Hoffmann',
                'email' => 'miriam.hoffmann@example.com',
                'role' => 'Employee',
                'team' => 'Product',
                'status' => 'active',
                'joined_at' => '2024-05-13',
            ],
            [
                'name' => 'Tim Becker',
                'email' => 'tim.becker@example.com',
                'role' => 'Employee',
                'team' => 'Sales',
                'status' => 'invited',
                'joined_at' => null,
            ],
            [
                'name' => 'Sofia Wagner',
                'email' => 'sofia.wagner@example.com',
                'role' => 'Approver',
                'team' => 'Legal',
                'status' => 'active',
                'joined_at' => '2023-11-20',
            ],
            [
                'name' => 'David Klein',
                'email' => 'david.klein@example.com',
                'role' => 'Employee',
                'team' => 'Support',
                'status' => 'inactive',
                'joined_at' => '2022-09-01',
            ],
        ];

        foreach ($users as $user) {
            User::query()->updateOrCreate(
                ['email' => $user['email']],
                [
                    ...$user,
                    'password' => Hash::make('password'),
                ],
            );
        }

        $processTemplates = [
            [
                'name' => 'Antrag auf Softwarezugang',
                'category' => 'IT Services',
                'status' => 'published',
                'step_count' => 5,
                'description' => 'Standardprozess fuer neue Softwarezugriffe mit Freigabe durch Fuehrungskraft und Einrichtung durch die IT.',
                'owner_team' => 'IT',
                'published_at' => '2026-08-01 09:00:00',
            ],
            [
                'name' => 'Dokumentenfreigabe',
                'category' => 'Compliance',
                'status' => 'published',
                'step_count' => 4,
                'description' => 'Mehrstufige Pruefung und Freigabe interner Dokumente vor der Veroeffentlichung.',
                'owner_team' => 'Legal',
                'published_at' => '2026-08-04 10:30:00',
            ],
            [
                'name' => 'Arbeitsmittelbeschaffung',
                'category' => 'Operations',
                'status' => 'draft',
                'step_count' => 6,
                'description' => 'Beschaffung von Hardware, Zubehoer oder weiteren Arbeitsmitteln mit Budgetpruefung.',
                'owner_team' => 'Operations',
                'published_at' => null,
            ],
            [
                'name' => 'Onboarding neuer Mitarbeitender',
                'category' => 'HR',
                'status' => 'published',
                'step_count' => 7,
                'description' => 'Koordinierter Onboarding-Prozess fuer HR, IT, Fachbereich und neue Mitarbeitende.',
                'owner_team' => 'HR',
                'published_at' => '2026-08-07 08:45:00',
            ],
            [
                'name' => 'Interner Aenderungsantrag',
                'category' => 'Administration',
                'status' => 'archived',
                'step_count' => 3,
                'description' => 'Aeltere Vorlage fuer interne Aenderungsantraege, ersetzt durch kommende Prozessversion.',
                'owner_team' => 'Operations',
                'published_at' => '2026-07-15 14:00:00',
            ],
        ];

        foreach ($processTemplates as $processTemplate) {
            ProcessTemplate::query()->updateOrCreate(
                ['name' => $processTemplate['name']],
                $processTemplate,
            );
        }
    }
}
