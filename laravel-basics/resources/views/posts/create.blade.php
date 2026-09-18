<!DOCTYPE html>
<html>
<head>
    <title>Create Post</title>
</head>
<body>

<h1>Create Post</h1>

<form action="{{ route('posts.store') }}"
      method="POST">

    @csrf

    <input type="text"
           name="title"
           value="{{ old('title') }}"
           placeholder="Title">

    @error('title')
        <p>{{ $message }}</p>
    @enderror

    <br><br>

    <textarea name="content"
              rows="6"
              cols="50"></textarea>

    @error('content')
        <p>{{ $message }}</p>
    @enderror

    <br><br>

    <button type="submit">
        Save Post
    </button>

</form>

</body>
</html>