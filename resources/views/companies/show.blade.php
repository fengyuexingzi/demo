@extends('layouts.app')

@section('content')

    <div class=" col-xs-9 col-sm-9 col-md-9 col-lg-9 pull-left">
        <!-- Jumbotron -->
        <div class="jumbotron">
            <h1>{{ $company->name }}</h1>
            <p class="lead">{{ $company->description }}</p>
            {{--<p><a class="btn btn-lg btn-success" href="#" role="button">Get started today</a></p>--}}
        </div>

        <!-- Example row of columns -->
        <div class="row" style="background: white;margin: 10px;">
            @foreach($company->projects as $project)
                <div class="col-lg-4">
                    <h2>{{ $project->name }}</h2>
                    <p class="text-danger">{{ $project->description }}</p>
                    <p><a class="btn btn-primary" href="/projects/{{ $project->id }}" role="button">View Project »</a>
                    </p>
                </div>
            @endforeach
        </div>

        <div class="row container-fluid">
            <form method="post" action="{{ route('comments.store') }}">
                {{ csrf_field() }}
                <input type="hidden" name="commentable_type" value="Company">
                <input type="hidden" name="commentable_id" value="{{ $company->id }}">
                <div class="class-group">
                    <label for="comment-content">Comment<span class="required">*</span> </label>
                    <textarea
                            style="resize: vertical;"
                            placeholder="Enter comment"
                            id="company_name"
                            required
                            name="body"
                            spellcheck="false"
                            rows="3"
                            class="form-control text-left"></textarea>
                </div>
                <div class="class-group">
                    <label for="comment-content">Proof of work done(Url/Photos)<span class="required">*</span>
                    </label>
                    <textarea
                            placeholder="Enter url"
                            style="resize: vertical"
                            id="comment-content"
                            required
                            name="url"
                            rows="2"
                            spellcheck="false"
                            class="form-control text-left"></textarea>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Submit">
                </div>
            </form>
        </div>

        @include('partials.comments')

    </div>

    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 pull-right">
        {{-- <div class="sidebar-module sidebar-module-inset">
             <h4>About</h4>
             <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
         </div>--}}

        <div class="sidebar-module">
            <h4>Actions</h4>
            <ol class="list-unstyled">
                <li><a href="/companies/{{ $company->id }}/edit">Edit</a></li>
                <li><a href="/projects/create">Add Project</a></li>
                <li><a href="/companies">My Companies</a></li>
                <li><a href="/companies/create">Create new Company</a></li>

                <br/>

                <li><a href="#"
                       onclick="var result = confirm('Are you sure you wish to delete this Projects?');
                        if(result){
                            event.preventDefault();
                            document.getElementById('delete_form').submit();
                        }
                        ">
                        Delete
                    </a>

                    <form id="delete_form" action="{{ route('companies.destroy',[$company->id]) }}"
                          method="POST" style="display:none;">
                        <input type="hidden" name="_method" value="delete">
                        {{ csrf_field() }}
                    </form>

                </li>
            </ol>
        </div>

        {{--<div class="sidebar-module">
            <h4>Members</h4>
            <ol class="list-unstyled">
                <li><a href="#">March 2014</a></li>
            </ol>
        </div>--}}
    </div>

@endsection