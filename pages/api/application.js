import nodemailer from 'nodemailer'

export default async function handel (req, res){
  const  { dname,mname,address,homeTel,fwork,mwork,fcell,mcell,email,fname,dob,religion,hlang,enrollDate,pgroup,aftercare}  = req.body;

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

  console.log({dname,mname,address,homeTel,fwork,mwork,fcell,mcell,email,fname,dob,religion,hlang,enrollDate,pgroup,aftercare});

  try {
    
    let emailResult = await transporter.sendMail({
      from: 'info@garfieldpreprimary.co.za',
      to: 'mrvolkwyn@gmail.com' ,
      subject: 'Contact form information',
      html:`<table style="width:100%,border:solid;border-color:gray;">
        <tr>
            <td>Father's Name:</td>
            <td>${dname}</td>
        </tr>
        <tr>
            <td>Mother's Name:</td>
            <td>${mname}</td>
        </tr>
        <tr>
            <td>Address:</td>
            <td>${address}</td>
        </tr>
        <tr>
            <td>Home Telephone:</td>
            <td>${homeTel}</td>
        </tr>
        <tr>
            <td>Father's Work No:</td>
            <td>${fwork}</td>
        </tr>
        <tr>
            <td>Mother's Work No:</td>
            <td>${mwork}</td>
        </tr>
        <tr>
            <td>Father's cell No:</td>
            <td>${fcell}</td>
        </tr>
        <tr>
            <td>Mother's cell No:</td>
            <td>${mcell}</td>
        </tr>
        <tr>
            <td>Child's Name:</td>
            <td>${fname}</td>
        </tr>
        <tr>
            <td>Child's Date of Birth:</td>
            <td>${dob}</td>
        </tr>
        <tr>
            <td>Child's Religion:</td>
            <td>${religion}</td>
        </tr>
        <tr>
            <td>Child's Home Language:</td>
            <td>${hlang}</td>
        </tr>
        <tr>
            <td>Enrolment Date:</td>
            <td>${enrollDate}</td>
        </tr>
        <tr>
            <td>Has Child's ever been in a play group:</td>
            <td>${pgroup}</td>
        </tr>
        <tr>
            <td>Will Child's be attending a play group:</td>
            <td>${aftercare}</td>
        </tr>
      </table>`
    
    });

    console.log("Message Sent", emailResult.messageId)
    res.status(200).json(emailResult.messageId)
  
  } catch (error) {
    res.status(400).json(error)
  }

}