<?php
    function returnConection(){
        $con = mysqli_connect('localhost', 'root', '', 'gmmtv');
        return $con;
    }
?>