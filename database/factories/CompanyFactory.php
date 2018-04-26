<?php

use Faker\Generator as Faker;

$factory->define(\App\Model\Company::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'user_id' => 1,
        'description' => str_random(10),
    ];
});
