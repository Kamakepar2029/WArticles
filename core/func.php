<?php
include_once('jsdb.php');
use Jajo\JSONDB;
$json_db = new JSONDB('core/db');

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function add_article($author, $title, $description, $keywords, $content){
    $json_db->insert( 'posts.json', 
	[ 
        'id' => generateRandomString(15),
		'title' => $title,
		'description' => $description,
		'keywords' => $keywords,
        'author' => $author
	]  
);
}

function get_article($id){
    $users = $json_db->select( '*'  )
	->from( 'posts.json' )
	->where( [ 'id' => $id ] )
	->get();
    if (count($users) > 0){
        return $users;
    }else{
        return [];
    }
}