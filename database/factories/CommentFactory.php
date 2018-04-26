<?php

use Faker\Generator as Faker;

$factory->define(\App\Model\Comment::class, function (Faker $faker) {
    return [
        'body' => $faker->name,
        'user_id' => 1,
        'url' => str_random(10),
        'commentable_id' => random_int(1, 10),
        'commentable_type' => 'Project',
    ];
});
