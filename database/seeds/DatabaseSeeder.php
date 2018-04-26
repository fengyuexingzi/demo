<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'king',
            'email' => 'fengyuexingzi@gmail.com',
            'mobile' => '15692390391',
            'status' =>random_int(0,1),
            'password' => bcrypt('123456'),
            'remember_token' => str_random(10),
        ]);

        $this->call(UsersTableSeeder::class);
        $this->call(CompaniesTableSeeder::class);
        $this->call(ProjectsTableSeeder::class);
        $this->call(TasksTableSeeder::class);
        $this->call(CommentTableSeeder::class);
    }
}
