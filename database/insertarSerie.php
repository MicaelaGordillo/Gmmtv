<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
    header('Content-Type: application/json');
    $data = json_decode(file_get_contents("php://input"));

    $title=$data?->title;
    $poster=$data?->poster;
    $gender=$data?->gender;
    $episodes=$data?->episodes;
    $issuance_period=$data?->issuance_period;
    $synopsis=$data?->synopsis;
    $link=$data?->link;

    require("./conexion.php");
    $con = returnConection();
    if(($title!="") && ($gender!="") && ($episodes!="") && ($issuance_period!="") && ($synopsis!="") && ($link!="")){
        $registro=mysqli_query($con ,"INSERT INTO `serie` (`title`, `poster`, `gender`, `episodes`, `issuance_period`, `synopsis`, `link`) VALUES
        ('$title', '$poster', '$gender', '$episodes', '$issuance_period', '$synopsis', '$link')");
        
        class Result{}
        $response = new Result();
        $response->resultado = 'OK';
        $response->mensaje ='Serie agregada';
        echo json_encode($response);
    }
    exit();
?>
