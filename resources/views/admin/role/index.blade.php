@extends('layouts.app')

@section('content')

    <div class="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">

        <div class="panel panel-primary ">
            <div class="panel-heading">Roles</div>
            <div class="panel-body">

                <ul class="list-group">
                    @foreach($roles as $role)
                       <a href="roles/{{ $role->id }}" class=""><li class="list-group-item">{{ $role->name }}</li></a>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>

@endsection