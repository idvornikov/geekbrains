<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Генератор случайных паролей</title>
    <link rel="stylesheet" href="style.css">
    <script src="script/password_generator.js"></script>
</head>
<body>

<div class="content">
    <?php include('header.php'); ?>

    <div class="contentWrap">
        <div class="content">
            <div class="center">

                <h1>Генератор паролей</h1>

                <div class="box">

                    <p>Введите длину желаемого пароля</p>
                    <input type="text" id="passwordLength">
                    <p id="password"></p>

                    <br>
                    <a href="#" onClick="generatePassword();">Сгенерировать пароль</a>

                </div>

            </div>
        </div>
    </div>


</div>

<?php include('footer.php'); ?>

</body>
</html>