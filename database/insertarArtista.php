<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
    header('Content-Type: application/json');
    $data = json_decode(file_get_contents("php://input"));

    $name=$data?->name;
    $picture=$data?->picture;
    $date_of_birth=$data?->date_of_birth;
    $place_of_birth=$data?->place_of_birth;
    $height=$data?->height;
    $weight=$data?->weight;

    require("./conexion.php");
    $con = returnConection();
    if(($name!="") && ($picture!="") && ($date_of_birth!="") && ($place_of_birth!="") && ($height!="") && ($weight!="")){
        $registro = mysqli_query($con ,"INSERT INTO `artist` (`name`, `picture`, `date_of_birth`, `place_of_birth`, `height`, `weight`) VALUES  ('$name', '$picture', '$date_of_birth', '$place_of_birth', '$height', '$weight')");
        
        class Result{}
        $response = new Result();
        $response->resultado = 'OK';
        $response->mensaje ='Artista agregado/a';
        echo json_encode($response);
    }
    exit();
?>