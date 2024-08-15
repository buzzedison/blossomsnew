<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';



$fname = (isset($_REQUEST['fname'])) ? $_REQUEST['fname'] : "";
$familyname = (isset($_REQUEST['familyname'])) ? $_REQUEST['familyname'] : "";
$email = (isset($_REQUEST['email'])) ? $_REQUEST['email'] : "";
$phone = (isset($_REQUEST['phone'])) ? $_REQUEST['phone'] : "";
$zip = (isset($_REQUEST['zip'])) ? $_REQUEST['zip'] : "";
$question = (isset($_REQUEST['question'])) ? $_REQUEST['question'] : "";
$age = (isset($_REQUEST['age'])) ? $_REQUEST['age'] : "";
$childfamilyname = (isset($_REQUEST['childfamilyname'])) ? $_REQUEST['childfamilyname'] : "";
$startdate = (isset($_REQUEST['startdate'])) ? $_REQUEST['startdate'] : "";
$showarounddate = (isset($_REQUEST['showarounddate'])) ? $_REQUEST['showarounddate'] : "";
$form = (isset($_REQUEST['form'])) ? $_REQUEST['form'] : "";
$sessions = (isset($_REQUEST['sessions'])) ? $_REQUEST['sessions'] : "";
 


$token = $_REQUEST['captcha'] ;






if(validateCaptcha($token)){
    //CAPTCHA validated
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );
    $mail->Mailer = "smtp";

    $mail->SMTPDebug  = 0;  
    $mail->SMTPAuth   = TRUE;
    $mail->SMTPSecure = "ssl";
    $mail->Port       = 465;
    $mail->Host       = "smtp.googlemail.com";
    $mail->Username   = "katie@nkchildcare.co.uk";
    $mail->Password   = "fyorsaohgtsjllmz";

    $mail->IsHTML(true);
    
    $mail->AddAddress("katie@nkchildcare.co.uk", "Blossom's Childcare");
    $mail->SetFrom('blossomcare@gmail.com', "Blossom's Childcare");
    $mail->AddReplyTo($email, "Customer");
     

    $content = "";
    
    if($form == "showaround"){
        $mail->Subject = "Blossom's Childcare Showaround Form Request";
        $content = "
          <p>Child's First Name : ".$fname."</p>
          <p>Child's Family Name : ".$childfamilyname."</p>
          <p>Name of Parent(s)/Carer(s) : ".$familyname."</p>
          <p>Child’s Age in Years & Months : ".$age."</p>
          <p>Child’s Potential Start Date : ".$startdate."</p>
          <p>Preferred Show-around Date : ".$showarounddate."</p>
          <p>Email : ".$email."</p>
          <p>Phone : ".$phone."</p>
          <p>Postcode : ".$zip."</p>
      ";
    }else if($form == "space"){
      $mail->Subject = "Blossom's Childcare Apply for Space Form Request";
      $smessage = "";
      foreach($sessions as $key => $day) {

          $smessage .= "<h3>".ucfirst($key)."</h3>";
          foreach($day as $session) {
              $smessage .= "<p>$session</p>";
          }
          $smessage .= "<br /><br />";
      }


      $content = "
          <p>Child's First Name : ".$fname."</p>
          <p>Child's Family Name : ".$childfamilyname."</p>
          <p>Name of Parent(s)/Carer(s) : ".$familyname."</p>
          <p>Child’s Age in Years & Months : ".$age."</p>
          <p>Child’s Potential Start Date : ".$startdate."</p>
          <p>Email : ".$email."</p>
          <p>Phone : ".$phone."</p>
          <p>Postcode : ".$zip."</p>
          <br /> Following sessions are opted:".$smessage."
      ";
    }else{
        $mail->Subject = "Blossom's Childcare General Enquiry Form Request";
        
        $content = "
            <p>Parent/Carer First Name : ".$fname."</p>
            <p>Parent/Carer Family Name : ".$familyname."</p>
            <p>Email : ".$email."</p>
            <p>Phone : ".$phone."</p>
            <p>Postcode : ".$zip."</p>
            <b>Question : ".$question."</b>
        ";
    }

      $mail->MsgHTML($content); 
      if(!$mail->Send()) {
        echo "Error while sending Email.";
        var_dump($mail);
      } else {
        return http_response_code(200);
      }
        
}else{
    // CAPTCHA invalid
    return http_response_code(411);
}




function validateCaptcha($token) {
  $postvars = [
    "response" => $token,
    "secret" => "6Leiyj4eAAAAAMTe4mp3zKS6MTH35EUV3cBNI2gf"
  ];
  $ch = curl_init("https://www.google.com/recaptcha/api/siteverify");
  curl_setopt($ch,CURLOPT_POST, 1);    
  curl_setopt($ch,CURLOPT_POSTFIELDS, http_build_query($postvars));
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch,CURLOPT_CONNECTTIMEOUT ,3);
  curl_setopt($ch,CURLOPT_TIMEOUT, 20);
  $response = curl_exec($ch);
  return json_decode($response)->success;
}