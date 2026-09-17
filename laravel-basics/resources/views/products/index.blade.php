<h1>Products</h1>

<a href="/products/create">Add Product</a>

@foreach($products as $product)
    <p>{{ $product->name }}</p>
@endforeach