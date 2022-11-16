<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
    header('Content-Type: application/json');

    require("./conexion.php");
    $con = returnConection();
    $registro=mysqli_query($con ,"delete from artist where artist_id=$_GET[artist_id]");

    class Result{}
    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje ='Artista borrado';
    echo json_encode($response);
    
?>