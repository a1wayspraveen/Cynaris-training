<!DOCTYPE html>
<html>
<head>
    <title>View Post</title>
</head>
<body>

<h1>{{ $post->title }}</h1>

<p>{{ $post->content }}</p>

<a href="{{ route('posts.index') }}">
    Back
</a>

</body>
</html>