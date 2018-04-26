@extends('layouts.app')

@section('content')

    <div class="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">

        <div class="panel panel-primary ">
            <div class="panel-heading">Companies <a class="pull-right btn btn-primary btn-sm" href="/companies/create">Create Company</a></div>
            <div class="panel-body">

                <ul class="list-group">
                    @foreach($companies as $company)
                       <a href="companies/{{ $company->id }}" class=""><li class="list-group-item">{{ $company->name }}</li></a>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>

@endsection