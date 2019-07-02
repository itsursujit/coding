<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

class ArticleController extends Controller
{

    public function getArticles()
    {
        $headers = [
            'Content-Type' => 'application/json',
            'Acceot' => 'application/json',
        ];

        $client = new Client(['headers' => $headers]);
        $response = $client->get('https://newsapi.org/v2/top-headlines/?country=us&category=business&apiKey=bcdfe33a085a440dbcf0a67618bb8d95')->getBody()->getContents();
        return $response;
    }
}
