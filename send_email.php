<?php
require "./src/libs/email.php";


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $posts = json_decode(file_get_contents('php://input'));
    $name = $posts->name;
    $email = $posts->email;
    $content = $posts->content;
    if (!$name || !$email || !$content) {
        return print(json_encode([
            "status" => "error",
            "message" => "Some infomations missing",
        ]));
        return;
    }
    send_email(
        'hoangominh01@gmail.com',
        'Hello Tela',
        'Contact User',
        "<div>
                    <h1>Notify user contact</h1>
                    <p>Name: <i>{$name}</i></p>
                    <p>Email: <a href='mailto:{$email}'>{$email}</a></p>
                    <p>Content:<br> <i>{$content}</i></p>
                </div>"
    );
    return print(json_encode([
        "status" => "success",
        "message" => "Email sent successfully!",
    ]));
}

return print(json_encode([
    "status" => "error",
    "message" => "Wrong method",
]));
