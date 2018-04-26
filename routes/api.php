
<?php

    Route::resource('k_tasks', 'KTasksController',[
        'except' => ['create','edit','show']
    ]);