<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Node extends Model
{
    /**
     * The roles that belong to the node.
     */
    public function nodes()
    {
        return $this->belongsToMany('App\Model\Role');
    }
}
