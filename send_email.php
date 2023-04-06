<?php
require "./src/libs/email.php";


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $content = $_POST['content'];
    $posts = file_get_contents('php://input');
    if (!$name || !$email || !$content) {
        return print(json_encode([
            "status" => "error",
            "message" => $posts,
        ]));
    }
    send_email('nghiavuxp0202@gmail.com', 'Hello Tela','Contact User',
            "<div>
    <h1>Notify user contact</h1>
    <p>Name: <i>{$name}</i></p>
    <p>Email: <a href='mailto:{$email}'>{$email}</a></p>
    <p>Content: <i>{$content}</i></p>
    </div>");
    return print(json_encode([
        "status" => "succes",
        "message" =>"Gui cmnr day!",
    ]));
}

return print(json_encode([
    "status" => "error",
    "message" =>"Sai methods",
]));
