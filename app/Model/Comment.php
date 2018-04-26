<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'body',
        'url',
        'user_id',
        'commentable_id',       // 相关联模型主键
        'commentable_type',     // 相关联模型名称
    ];

    public function commentable()
    {
        // 多态
        return $this->morphTo();
    }

    public function user()
    {
        return $this->hasOne('App\Model\User', 'id', 'user_id');
    }
}
