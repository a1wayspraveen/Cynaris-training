<!DOCTYPE html>
<html>
<head>
    <title>Blog Posts</title>
</head>
<body>

<h1>Blog Posts</h1>

@if(session('success'))
    <p>{{ session('success') }}</p>
@endif

<a href="{{ route('posts.create') }}">
    Create New Post
</a>

<hr>

@foreach($posts as $post)

    <h3>{{ $post->title }}</h3>

    <p>{{ Str::limit($post->content, 100) }}</p>

    <a href="{{ route('posts.show', $post) }}">View</a>

    <a href="{{ route('posts.edit', $post) }}">Edit</a>

    <form action="{{ route('posts.destroy', $post) }}"
          method="POST"
          style="display:inline;">
        @csrf
        @method('DELETE')

        <button type="submit">
            Delete
        </button>
    </form>

    <hr>

@endforeach

{{ $posts->links() }}

</body>
</html>