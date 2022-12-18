import nodemailer from 'nodemailer'
import Image from '../../assets/Garfield_logo.png'

export default async function handel (req, res){
  const  email  = req.body;

  console.log(email)

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
      html:`
      <div style="background-color:red;width:100vw;padding:20px;">
        <img src="https://photos.google.com/photo/AF1QipPMQRj_-Ilqctd4HS7cTETn4PlJNZIwFOKxJoNF" alt="garfield pre primary logo" width="130px"/>
      </div>
      <div style="padding:10px 100px 10px 100px;">
        <h1>Subscriber to News Letters</h1>
        <p>This is a subscriber from the Garfield Pre-primary website, This email should be stored as a reference</p>
        <p>email: ${email}</p>
      </div>
      `
    
    });
    
    await transporter.sendMail({
      from: 'info@garfieldpreprimary.co.za',
      to: 'volkela@gmail.com' ,
      subject: 'Contact form information',
      html:`
      <div style="background-color:red;width:100vw;padding:20px;">
        <img src="https://photos.google.com/photo/AF1QipPMQRj_-Ilqctd4HS7cTETn4PlJNZIwFOKxJoNF" alt="garfield pre primary logo" width="130px"/>
      </div>
      <div style="padding:10px 100px 10px 100px;">
        <h1>Subscriber to News Letters</h1>
        <p>Thank you for subscribing to garfield news letters, we will keep in touch with you regarding the latest events at Garfield Pre-primary School</p>
        <p>email: ${email}</p>
      </div>
      `
    
    });

    console.log("Message Sent", emailResult.messageId)
    res.status(200).json(emailResult.messageId)
  
} catch (error) {
    res.status(400).json(error)
  }

}