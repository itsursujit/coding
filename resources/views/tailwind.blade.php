<!DOCTYPE html>
<html lang="en" class="route-index">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Clean documentation template">

    <title>Documentation</title>

    <link href="{{asset('css/vendor.css')}}" rel="stylesheet">
    <link href="{{asset('css/app.css')}}" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

    <!-- Load Font Awesome 5 -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script>

    <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
    <style>

    </style>
</head>

<body class="bg-chosen">
<div id="app">
    <div class="w-full">
        <main class="flex">
            <aside class="w-1/6 pl-4 pr-4 p-6 bg-white shadow-xl h-screen text-sm">
                <header class="py-3 mb-8">
                    <img src="/img/logo.svg" alt="Laracasts" class="mx-auto">
                </header>
                <section class="mb-8">
                    {{--<div class="max-w-sm mx-auto overflow-hidden">
                        <div class="sm:flex sm:items-center px-6 py-4">
                            <img class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-12 sm:h-18 rounded-full" src="https://randomuser.me/api/portraits/women/17.jpg" alt="Woman's Face">
                            <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                                <p class="text-xl leading-tight">Erin Lindford</p>
                                <p class="text-sm leading-tight text-gray-600">Customer Support Specialst</p>
                                <div class="mt-4">
                                    <button class="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Message</button>
                                </div>
                            </div>
                        </div>
                    </div>--}}
                    <div class="rounded rounded-t-lg overflow-hidden max-w-xs my-3">
                        {{--<img src="https://i.imgur.com/dYcYQ7E.png" class="w-full" />--}}
                        <div class="flex justify-center{{-- -mt-8--}}">
                            <img src="https://i.imgur.com/8Km9tLL.jpg" class="rounded-full border-solid border-white border-2{{-- -mt-3--}}">
                        </div>
                        <div class="text-center px-3 pb-6 pt-2">
                            <h3 class="text-black text-sm bold font-sans">Olivia Dunham</h3>
                            <p class="mt-2 font-sans font-light text-grey-dark">Hello, i'm from another the other side!</p>
                        </div>
                        <div class="flex justify-center pb-3 text-grey-dark">
                            <div class="text-center mr-3 border-r pr-3">
                                <h2>34</h2>
                                <span>Photos</span>
                            </div>
                            <div class="text-center">
                                <h2>42</h2>
                                <span>Friends</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="mb-8">
                    <h5 class="uppercase font-bold mb-3">Personal</h5>
                    <ul class="list-reset">
                        <li class="text-sm leading-loose hover:bg-chosen px-2"><router-link class="text-black flex" to="/">Home</router-link></li>
                        <li class="text-sm leading-loose hover:bg-chosen px-2"><router-link class="text-black flex" to="about">About</router-link></li>
                    </ul>
                </section>
                <section class="mb-8">
                    <h5 class="uppercase font-bold mb-3">The Doodles</h5>
                    <ul class="list-reset">
                        <li class="text-sm leading-loose hover:bg-chosen px-2"><router-link class="text-black flex" to="/">Home</router-link></li>
                        <li class="text-sm leading-loose hover:bg-chosen px-2"><router-link class="text-black flex" to="about">About</router-link></li>
                    </ul>
                </section>
            </aside>
            <div class="primary flex-1">
                <nav class="p-3 mb-8 bg-white text-sm border-solid border-gray-200 border-b-2 border-l-2">
                    <form>
                        {{--<input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-3/5 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" id="inline-full-name" type="text" value="Jane Doe">--}}
                        <input class="appearance-none block w-3/5 bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
                        <button class="py-2 px-4 bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline">
                            Sign Up
                        </button>
                    </form>
                </nav>
                <div class="pl-4 pr-4">
                    <router-view></router-view>
                </div>
            </div>
        </main>
    </div>
</div>
<script src="{{asset('js/manifest.js')}}"></script>
<script src="{{asset('js/vendor.js')}}"></script>
<script src="{{asset('js/app.js')}}"></script>
</body>
</html>
