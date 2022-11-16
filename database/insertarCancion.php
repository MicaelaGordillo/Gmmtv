<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
    header('Content-Type: application/json');
    $data = json_decode(file_get_contents("php://input"));

    $name=$data?->name;
    $description=$data?->description;
    $link=$data?->link;

    require("./conexion.php");
    $con = returnConection();
    if(($name!="") && ($description!="") && ($link!="")){
        $registro = mysqli_query($con ,"INSERT INTO `song` (`name`, `description`, `link`) VALUES ('$name', '$description', '$link')");
        
        class Result{}
        $response = new Result();
        $response->resultado = 'OK';
        $response->mensaje ='Canción agregada';
        echo json_encode($response);
    }
    exit();
?>
