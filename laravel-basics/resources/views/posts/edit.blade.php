<!DOCTYPE html>
<html>
<head>
    <title>Edit Post</title>
</head>
<body>

<h1>Edit Post</h1>

<form action="{{ route('posts.update', $post) }}"
      method="POST">

    @csrf
    @method('PUT')

    <input type="text"
           name="title"
           value="{{ old('title', $post->title) }}">

    @error('title')
        <p>{{ $message }}</p>
    @enderror

    <br><br>

    <textarea name="content"
              rows="6"
              cols="50">{{ old('content', $post->content) }}</textarea>

    @error('content')
        <p>{{ $message }}</p>
    @enderror

    <br><br>

    <button type="submit">
        Update Post
    </button>

</form>

</body>
</html>