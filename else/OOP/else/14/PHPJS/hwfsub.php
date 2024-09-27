<html>
<head>
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
 
<?php

 $a = isset($_GET['a']) ? $_GET['a'] : '';

 echo $a."<br>";

 file_put_contents("data", $a, FILE_APPEND | LOCK_EX);

 $b = file_get_contents("data");

 echo $b."<br>";

 echo "1:".substr_count($b, "1")."<br>";

 echo "2:".substr_count($b, "2")."<br>";

 echo "3:".substr_count($b, "3")."<br>";

 echo "4:".substr_count($b, "4")."<br>";
 
$red_count = substr_count($b, '1');

 $blue_count = substr_count($b, '2');

 $green_count = substr_count($b, '3');

 $orange_count = substr_count($b, '4');

 ?>
 
<div style="width:400px; text-align:center">
<canvas id="mycanvas" width="400" height="300"></canvas>
<h2>好きな色調査</h2>
</div>
 
<script>

 var ctx = document.getElementById('mycanvas');

 var myChart = new Chart(ctx, {

   type: 'radar',

   data: {

     labels: ['赤', '青', '緑', '橙'],

     datasets: [{

       label: '好きな色',

       data: [],

       borderColor: 'black',

       backgroundColor: 'rgba(255, 99, 132, 0.2)',

     }],

   },

   options: {

     scales: {

       r: {

         min: 0,

         max: 10,

       },

     },

   },

 });
</script>
 
</body>
</html>