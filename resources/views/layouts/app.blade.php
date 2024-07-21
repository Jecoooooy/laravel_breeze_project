<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>dashboard</title>

	@vite('resources/css/app.css')
</head>
<body>
	<div id="app">
        <!-- <App csrf-token="{{ csrf_token() }}"></App> -->
		<App></App>
    </div>
	@vite('resources/js/app.js')

	<script>window.user = @json(auth()->user());</script>

</body>
</html>