<?php

namespace App\Http\Controllers;

use App\Model\Company;
use App\Model\Project;
use App\Model\ProjectUser;
use App\Model\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            $projects = Project::where('user_id', Auth::user()->id)->get();

            return view('projects.index', ['projects' => $projects]);
        }

        return view('auth.login');
    }

    public function addUser(Request $request)
    {
        $project = Project::find($request->input('project_id'));


        if (Auth::user()->id == $project->user_id) {
            $user = User::find('email', $request->input('email'));

            // check if user is already added to the project
            $projectUser = ProjectUser::where('user_id', $user->id)
                ->where('project_id', $project->id)
                ->first();

            if ($projectUser) {
                return redirect()->route('projects.show', ['project' => $project->id])
                    ->with('errors', $request->input('email') . ' is already a member of this project');
            }

            if ($user && $project) {
                $project->users()->attach($user->id, ['updated_at' => now()]); // toggle
                return redirect()->route('projects.show', ['project' => $project->id])
                    ->with('success', $request->input('email') . 'was added to project successfully');
            }
        }

        return redirect()->route('projects.show', ['project' => $project->id])
            ->with('errors', 'Error adding to project');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param null $company_id
     * @return \Illuminate\Http\Response
     */
    public function create($company_id = null)
    {
        $companies = null;
        if (!$company_id) {
            $companies = Company::where('user_id', Auth::user()->id)->get();
        }
        return view('projects.create', ['company_id' => $company_id, 'companies' => $companies]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Auth::check()) {

            $project = Project::create([
                'name' => $request->input('name'),
                'description' => $request->input('description'),
                'company_id' => $request->input('company_id'),
                'days' => 20,
                'user_id' => Auth::user()->id
            ]);

            if ($project) {
                return redirect()->route('projects.show', ['project' => $project->id])
                    ->with('success', 'Project created successfully');
            }
        }

        return back()->withInput()->with('errors', 'Error creating new project');
    }

    /**
     * Display the specified resource.
     *
     * @param Project $project
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show(Project $project)
    {
        $comments = $project->comments;

        return view('projects.show', compact('project', 'comments'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Project $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        return view('projects.edit', ['project' => $project]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  Project $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        $projectUpdate = $project->update([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
        ]);
        if ($projectUpdate) {
            return redirect()->route('projects.show', $project->id)
                ->with('success', 'Project updated successfully');
        }
        // redirect
        return back()->withInput();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Project $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        $findProject = Project::find($project->id);
        if ($findProject->delete()) {
            return redirect()->route('projects.index')
                ->with('success', 'Project deleted successfully');
        }

        return back()->withInput()
            ->with('error', 'Project could not be deleted');
    }
}
