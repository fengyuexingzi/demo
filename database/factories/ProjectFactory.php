<?php

use Faker\Generator as Faker;

$factory->define(\App\Model\Project::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => str_random(10),
        'company_id' => mt_rand(1, 5),
        'user_id' => 1,
        'days' => $faker->dayOfMonth,
    ];
});
