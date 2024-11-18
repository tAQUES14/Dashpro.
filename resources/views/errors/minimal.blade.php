<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title')</title>

        <style>
            body {
                font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                margin: 0;
                padding: 0;
                background-color: #f7fafc;
            }

            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                text-align: center;
            }

            .error-code {
                font-size: 4rem;
                font-weight: bold;
                color: #718096;
                margin-bottom: 1rem;
            }

            .error-message {
                font-size: 1.5rem;
                color: #4a5568;
                margin-bottom: 2rem;
            }

            .btn {
                display: inline-block;
                padding: 12px 24px;
                font-size: 1rem;
                color: #4a5568;
                background-color: #fff;
                border: 2px solid #4a5568;
                border-radius: 8px;
                text-decoration: none;
                font-weight: bold;
                transition: all 0.3s ease-in-out;
            }

            .btn:hover {
                background-color: #4a5568;
                color: #fff;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="error-code">
                @yield('code')
            </div>
            <div class="error-message">
                @yield('message')
            </div>
            <a href="{{ route('dashboard.index') }}" class="btn">
                Voltar ao Dashboard
            </a>
        </div>
    </body>
</html>
