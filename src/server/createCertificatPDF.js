import React from 'react';
import {certificateTemplate} from './certificate_template';
import Cert from '../modules/static/view/cert/index'
import fs from 'fs';
import fsExtra from 'fs-extra'
const pdf = require('html-pdf');


export const createCertificat = async (req,response) => {
    try {
        const {params: {hash}} = req;
        console.log('__dirname:',__dirname);
        /**
         * @description path to the certificate store
         * */
        const certificates_dir = process.cwd() + '/public/assets/certificates/';
        const fileName = encodeURIComponent(hash).substring(0,30);
        console.log('certificates_dir:',certificates_dir);

        /**
         * @description path to the certificate
         * */
        const certificat_path = `${certificates_dir}${fileName}.pdf`;
        console.log('certificat_path:',certificat_path);

        /**
         * @description check for a directory for storing certificates
         * */
        if (!fs.existsSync(certificates_dir)) {
            try {
                fs.mkdirSync(certificates_dir,(err,folder) => {
                    if (err) {
                        console.log('line 31. mkdirSync err: ',err);
                    }
                    console.log('line 31. mkdirSync folder:',folder);
                });
            } catch (error) {
                console.log('line 35. error: ',error);
            }
        } else {
            fsExtra.emptyDir(certificates_dir)
                .then(() => {
                    console.log('SUCCESS EMPTY DIR!')
                })
                .catch(err => {
                    console.error(`ERROR EMPTY DIR: certificates_dir :`,err)
                })
        }

        /**
         * @description Verifying the presence of a certificate with a transmitted hash
         */
        // if (!fs.existsSync(certificat_path)) {

        /**
         *    Usage
         *    @param html - This is the html to be converted to a pdf
         *    @param callback - Do something with the PDF
         *    @param [options] - Optional parameter to pass in Puppeteer PDF options
         */
        const result = await createPDF(hash,fileName);
        console.log('result',result);

        
        /**
         * @description Read the certificate file and send in response to the user
         */

        fs.readFile(certificat_path,function (err,data) {
            if (err) throw err;
            response.contentType("application/pdf");
            // res.send('');
            response.send(data);
        });
    } catch (error) {
        console.log('error: ',error);
        response.status(502);
        response.send(error);
        response.end();
    }
    // response.status(200);
    // /** @description http://expressjs.com/en/4x/api.html#res.send */
    // response.send('createCertificat');
    // /** @description http://expressjs.com/en/4x/api.html#res.end */
    // response.end();


}

const createPDF = async (hash,fileName) => {
    const html = await certificateTemplate(()=><Cert emerhash={hash}/>);

    var options = {
        format: 'A4', 
        orientation: 'landscape', 
        border: '0',
     };


    return await new Promise((resolve, reject) => {
        pdf.create(html,options).toFile(`${process.cwd()}/public/assets/certificates/${fileName}.pdf`, (err, res) => {
            console.log(res.filename);
            resolve(res)
          });
    })
}