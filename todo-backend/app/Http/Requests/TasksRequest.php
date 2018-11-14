<?php

namespace App\Http\Requests;


class TasksRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'title' => 'required'
        ];
        if($this->has('category_id'))
        {
            $user = $this->user();
            $userCategories = $user->categories()->pluck('id')->toArray();
            $rules['category_id'] = 'in:'.implode(',', $userCategories);
        }
        return $rules;
    }
}
