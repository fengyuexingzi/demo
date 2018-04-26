<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    /**
     * The users that belong to the role.
     */
    public function users()
    {
        return $this->belongsToMany('App\Model\User');
    }

    /**
     * The nodes that belong to the role.
     */
    public function nodes()
    {
        return $this->belongsToMany('App\Model\Node');
    }
}
