import {certificate_template} from './certificate_template';
import HTMLToPDF from 'html5-to-pdf';
import fs from 'fs';
import path from 'path';


export const createCertificat = async (req, response) => {
    try {
        const {params: {hash}} = req;
        console.log('hash:', encodeURIComponent(hash));
        console.log('req:', req);
        console.log('__ENDPOINT_SERVER__', __ENDPOINT_SERVER__);

        // @description path to the certificate store
        const certificates_dir = path.resolve(__dirname, '../../public/static/certificates/');
        const fileName = encodeURIComponent(hash).substring(0,30)
        // @description path to the certificate
        const certificat_path = path.resolve(__dirname, `${certificates_dir}/${fileName}.pdf`);

        console.log('certificates_dir:', certificates_dir);
        console.log('certificat_path:', certificat_path);
        /*
        *
        * СЮДА ПРОПИСАТЬ ЗАПРОС К СЕРВЕРУ PYTHON ДЛЯ ПОВЕРКИ НАЛИЧИЯ СЕРТИФИКАТА И ПОЛУЧЕНИЯ ДАННЫХ ДЛЯ ЕГО ГЕНЕРАЦИИ
        *
        * */
        // const data = await getCertificate(hash);
        // console.log('hash:',data);

        /**
         * @description check for a directory for storing certificates
         * */
        if (!fs.existsSync(certificates_dir)) {
            fs.mkdirSync(certificates_dir);
        }


        /**
         * @description Verifying the presence of a certificate with a transmitted hash
         */
        if (!fs.existsSync(certificat_path)) {
            console.log('No certificate with hash:', hash);

            const result = await createPDF(hash, fileName)
        } else {
            console.log('Yes certificate with hash:', hash);
        }

        /**
         * @description Read the certificate file and send in response to the user
         */

        fs.readFile(certificat_path, function (err, data) {
            response.contentType("application/pdf");
            // res.send('');
            response.send(data);
        });
    } catch (error) {
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

const createPDF = (hash,fileName) => {
    return new Promise((resolve, reject) => {
        console.log('createCertificatPDF');
        const inputBody = certificate_template(hash)
            .then((response) => {

                const htmlToPDF = new HTMLToPDF({
                    inputBody: response,
                    outputPath: `./public/static/certificates/${fileName}.pdf`,

                    options: {
                        printBackground: true,
                        width: '842px',
                        height: '595px',
                        marginsType: 1,
                        format: 'A4',
                        landscape: true,
                        pageRanges: '1-1',
                        margin: {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                        }
                    }
                });

                htmlToPDF.build((error) => {
                    if (error) {
                        reject(error)
                    } else {
                        console.log('htmlToPDF finish');
                        resolve('htmlToPDF finish');
                    }
                });
            })

    })

}