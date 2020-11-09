<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Личный сайт студента GeekBrains</title>
    <link rel="stylesheet" href="style.css">
    <script src="script/puzzle.js"></script>
</head>
<body>

<div class="content">
    <?php include('header.php'); ?>

    <div class="contentWrap">
        <div class="content">
            <div class="center">

                <h1>Игра в загадки</h1>

                <div id="box" class="box">

                    <p>Что можно увидеть с закрытыми глазами?</p>
                    <input type="text" id="userAnswer1">

                    <p>Какой болезнью никто не болеет на суше?</p>
                    <input type="text" id="userAnswer2">

                    <p>Какой конь не ест овса?</p>
                    <input type="text" id="userAnswer3">

                    <br>
                    <a href="#" onClick="checkAnswers();">Ответить</a>

                </div>
                <div id="notification-box" class="box box_hidden">
                    <h1 id="notification"></h1>
                    <a href="#" onClick="showPuzzle();">Попробовать еще раз</a>
                </div>

            </div>
        </div>
    </div>


</div>

<?php include('footer.php'); ?>

</body>
</html>