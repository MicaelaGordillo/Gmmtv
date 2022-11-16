<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
    header('Content-Type: application/json');
    $data = json_decode(file_get_contents("php://input"));

    $name=$data?->name;
    $date_of_birth=$data?->date_of_birth;
    $place_of_birth=$data?->place_of_birth;
    $height=$data?->height;
    $weight=$data?->weight;
    $artist_id=$data?->artist_id;

    require("./conexion.php");
    $con = returnConection();
    if(($artist_id!="") && ($name!="") && ($date_of_birth!="") && ($place_of_birth!="") && ($height!="") && ($weight!="")){
        $query = "UPDATE `artist` SET 
            `name`='{$name}',
            `date_of_birth`='{$date_of_birth}',
            `place_of_birth`='{$place_of_birth}', 
            `height`='{$height}', 
            `weight`='{$weight}'
            WHERE `artist_id`={$artist_id}";
        $registro = mysqli_query($con, $query);
        echo json_encode(["success"=>1]);
    }
    
    exit();
?>