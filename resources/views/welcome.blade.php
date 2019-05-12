<!DOCTYPE html>
<html lang="en" class="route-index">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Clean documentation template">

    <title>Documentation</title>

    <link rel="canonical" href="https://demo.creativebulma.net/doku/">

    <link href="{{asset('css/vendor.css')}}" rel="stylesheet">
    <link href="{{asset('css/app.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

    <!-- Load Font Awesome 5 -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script>

    <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
    <style>

    </style>
</head>
    <div id="app">
        <router-view></router-view>

        <br>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
    </div>
<body>

<script src="{{asset('js/manifest.js')}}"></script>
<script src="{{asset('js/vendor.js')}}"></script>
<script src="{{asset('js/app.js')}}"></script>
</body>
</html>
