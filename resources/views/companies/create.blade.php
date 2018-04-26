@extends('layouts.app')

@section('content')

    <div class=" col-xs-9 col-sm-9 col-md-9 col-lg-9 pull-left">

        <!-- Example row of columns -->
        <div class="row col-xs-12 col-sm-12 col-md-12 col-lg-12" style="background: white;margin: 10px;">

            <form method="post" action="{{ route('companies.store') }}">

                {{ csrf_field() }}

                <div class="class-group">
                    <label for="company_name">Name<span class="required">*</span> </label>
                    <input
                            placeholder="Enter name"
                            id="company_name"
                            required
                            name="name"
                            spellcheck="false"
                            class="form-control"
                    />
                </div>

                <div class="class-group">
                    <label for="company_content">Description</label>
                    <textarea placeholder="Enter description"
                              style="resize: vertical"
                              id="company_content"
                              name="description"
                              rows="5"
                              spellcheck="false"
                              class="form-control  text-left">
                    </textarea>
                </div>

                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Submit">
                </div>

            </form>

        </div>
    </div>

    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 pull-right">

        <div class="sidebar-module">
            <h4>Actions</h4>
            <ol class="list-unstyled">
                <li><a href="/companies ">My companies</a></li>
            </ol>
        </div>

    </div>

@endsection