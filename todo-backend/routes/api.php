<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('register', 'Auth\AuthController@register');
Route::post('login', 'Auth\AuthController@login');

Route::group(['middleware' => ['jwt.auth']], function() {
    Route::get('logout', 'Auth\AuthController@logout');
    // user categories
    Route::get('user/categories/{id}/tasks', 'Categories\CategoriesController@tasks');
    Route::resource('user/categories', 'Categories\CategoriesController');
    // user tasks
    Route::get('user/tasks/{id}/complete', 'Tasks\TasksController@complete');
    Route::get('user/tasks/{id}/incomplete', 'Tasks\TasksController@incomplete');
    Route::resource('user/tasks', 'Tasks\TasksController');
});

