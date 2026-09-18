# Laravel MVC Architecture Demo

## Features

- MVC Pattern
- CRUD Operations
- Route Model Binding
- Blade Templates
- Eloquent Model

## Screenshots

Add MVC diagram here.

## Request Lifecycle

HTTP Request
→ Route
→ Controller
→ Model
→ Database
→ View
→ Response

// Get posts where id > 5
Post::where('id', '>', 5)->get();

// Get posts ordered by latest
Post::orderBy('created_at', 'desc')->get();

// Eager loading comments
Post::with('comments')->get();

// Combined query
Post::with('comments')
    ->where('id', '>', 5)
    ->orderBy('created_at', 'desc')
    ->get();

# Laravel Blog CRUD Application

## Features

- Create Blog Posts
- View Blog Posts
- Update Blog Posts
- Delete Blog Posts
- Form Request Validation
- CSRF Protection
- Pagination using Eloquent

## Requirements

- PHP 8+
- Composer
- MySQL
- Laravel

## Installation

```bash
git clone <repository-url>
cd laravel-basics

composer install

cp .env.example .env

php artisan key:generate
```

Configure database in `.env`

```bash
php artisan migrate

php artisan serve
```

Open:

http://127.0.0.1:8000/posts

## Validation Rules

Title:
- Required
- Minimum 3 characters
- Maximum 255 characters
- Unique

Content:
- Required
- Minimum 10 characters