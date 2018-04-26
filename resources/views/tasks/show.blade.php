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

        <div class="row">
            <div class="col-md-12 col-sm-12  col-xs-12 col-lg-12">
                <!-- Fluid width widget -->
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            <span class="glyphicon glyphicon-comment"></span> 
                            Recent Comments
                        </h3>
                    </div>
                    <div class="panel-body">
                        <ul class="media-list">
                            @foreach($project->comments as $comment)
                                <li class="media">
                                    <div class="media-left">
                                        <img src="http://placehold.it/60x60" class="img-circle">
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">

                                            <small>
                                                <a href="users/{{ $comment->user->id }}">{{ $comment->user->name }}{{ $comment->user->email }}</a>
                                                <br>
                                                commented on {{ $comment->created_at }}
                                            </small>
                                        </h4>
                                        <p>{{ $comment->body }}</p>
                                        <b>Proof:</b>
                                        <p>{{ $comment->url }}</p>
                                    </div>
                                </li>
                            @endforeach
                        </ul>
                        <a href="#" class="btn btn-default btn-block">More Events »</a>
                    </div>
                </div>
                <!-- End fluid width widget -->
            </div>
        </div>

    </div>

    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 pull-right">

        <div class="sidebar-module">
            <h4>Actions</h4>
            <ol class="list-unstyled">
                <li><a href="/projects/{{ $project->id }}/edit">Edit</a></li>
                <li><a href="/projects/create">Add Task</a></li>
                <li><a href="/projects">My Projects</a></li>
                <li><a href="/project/create">Create new Project</a></li>

                <br/>

                @if($project->user_id == Auth::user()->id)

                    <li><a href="#"
                           onclick="var result = confirm('Are you sure you wish to delete this Projects?');
                        if(result){
                            event.preventDefault();
                            document.getElementById('delete_form').submit();
                        }
                        ">
                            Delete
                        </a>

                        <form id="delete_form" action="{{ route('projects.destroy',[$project->id]) }}"
                              method="POST" style="display:none;">
                            <input type="hidden" name="_method" value="delete">
                            {{ csrf_field() }}
                        </form>

                    </li>
                @endif
            </ol>
        </div>

    </div>

@endsection