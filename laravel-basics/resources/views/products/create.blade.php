<h1>Create Product</h1>

<form action="/products" method="POST">
    @csrf

    <input type="text" name="name">

    <textarea name="description"></textarea>

    <input type="number" step="0.01" name="price">

    <button type="submit">Save</button>
</form>