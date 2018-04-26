@extends('layouts.app')

@section('content')

    <div class=" col-xs-9 col-sm-9 col-md-9 col-lg-9 pull-left">
        <!-- Jumbotron -->
        <div class="well well-lg">
            <h1>{{ $project->name }}</h1>
            <p class="lead">{{ $project->description }}</p>
        </div>

        <div class="row container-fluid">
            <form method="post" action="{{ route('comments.store') }}">
                {{ csrf_field() }}
                <input type="hidden" name="commentable_type" value="Project">
                <input type="hidden" name="commentable_id" value="{{ $project->id }}">
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

        <div class="sidebar-module">
            <h4>Actions</h4>
            <ol class="list-unstyled">
                <li><a href="/projects/{{ $project->id }}/edit"><i class="fa fa-edit" aria-hidden="true"></i>Edit</a>
                </li>
                <li><a href="/projects/create"><i class="fa fa-plus" aria-hidden="true"></i>Add Task</a></li>
                <li><a href="/projects"><i class="fa fa-user" aria-hidden="true"></i>My Projects</a></li>
                <li><a href="/project/create">Create new Project</a></li>

                <br/>

                @if($project->user_id == Auth::user()->id)

                    <li><a href="#"
                           onclick="var result = confirm('Are you sure you wish to delete this Projects?');
                        if(result){
                            event.preventDefault();
                            document.getElementById('delete_form').submit();
                        }
                        "><i class="fa fa-minus" aria-hidden="true"></i>
                            Delete
                        </a>

                        <form id="delete_form" action="{{ route('projects.destroy',[$project->id]) }}"
                              method="post" style="display:none;">
                            <input type="hidden" name="_method" value="delete">
                            {{ csrf_field() }}
                        </form>

                    </li>
                @endif
            </ol>

            <hr/>

            <h4>Add members</h4>
            <div class="row">
                <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <form id="add-user" action=" {{ route('projects.addUser',[$project->id]) }} " method="get">
                        <input type="hidden" class="form-control" name="project_id" value="{{ $project->id }}"/>
                        <div class="input-group">
                            <input type="text" class="form-control" name="email" placeholder="Email"/>
                            <span class="input-group-btn">
                                <button class="btn btn-default" type="submit">Add!</button>
                             </span>
                        </div>
                    </form>
                </div>
            </div>

            <br>

            <h4>Team Members</h4>
            <ol class="list-unstyled">
                @foreach($project->users as $user)
                    <small>
                        <li><a href="#">{{ $user->email }} {{ $user->pivot->id }}</a></li>
                    </small>
                @endforeach
            </ol>

        </div>

    </div>

@endsection