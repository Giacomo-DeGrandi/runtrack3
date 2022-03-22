
<?php require_once('views/accueil.php'); ?>

<?php require_once('views/template.php'); ?>


<?php

/* FROM S O
Short summary of this post and the discussion below:

By first POSTing the credentials to PHP and then serving them back to the client in the returned HTML, latency (due to an additional page load) is increased, PHP is added as another point of failure and the system is theoretically opened up to more security problems (i.e. through javascript or browser extensions scanning the code or by hacking the PHP server).

Therefore two solutions are plausible:

Skip PHP entirely and let the login be handled by javascript and the java backend only
(detailed description of this procedure below in points 1 - 5; this is only possible as the PHP server
doesn't need authentication information in this specific use case)
POST the credentials to PHP and let PHP communicate with the java backend responsible for authentication,
instead of reserving them to the client
Original post:

I don't quite understand why you think the PHP backend can't be trusted but in your scheme the PHP already gets your credentials, thanks to that original POST. If you want to avoid using PHP why not have your form call a JavaCcript function instead of POSTing to the PHP backend in the first place:

User enters credentials
User clicks "login"
JavaScript intercepts the login attempt, calls login()
JavaScript fetches user,pass from document body (getElementById(...))
JavaScript contacts the Java backend which handles login
No PHP needed. But I might wonder why that's necessary - if you can't trust your own backend,
 what exactly are your security practices? If your PHP can't be trusted why would your Java be any better?

In your scheme you're already passing the credentials to the PHP backend in the POST request.
 If your concern is PHP not knowing the credentials you've already failed.

As for efficiency, your scheme has extra page loads, which will use bandwidth,
 maximize latency (as opposed to the goal of minimizing latency) and make you look incompetent to
 users who notice the extra redirect. JavaScript sounds like the better solution is you want
 to write your database code in Java.

As far as the credentials appearing in the HTML there's really no difference since the only person
 who could access them would be the user (who already typed them in). If they input incorrect credentials
 they'll only see incorrect credentials. That said, it violates best practice and probably isn't a good idea.

Is it bad security practice to have credentials show up in the HTML (as it is with having them in the URL,
 to prevent the user from accidentally sending their credentials to someone while copying the URL)?
 What are the risks associated with this? Could these credentials be read by any JS-libraries used
or browser extensions? If so, those could probably also read the credentials which I type into the form anyway?
The answer is Yes, it's entirely bad practice and opens you up to extra risk.
They're probably not too concerning but you got it exactly right - there are more places where
malicious code could read the credentials, and any JS library or installed extension can read them.

Is my alternative setup better from a security perspective (and efficiency perspective)?
No and no. From the security perspective it adds another point of failure; instead of needing to
hack the Java backend they could choose to hack the PHP backend instead.
This wouldn't necessarily be the end of the world but is an extra point of failure.

Are there any other suggestions for improving security in this context?
I explained my advice above. Either suck it up and use PHP, or use JavaScript to bypass PHP entirely.

One more thing, when handling logins make sure the Java passes a secret value (unique to each session)
and the server verifies that value on every page load. When I was working as an ethical hacker an app
I tested passed an auth token (OAuth2) but the server didn't actually verify it was correct,
just that the client said it was valid. Make sure the server checks anything the client does.

Also, emphasis on unique to each session since a secret value that stays the same for each session is
definitely gonna be the worst-kept secret you've ever wished hadn't got out.


758
You shouldn´t use client javascript to access databases for several reasons (bad practice, security issues, etc) but if you really want to do this, here is an example:

var connection = new ActiveXObject("ADODB.Connection") ;

var connectionstring="Data Source=<server>;Initial Catalog=<catalog>;User ID=<user>;Password=<password>;Provider=SQLOLEDB";

connection.Open(connectionstring);
var rs = new ActiveXObject("ADODB.Recordset");

rs.Open("SELECT * FROM table", connection);
rs.MoveFirst
while(!rs.eof)
{
   document.write(rs.fields(1));
   rs.movenext;
}

rs.close;
connection.close;

*/

?>