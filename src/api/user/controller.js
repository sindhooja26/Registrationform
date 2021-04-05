import reg from '../common/registrationmodel'
var nodemailer = require('nodemailer');

export const Adddata = (req, res) => {
    reg.create(req.body, (err, result) => {
        if (err) {

            res.send(err)
        } else {
            res.send(result)
            var transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'sindhooja.vita@gmail.com',
                    pass: 'AK23032604'
                }

            });
            var mailOptions = {
                from: 'sindhooja.vita@gmail.com',
                to: result.Email,//'gonepally.sindhuja26@gmail.com',
                subject: 'Sending Email using Node.js',
                text:result.userName && result.Password
            
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });

        }
    })
}


export const Getdata = (req, res) => {

    reg.find({ "userName": req.body.userName, "Password": req.body.Password }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            console.log("enter correct details");
            res.send(result);
        }
    })
}

export const Updatedata = (req, res) => {
    reg.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if (!err.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        } else {
            res.send(result)
        }
    })
}

export const DeleteData = (req, res) => {
    reg.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
}