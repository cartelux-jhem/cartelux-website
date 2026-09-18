<?php
header('Content-Type: application/json');

$message = "";
$status = "false";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (!empty($_POST['company_name']) && !empty($_POST['email-address'])) {
        
        $companyName = $_POST['company_name'];
        $fullName = $_POST['firstname'] . ' ' . $_POST['lastname'];
        $email = $_POST['email-address'];
        $phoneNumber = $_POST['phone'];
        $address = $_POST['address'];
        $city = $_POST['city'];
        $state = $_POST['state'];
        $zip = $_POST['zip_code'];   
        
        // Check if 'no_website' is checked
        $companyWebsite = !empty($_POST['no_website']) && $_POST['no_website'] === "on" ? 'No Website' : $_POST['company_website'];

        $email_subject = 'New Message  | MSP Lead Gen Free Trial Registration';
        $headers = 'From: admin@salt-crm.com' . "\r\n" .
                   'Reply-To: admin@salt-crm.com' . "\r\n" .
                   'X-Mailer: PHP/' . phpversion();

        $email_to = 'acolaru@colarussocompany.mygbiz.com.test-google-a.com';

        $email_message = "This User is trying to create an account: \n Name: $fullName\nCompany: $companyName\nEmail: $email\nPhone: $phoneNumber\nAddress: $address\nCity: $city\nState: $state\nZip: $zip\nCompany Website: $companyWebsite";

        if (@mail($email_to, $email_subject, $email_message, $headers)) {
            $message = 'We have successfully received your message and will get back to you soon.';
            $status = "true";
        } else {
            $message = 'Email could not be sent due to an unexpected error. Please try again later.';
            $status = "false";
        }
    } else {
        $message = 'Please fill in all required fields.';
        $status = "false";
    }
} else {
    $message = 'Invalid request method.';
    $status = "false";
}

echo json_encode(['status' => $status, 'message' => $message]);
exit;
?>
