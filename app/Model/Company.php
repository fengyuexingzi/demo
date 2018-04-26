<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Company extends Model
{
    // 启用软删除
    use SoftDeletes;
    protected $dates = ['deleted_at'];

    // fillable 与 guarded  规则相斥，仅且只能使用一个
    // 允许修改
    protected $fillable = [
        'id',
        'name',
        'description',
        'user_id'
    ];

    // 禁止修改
//    protected $guarded = [
//        'id',
//        'name'
//    ];

    public function user()
    {
        return $this->belongsTo('App\Model\User');
    }

    public function projects()
    {
        return $this->hasMany('App\Model\Project');
    }

    public function comments()
    {
        return $this->morphMany('App\Model\Comment', 'commentable');
    }
}
