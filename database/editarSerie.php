<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
    header('Content-Type: application/json');
    $data = json_decode(file_get_contents("php://input"));

    $title=$data?->title;
    $gender=$data?->gender;
    $episodes=$data?->episodes;
    $issuance_period=$data?->issuance_period;
    $synopsis=$data?->synopsis;
    $link=$data?->link;
    $serie_id=$data?->serie_id;

    require("./conexion.php");
    $con = returnConection();
    if(($serie_id!="") && ($title!="") && ($gender!="") && ($episodes!="") && ($issuance_period!="") && ($synopsis!="") && ($link!="")){
        $query = "UPDATE `serie` SET 
            `title`='{$title}', 
            `gender`='{$gender}', 
            `episodes`='{$episodes}', 
            `issuance_period`='{$issuance_period}', 
            `synopsis`='{$synopsis}', 
            `link`='{$link}' 
            WHERE `serie_id`={$serie_id}";
        $registro = mysqli_query($con, $query);
        echo json_encode(["success"=>1]);
    }
    
    exit();
?>