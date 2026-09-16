@extends('layouts.app')

@section('content')

<h1>User List</h1>

@foreach($users as $user)
    <p>{{ $user }}</p>
@endforeach

@endsection