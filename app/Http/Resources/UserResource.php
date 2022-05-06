<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // explicit return these values in the json object
        return [
            'id' => $this->id,
            'name' => $this->name,
            'can' => [
                'createUser' => Auth::user()->can('create', $this->resource)
            ]
        ];
    }
}
