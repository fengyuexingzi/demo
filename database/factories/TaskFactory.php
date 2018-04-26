<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Task::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'project_id' => 1,
        'user_id' => 1,
        'company_id' => mt_rand(1, 5),
        'days' => $faker->dayOfMonth,
        'hours' => mt_rand(10, 30),
    ];
});
