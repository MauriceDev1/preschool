import nodemailer from 'nodemailer'

export default async function handel (req, res){
  const  {name, surname , email, mobile, subject, message}  = req.body;

  let transporter = nodemailer.createTransport({
    host: 'mail.garfieldpreprimary.co.za',
    port: '465',
    secure: true,
    auth: {
      user: 'info@garfieldpreprimary.co.za',
      pass: 'Garfield2022',
    },
    tls: {
      rejectUnauthorized: false
     }
  });

  try {
    
    let emailResult = await transporter.sendMail({
      from: 'info@garfieldpreprimary.co.za',
      to: 'mrvolkwyn@gmail.com' ,
      subject: 'Contact form information',
      html:`<table style="width:100%,border:solid;border-color:gray;">
        <tr>
            <td>Name:</td>
            <td>${name}</td>
        </tr>
        <tr>
            <td>Surname:</td>
            <td>${surname}</td>
        </tr>
        <tr>
            <td>Mobile:</td>
            <td>${mobile}</td>
        </tr>
        <tr>
            <td>Email:</td>
            <td>${email}</td>
        </tr>
        <tr>
            <td>Subject:</td>
            <td>${subject}</td>
        </tr>
        <tr>
            <td>Message:</td>
            <td>${message}</td>
        </tr>
      </table>`
    
    });

    console.log("Message Sent", emailResult.messageId)
    res.status(200).json(emailResult.messageId)
  
  } catch (error) {
    res.status(400).json(error)
  }

}