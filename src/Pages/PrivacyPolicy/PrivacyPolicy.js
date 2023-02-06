import React from "react";
import { Container, H1, Detail, H2, H3, P, UL, Divider } from "./PrivacyPolicy.styles";

const PrivacyPolicyPage = () => {
  return (
    <Container>
      <H1>Cash Counts - Privacy Policy</H1>
      <Detail>Last revised: January 29th, 2023</Detail>

      <Divider />

      <H2>Contact Information</H2>
      <div>
        <P index={0}>Patt Martin of MaddHatt LLC</P>
        <P index={0}>Contact: MaddHatt.pm@gmail.com</P>
      </div>

      <H2>Overview</H2>
      {[
        "MaddHatt LLC built the Cash Counts app as an Ad Supported app.This SERVICE is provided by MaddHatt LLC at no cost and is intended for use as is. This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.",

        "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",

        "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Cash Counts unless otherwise defined in this Privacy Policy."
      ].map((item, id) => <P key={id} index={id}>{item}</P>)}

      <H3>Information Collection and Use</H3>
      {[
        "For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Cookies, Usage Data, Unique Device Identifiers for advertising. The information that we request will be retained by us and used as described in this privacy policy.",

        "The app does use third-party services that may collect information used to identify you.",

        "Links to the privacy policy of third-party service providers used by the app:"
      ].map((item, id) => <P key={id} index={id}>{item}</P>)}

      <UL><a href="https://support.google.com/admob/answer/6128543?hl=en">AdMob from Google LLC</a> </UL>

      <H3>Logging of User Data</H3>
      {[
        "We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics."
      ].map((item, id) => <P key={id} index={id}>{item}</P>)}

      <H3>Cookies</H3>
      {[
        "Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.",

        "This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service."
      ].map((item, id) => <P key={id} index={id}>{item}</P>)}

      <H3>Service Providers</H3>
      <P index={0}>{"We may employ third - party companies and individuals due to the following reasons:"}</P>

      {[
        "To facilitate our Service",
        "To provide the Service on our behalf",
        "To perform Service-related services",
        "To assist us in analyzing how our Service is used."
      ].map((item, id) => <UL key={id} index={id}>{item}</UL>)}
      <P>{"We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose."}</P>

      <H3>Security</H3>
      <P index={0}>{"We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security."}</P>

      <H3>Links to Other Sites</H3>
      <P index={0}>{"This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."}</P>

      <H3>Children's Privacy</H3>
      <P index={0}>{"These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions."}</P>

      <H3>Changes to This Privacy Policy</H3>
      <P index={0}>{"We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page."}</P>

      <P>{"This policy is effective as of January 29th, 2023."}</P>

      <H3>Contact Us</H3>
      <P index={0}>{"If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at MaddHatt.pm@gmail.com."}</P>

      <P>This privacy policy page was created at <a href="https://privacypolicytemplate.net">privacypolicytemplate.net</a> and modified/generated by <a href="https://app-privacy-policy-generator.nisrulz.com">App Privacy Policy Generator</a>.</P>
    </Container >
  );
};

export default PrivacyPolicyPage;