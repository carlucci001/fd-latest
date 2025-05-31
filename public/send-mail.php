<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request data']);
    exit();
}

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$company = $data['company'] ?? '';
$service = $data['service'] ?? '';
$message = $data['message'] ?? '';

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Required fields are missing']);
    exit();
}

$to = 'carl@farringtondevelopment.com';
$subject = 'New Contact Form Submission from ' . $name;

$headers = [
    'From: Farrington Development <carl@farringtondevelopment.com>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/html; charset=UTF-8'
];

$emailBody = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; }
    </style>
</head>
<body>
    <div class='container'>
        <h2>New Contact Form Submission</h2>
        
        <div class='field'>
            <div class='label'>Name:</div>
            <div>" . htmlspecialchars($name) . "</div>
        </div>
        
        <div class='field'>
            <div class='label'>Email:</div>
            <div>" . htmlspecialchars($email) . "</div>
        </div>
        
        <div class='field'>
            <div class='label'>Phone:</div>
            <div>" . htmlspecialchars($phone) . "</div>
        </div>
        
        <div class='field'>
            <div class='label'>Company:</div>
            <div>" . htmlspecialchars($company) . "</div>
        </div>
        
        <div class='field'>
            <div class='label'>Service Interested In:</div>
            <div>" . htmlspecialchars($service) . "</div>
        </div>
        
        <div class='field'>
            <div class='label'>Message:</div>
            <div>" . nl2br(htmlspecialchars($message)) . "</div>
        </div>
    </div>
</body>
</html>
";

$success = mail($to, $subject, $emailBody, implode("\r\n", $headers));

if ($success) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
