<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Личный сайт студента GeekBrains</title>
    <link rel="stylesheet" href="style.css">
    <script src="script/guess.js"></script>
</head>
<body>

<div class="content">
    <?php include('header.php'); ?>

    <div class="contentWrap">
        <div class="content">
            <div class="center">

                <h1>Игра угадайка</h1>

                <div class="box">

                    <p id="info">Угадайте число от 0 до 100, у вас есть <b>3</b> попытки</p>
                    <input type="number" id="userAnswer" required>
                    <br>
                    <a href="#" onClick="guess();" id="button">Начать</a>
                </div>

            </div>
        </div>
    </div>


</div>

<?php include('footer.php'); ?>

</body>
</html>