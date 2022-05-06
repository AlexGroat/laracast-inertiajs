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
            /* grab the auth user, check if that user is the current user that is wrapped 
            in the user resource */
            $this->mergeWhen(Auth::user()->is($this), [
                'email' => $this->email
            ])
        ];
    }
}
