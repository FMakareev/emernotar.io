import React, {Component} from 'react';
import {connect} from "react-fela";
import {Typography} from "../../../../blocks/typography/index";
import {Container} from '../../../../blocks/container/index';

class PrivacyPolicy extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    get initialState() {
        return {}
    }

    render() {
        return (
            <Container>
                <Typography
                    as={'p'}
                    size={'medium'}
                    bright={'dark'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    size={'large'}
                >
                    Privacy Policy
                </Typography>
                <p>
                    Emernotar Parntership built the Emernotar app as a Commercial app. This SERVICE is provided by Emernotar Parntership and is intended for use as is.
                    This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
                    If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                    The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Emernotar unless otherwise defined in this Privacy Policy.
                </p>
                <Typography
                    as={'p'}
                    size={'medium'}
                    bright={'dark'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    Information Collection and Use
                </Typography>
                <p>
                    For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to 1) e-mail and notarization data (transaction ID and date when a hash sum is recieived) are kept on the server of Emernotar application; when a user makes a notarization, he/she makes a choice to cast his/her email address or just a hash sum (SHA-512) of it; depending this choice the information of email address and notarization data can be retrieved by anyone's request to verify a file and it will be provided in the form of user's choice - email address or a hash sum of it respectively; if the user made a choice to hash his/her email address, this data can retrieved in open format only on the user's request (by the link provided in the letter to this email address after the succsefull notarization on the blockchain or on a lawful demand of authorities; 2) email or a hash sum of this email (depends on a user's choice), a hash of the user's file and its name is cast to EMERCOIN blockchain database (third parties nodes), the data on the blockchain is completely public; the user must be aware of the choice to cast his/her email or hash sum to the email, once it is cast to the blockchain, the data cannot be ever deleted and is always public; 3) camera - data is retrieved from the camera and/or gallery only on user's request to notarize it, pictures are never uploaded to any server and stay on the user's device; 4) state of the device, i.e. a system language is required to present the application interface in user's language. . The information that we request is will be retained by us and used as described in this privacy policy.
                    The app does use third party services that may collect information used to identify you.
                    Link to privacy policy of third party service providers used by the app <br/>
                    &#8226; <a href="https://www.google.com/policies/privacy/">Google Play Services</a>
                </p>
                <Typography
                    as={'p'}
                    size={'medium'}
                    bright={'dark'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    Log Data
                </Typography>
                <p>
                    We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
                </p>
                <Typography
                    as={'p'}
                    size={'medium'}
                    bright={'dark'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    Cookies
                </Typography>
                <p>
                    Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
                    This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
                </p>
                <Typography
                    as={'p'}
                    size={'medium'}
                    bright={'dark'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    Service Providers
                </Typography>
                <p>
                    We may employ third-party companies and individuals due to the following reasons:<br/>
                    &#8226; To facilitate our Service;<br/>
                    &#8226; To provide the Service on our behalf;<br/>
                    &#8226; To perform Service-related services; or<br/>
                    &#8226; To assist us in analyzing how our Service is used.<br/>
                    We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                </p>
                <Typography
                    as={'p'}
                    size={'medium'}
                    bright={'dark'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    Security
                </Typography>
                <p>
                    We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                </p>
                <Typography
                    as={'p'}
                    size={'medium'}
                    bright={'dark'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    Links to Other Sites
                </Typography>
                <p>
                    This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>
                <Typography
                    as={'p'}
                    size={'medium'}
                    bright={'dark'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    Children’s Privacy
                </Typography>
                <p>
                    These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
                </p>
                <Typography
                    as={'p'}
                    size={'medium'}
                    bright={'dark'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    Changes to This Privacy Policy
                </Typography>
                <p>
                    We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
                </p>
            </Container>
        )
    }
}


export default PrivacyPolicy;