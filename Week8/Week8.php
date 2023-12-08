<?php
//Makes DB connection
$servername = "sql1.njit.edu";
$username = "aj727";
$password = "Pallavi@0326";
$dbname = "aj727";
$con = mysqli_connect($servername,$username,$password,$dbname);
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
else
{
    echo "CONNECTED ";
}
?>