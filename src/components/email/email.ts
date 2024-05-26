export const htmlemailstructure = `<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Potvrzení o vyplnění formuláře</title>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            font: "Rubik", "Helvetica", "sans";
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #171717;
            padding: 20px;
            border: 1px solid #dddddd;
            border-radius: 2px;
        }
        .header {
            background-color: #6A1F6A;
            color: #ffffff;
            padding: 10px 0;
            text-align: center;
            border-radius: 14px;
        }
        .content {
            margin: 20px 6px;
            margin-top: 30px;
            color: #F7FFF9;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #777777;
            margin-top: 20px;
        }
        a{
            color: #F7FFF9;
        }


    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Potvrzení o vyplnění formuláře </h1>
        </div>
        <div class="content">
            <p>Děkuji vám za vyplnění formuláře na mé stránce <a href="https://wintis.cz">wintis.cz</a>. Ozvu se vám co nejdříve.</p>
            <p>Těším se na možnou spolupráci.</p>
            <p>S pozdravem<br>Vítězslav Šíma</p>

        </div>
        <div class="footer">
            <p>Vítězslav Šíma</p>
            <p>wintis.cz</p>
        </div>
    </div>
</body>
</html>

`;
