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
</head>

<body>
<div class="mobile-burger burger is-hidden-desktop" data-target="#doc-menu">
    <span></span>
    <span></span>
    <span></span>
</div>
<div class="columns is-gapless">
    <div id="doc-menu" class="column is-2 has-background-grey-lighter menu is-mobile">
        <section class="section">
            <h1 class="title is-4 has-text-weight-semibold has-text-centered">Doku <span class="is-size-5 has-text-primary has-text-weight-light">documentation</span></h1>
        </section>

        <ul class="menu-list">
            <li class="menu-item has-dropdown">
                <a class="menu-title">
                    Quick Start
                    <span class="menu-caret"></span>
                </a>
                <ul class="menu-dropdown">
                    <li><a class="menu-item" href="https://demo.creativebulma.net/doku/#features">Features</a></li>
                    <li><a class="menu-item" href="https://demo.creativebulma.net/doku/#content">Content</a></li>
                    <li><a class="menu-item" href="https://demo.creativebulma.net/doku/#get-started">Get Started</a></li>
                    <li><a class="menu-item" href="https://demo.creativebulma.net/doku/#html-structure">HTML Structure</a></li>
                    <li><a class="menu-item" href="https://demo.creativebulma.net/doku/#templates">Templates</a></li>
                </ul>
            </li>
            <li>
                <a class="menu-item" href="https://demo.creativebulma.net/doku/customization">Customization</a>
            </li>
            <li>
                <a class="menu-item" href="https://demo.creativebulma.net/doku/changelog">Changelog</a>
            </li>
        </ul>

    </div>
    <div class="column">
        <div class="hero is-light">
            <div class="hero-body">
                <div class="columns">
                    <div class="column is-two-fifths">
                        <div class="dropdown is-hoverable">
                            <div class="dropdown-trigger">
                                <div class="box" aria-haspopup="true" aria-controls="dropdown-menu4">
                                    <article class="media">
                                        <div class="media-left">
                                            <figure class="image is-64x64">
                                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                                            </figure>
                                        </div>
                                        <div class="media-content">
                                            <div class="content">
                                                <p>
                                                    <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                                    <br>
                                                    Lorem ipsum dolor sit amet
                                                </p>
                                            </div>
                                            <nav class="level is-mobile">
                                                <div class="level-left">
                                                    <a class="level-item" aria-label="reply">
                                                        <span class="icon is-small">
                                                          <i class="fas fa-reply" aria-hidden="true"></i>
                                                        </span>
                                                    </a>
                                                    <a class="level-item" aria-label="retweet">
                                                        <span class="icon is-small">
                                                          <i class="fas fa-retweet" aria-hidden="true"></i>
                                                        </span>
                                                    </a>
                                                    <a class="level-item" aria-label="like">
                                                        <span class="icon is-small">
                                                          <i class="fas fa-heart" aria-hidden="true"></i>
                                                        </span>
                                                    </a>
                                                </div>
                                            </nav>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                                <div class="dropdown-content">
                                    <div class="dropdown-item">
                                        <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                                    </div>
                                    <hr class="dropdown-divider">
                                    <div class="dropdown-item">
                                        <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                                    </div>
                                    <hr class="dropdown-divider">
                                    <a href="#" class="dropdown-item">
                                        This is a link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-two-fifths is-pulled-right">
                        <div class="container is-right">
                            <h1 class="title is-2 is-spaced has-text-weight-semibold">Quick-Start</h1>

                            <h2 class="subtitle is-6 has-text-weight-light">Doku is a clean documentation template based on bulma.io.</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <section class="section">
            <div class="container is-fluid">
                <a href="#prerequisites" id="prerequisites" class="title is-4 has-text-weight-normal is-spaced anchor">
                    <span class="anchor-name">Prerequisites</span>
                </a>

                <p> To customize the template you must have <strong>node, npm and Gulp</strong> installed in your computer.</p>
                <ul class="step-text">
                    <li>
                        <h6 class="title is-6">node and npm</h6>
                        <p>Installation guide of node can be found <a href="https://nodejs.org/en/" target="_blank">here</a>. As npm comes bundled with node, separate installation of npm is not needed.<br />
                            If you have installed them, just checkout to the root folder and run the following command.</p>
                        <p><figure class="highlight"><pre><code class="language-shell" data-lang="shell">npm install</code></pre></figure></p>
                        <p>You can see that a folder <code>node_modules</code> is generated in your root folder with all dependencies files! </p>
                    </li>
                </ul>
                <h6 class="title is-5 has-text-centered"><span class="icon has-text-success">
              <i class="fas fa-thumbs-up"></i>
            </span> You are now ready to customize Doku.</h6>

                <a href="#compilation" id="compilation" class="title is-4 has-text-weight-normal is-spaced anchor">
                    <span class="anchor-name">Compilation</span>
                </a>

                <ul>
                    <li>
                        <h6 class="title is-6">Compile only</h6>
                        <p><figure class="highlight"><pre><code class="language-shell" data-lang="shell">jekyll</code></pre></figure></p>
                        <p class="helper">Compile your site and export it into the <code>/doc</code> folder.</p>
                    </li>
                    <li>
                        <h6 class="title is-6">Compile and Test</h6>
                        <p><figure class="highlight"><pre><code class="language-shell" data-lang="shell">jekyll serve</code></pre></figure></p>
                        <p>Compile your site and run a local server to test it.</p>
                    </li>
                </ul>

            </div>
        </section>
    </div>
</div>

<script src="{{asset('js/manifest.js')}}"></script>
<script src="{{asset('js/vendor.js')}}"></script>
<script src="{{asset('js/app.js')}}"></script>
</body>
</html>
