<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'id',
        'name',
        'description',
        'user_id',
        'company_id',
        'days',
    ];

    protected function user()
    {
        return $this->belongsToMany('App\Model\User');
    }

    public function company()
    {
        return $this->belongsTo('App\Model\Company');
    }

    public function comments()
    {
        return $this->morphMany('App\Model\Comment', 'commentable');
    }

    public function users()
    {
        return $this->belongsToMany('App\Model\User','project_users')
            ->withPivot('id','created_at');
        //->withTimestamps()
        //->as('subscription');
        //return $this->belongsToMany('App\User', 'project_user',  'project_id','user_id')->withPivot('id');
    }
}
