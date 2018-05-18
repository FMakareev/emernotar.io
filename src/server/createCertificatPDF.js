import {certificateTemplate} from './certificate_template';
import fs from 'fs';
import fsExtra from 'fs-extra'

const phantomPdf = require('phantom-html2pdf');
const puppeteer = require('puppeteer');

// import HtmlToPdf from 'html-pdf';
// const convertHTMLToPDF = require("pdf-puppeteer");

import path from 'path';

const convertHTMLToPDF = async (html,callback,options = null) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    if (!options) {
        options = {format: 'letter'};
    }
    await page.setContent(html);
    await page.pdf(options).then(callback,function (error) {
        console.log(error);
    });
    await browser.close();
};

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
                    console.log('success!')
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

        // const result2 = convertHTMLToPDF(result,(pdf) => {
        //     response.contentType("application/pdf");
        //     // res.send('');
        //     response.send(pdf);
        // },{
        //     printBackground: true,
        //     // width: '842px',
        //     // height: '595px',
        //     marginsType: 1,
        //     format: 'A4',
        //     landscape: true,
        //     pageRanges: '1-1',
        //     margin: {
        //         top: 0,
        //         bottom: 0,
        //         left: 0,
        //         right: 0,
        //     }
        // });

        // } else {
        //     console.log('Yes certificate with hash:', hash);
        // }

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
    const html = await certificateTemplate(hash);
    // console.log('html: ',html);


    const options = {
        html: html,
        "paperSize": {format: 'A5', orientation: 'landscape', border: '0'}
    };
    await new Promise((response, resolve) => {

        phantomPdf.convert(options,function (err,result) {

            /* Using a buffer and callback */
            result.toBuffer(function (returnedBuffer) {
            });

            /* Using a readable stream */
            var stream = result.toStream();

            /* Using the temp file path */
            var tmpPath = result.getTmpPath();

            /* Using the file writer and callback */
            result.toFile(`${process.cwd()}/public/assets/certificates/${fileName}.pdf`,function (event) {
                console.log('phantomPdf finish.',event);
                response(event)
            });
        });
    })


    // const options = {
    //     // height: '560px',
    //     // width: '793px',
    //     format: 'A5',
    //     orientation: 'landscape',
    //     "type": "pdf",
    //     "border": "0",
    //     // "zoomFactor": "1",
    // };
    // return new Promise((resolve, reject ) =>{
    //     HtmlToPdf.create(html, options).toFile(`${process.cwd()}/public/assets/certificates/${fileName}.pdf`, function(err, res) {
    //         if (err) {
    //             console.log(err);
    //             reject(err);
    //             return err;
    //         }
    //         console.log(res);
    //         resolve(res)
    //     });
    // })

}


//     "html5-to-pdf": "^2.2.9",
// const createPDF = (hash,fileName) => {
//     return new Promise((resolve,reject) => {
//         console.log('createCertificatPDF');
//         console.log(process.cwd());
//         const inputBody = certificateTemplate(hash)
//             .then((response) => {
//                 console.log('response certificateTemplate: ',response);
//                 const htmlToPDF = new HTMLToPDF({
//                     inputBody: response,
//                     outputPath: `${process.cwd()}/public/assets/certificates/${fileName}.pdf`,
//
//                     options: {
//                         printBackground: true,
//                         width: '842px',
//                         height: '595px',
//                         marginsType: 1,
//                         format: 'A4',
//                         landscape: true,
//                         pageRanges: '1-1',
//                         margin: {
//                             top: 0,
//                             bottom: 0,
//                             left: 0,
//                             right: 0,
//                         }
//                     }
//                 });
//
//              try {
//                  htmlToPDF.build((error) => {
//                      if (error) {
//                          console.log('htmlToPDF ERROR: ',error);
//                          reject(error)
//                      } else {
//                          console.log('htmlToPDF finish');
//                          resolve('htmlToPDF finish');
//                      }
//                  });
//              } catch (error) {
//                  console.log(error);
//              }
//             }).catch((error)=>{
//                 console.log(error);
//             })
//
//     })
// };