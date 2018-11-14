<?php
/**
 * Created by PhpStorm.
 * User: Ahmed Maher Halima
 * Date: 12/11/2018
 * Time: 09:13 م
 */

namespace App\Http\Controllers\Tasks;


use App\Http\Controllers\Controller;
use App\Http\Requests\TasksRequest;
use Illuminate\Support\Facades\Auth;

class TasksController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $user = Auth::user();
        $tasks = $user->tasks;
        if($tasks->count() <= 0)
        {
            return response()->json(['success' => false, 'error' => "There is No Tasks"], 404);
        }
        return response()->json(['success' => true, 'data'=> [ 'tasks' => $tasks] ], 200);
    }

    /**
     * @param TasksRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(TasksRequest $request)
    {
        $user = Auth::user();
        $tasks = $user->tasks();
        $task = $tasks->create($request->all());
        if(empty($task) || $task == null)
        {
            return response()->json(['success' => false, 'error'=> "Couldn't create the task ." ], 200);
        }
        return response()->json(['success' => true, 'data'=> [ 'task' => $task] ], 200);
    }

    /**
     * @param $id
     * @param TasksRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update($id, TasksRequest $request)
    {
        $user = Auth::user();
        $task = $user->tasks()->find($id);
        if($task == null)
        {
            return response()->json(['success' => false, 'error'=> "Task Not Found" ], 404);
        }
        $task->update($request->all());
        return response()->json(['success' => true, 'data'=> [ 'task' => $task] ], 200);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $user = Auth::user();
        $task = $user->tasks()->find($id);
        if($task == null)
        {
            return response()->json(['success' => false, 'error'=> "Task Not Found" ], 404);
        }
        $task->delete($id);
        return response()->json(['success' => true, 'data'=> "Task deleted successfully." ], 200);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function complete($id)
    {
        $user = Auth::user();
        $task = $user->tasks()->find($id);
        if($task == null)
        {
            return response()->json(['success' => false, 'error'=> "Task Not Found" ], 404);
        }
        $task->update(['completed' => true]);
        return response()->json(['success' => true, 'data'=> "Task completed successfully." ], 200);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function incomplete($id)
    {
        $user = Auth::user();
        $task = $user->tasks()->find($id);
        if($task == null)
        {
            return response()->json(['success' => false, 'error'=> "Task Not Found" ], 404);
        }
        $task->update(['completed' => false]);
        return response()->json(['success' => true, 'data'=> "Task Incompleted successfully." ], 200);
    }
}