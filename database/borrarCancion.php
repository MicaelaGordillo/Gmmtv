<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
    header('Content-Type: application/json');

    require("./conexion.php");
    $con = returnConection();
    $registro=mysqli_query($con ,"delete from song where song_id=$_GET[song_id]");

    class Result{}
    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje ='Canción borrada';
    echo json_encode($response);
    
?>