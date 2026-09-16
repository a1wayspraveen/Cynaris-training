<form action="/products/{{ $product->id }}" method="POST">

    @csrf
    @method('PUT')

    <input
        type="text"
        name="name"
        value="{{ $product->name }}"
    >

    <textarea name="description">
        {{ $product->description }}
    </textarea>

    <input
        type="number"
        name="price"
        value="{{ $product->price }}"
    >

    <button>Update</button>

</form>