<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requestes-Whit, Content-Type, Accept');
    header('Content-Type: application/json');
    $data = json_decode(file_get_contents("php://input"));

    $name=$data?->name;
    $description=$data?->description;
    $link=$data?->link;
    $song_id=$data?->song_id;

    require("./conexion.php");
    $con = returnConection();
    if(($song_id!="") && ($name!="") && ($description!="") && ($link!="")){
        $query = "UPDATE `song` SET 
            `name`='{$name}', 
            `description`='{$description}',
            `link`='{$link}' 
            WHERE `song_id`={$song_id}";
        $registro = mysqli_query($con, $query);
        echo json_encode(["success"=>1]);
    }
    
    exit();
?>