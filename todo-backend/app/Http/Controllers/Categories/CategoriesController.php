<?php
/**
 * Created by PhpStorm.
 * User: Ahmed Maher Halima
 * Date: 12/11/2018
 * Time: 09:12 م
 */

namespace App\Http\Controllers\Categories;


use App\Http\Controllers\Controller;
use App\Http\Requests\CategoriesRequest;
use Illuminate\Support\Facades\Auth;


class CategoriesController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $user = Auth::user();
        $categories = $user->categories;
        if($categories->count() <= 0)
        {
            return response()->json(['success' => false, 'error' => "There is No Categories"], 404);
        }
        return response()->json(['success' => true, 'data'=> [ 'categories' => $categories] ], 200);
    }

    /**
     * @param CategoriesRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CategoriesRequest $request)
    {
        $user = Auth::user();
        $categories = $user->categories();
        $category = $categories->create($request->all());
        if(empty($category) || $category == null)
        {
            return response()->json(['success' => false, 'error'=> "Couldn't create the category ." ], 200);
        }
        return response()->json(['success' => true, 'data'=> [ 'category' => $category] ], 200);
    }

    /**
     * @param $id
     * @param CategoriesRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update($id, CategoriesRequest $request)
    {
        $user = Auth::user();
        $category = $user->categories()->find($id);
        if($category == null)
        {
            return response()->json(['success' => false, 'error'=> "Category Not Found" ], 404);
        }
        $category->update($request->all());
        return response()->json(['success' => true, 'data'=> [ 'category' => $category] ], 200);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $user = Auth::user();
        $category = $user->categories()->find($id);
        if($category == null)
        {
            return response()->json(['success' => false, 'error'=> "Category Not Found" ], 404);
        }
        $category->delete($id);
        return response()->json(['success' => true, 'data'=> "Category deleted successfully." ], 200);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function tasks($id)
    {
        $user = Auth::user();
        $category = $user->categories()->find($id);
        if($category == null)
        {
            return response()->json(['success' => false, 'error'=> "Category Not Found" ], 404);
        }

        $tasks = $category->tasks();
        if ($tasks->count() <= 0)
        {
            return response()->json(['success' => false, 'error'=> "Category contains no tasks" ], 404);
        }
        return response()->json(['success' => true, 'data'=> [ "tasks" => $tasks ] ], 200);
    }
}