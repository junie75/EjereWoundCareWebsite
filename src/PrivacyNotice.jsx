// page to display privacy notice
// converted the word doc to html, then to jsx, so using inline styling rather than css file

import React from "react";
import Layout from "./Layout";

export default function PrivacyNotice() {
  return (
    <Layout>
      <div className="pageContainer">
        <div
          className="privacyNotice" /*style={{ margin: "150px 20px 20px 20px" }}*/
        >
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "center",
              lineHeight: "116%",
              fontSize: "15.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                Notice of Privacy Practices
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "center",
              lineHeight: "116%",
              fontSize: "15.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                Effective Date of this Notice: 8-12-2024
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              textAlign: "center",
              lineHeight: "116%",
              fontSize: "15.5pt",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "0pt",
              lineHeight: "116%",
              fontSize: "16pt",
            }}
          >
            <strong>
              <em>
                <span style={{ fontFamily: "Arial" }}>
                  Your Information. Your Rights. Our Responsibilities.
                </span>
              </em>
            </strong>
          </p>
          <p style={{ marginTop: "0pt", marginBottom: "8pt" }}>
            <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
          </p>
          <p style={{ marginTop: "0pt", marginBottom: "8pt" }}>
            <span style={{ fontFamily: "Arial" }}>
              This notice describes how medical information about you may be
              used and disclosed and how you can access this information.&nbsp;
            </span>
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                Please review the following carefully.
              </span>
            </strong>
            <span style={{ fontFamily: "Arial" }}>&nbsp;&nbsp;</span>
            <span style={{ fontFamily: "Arial" }}>
              Please let us know if you have any questions about this notice or
              need more information.
            </span>
          </p>
          <p style={{ marginTop: "0pt", marginBottom: "8pt" }}>
            <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "116%",
              fontSize: "14pt",
            }}
          >
            <strong>
              <em>
                <span style={{ fontFamily: "Arial" }}>Your Rights</span>
              </em>
            </strong>
          </p>
          <p style={{ marginTop: "0pt", marginBottom: "8pt" }}>
            <span style={{ fontFamily: "Arial" }}>You have the right to:</span>
          </p>
          <ul type="disc" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Get a copy of your paper or electronic health record
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Correct your paper or electronic health record
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Request confidential communication
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Ask us to limit the information we share
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Get a list of those with whom we,ve shared your information
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Choose someone to act for you
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Get a copy of this privacy notice
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                marginBottom: "8pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                File a complaint if you believe your privacy rights have been
                violated
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "116%",
              fontSize: "14pt",
            }}
          >
            <strong>
              <em>
                <span style={{ fontFamily: "Arial" }}>Your Choices</span>
              </em>
            </strong>
          </p>
          <p style={{ marginTop: "0pt", marginBottom: "8pt" }}>
            <span style={{ fontFamily: "Arial" }}>
              You have some choices in the way that we use and share information
              as we:
            </span>
          </p>
          <ul type="disc" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Tell family and friends about your condition
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Provide disaster relief
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Include you in a hospital directory
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Provide mental health care
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Market our services and sell your information
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                marginBottom: "8pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>Raise funds</span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "8pt",
              lineHeight: "116%",
              fontSize: "14pt",
            }}
          >
            <strong>
              <em>
                <span style={{ fontFamily: "Arial" }}>
                  Our Uses and Disclosures
                </span>
              </em>
            </strong>
          </p>
          <p style={{ marginTop: "0pt", marginBottom: "8pt" }}>
            <span style={{ fontFamily: "Arial" }}>
              We may use and share your information as we:&nbsp;
            </span>
          </p>
          <ul type="disc" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>Treat you</span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>Run our organization</span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Bill for your services
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Help with the public health and safety issues
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>Do research</span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>Comply with the law</span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Respond to organ and tissue donation requests
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Work with medical examiner or funeral director
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Address workers’ compensation, law enforcement, and other
                government requests
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                marginBottom: "8pt",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Respond to lawsuits and legal actions
              </span>
            </li>
          </ul>
          <h1
            style={{
              marginTop: "9.4pt",
              marginBottom: "9.4pt",
              pageBreakInside: "avoid",
              pageBreakAfter: "avoid",
              lineHeight: "116%",
              fontSize: "14pt",
              // backgroundColor: "#ffffff",
            }}
          >
            <em>
              <span style={{ fontFamily: "Arial" }}>Your Rights</span>
            </em>
          </h1>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
              // backgroundColor: "#ffffff",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                When it comes to your health information, you have certain
                rights.&nbsp;
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
              // backgroundColor: "#ffffff",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>
              This section explains your rights and some of our responsibilities
              to help you.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "6pt",
              // backgroundColor: "#ffffff",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                Get an electronic or paper copy of your medical record
              </span>
            </strong>
          </p>
          <ul type="disc" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
                // backgroundColor: "#ffffff",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                You can ask to see or get an electronic or paper copy of your
                medical record and other health information we have about you.
                Ask us how to do this.
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                marginBottom: "10pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
                // backgroundColor: "#ffffff",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
              <span style={{ fontFamily: "Arial" }}>
                We will provide a copy or a summary of your health information,
                usually within 30 days of your request. We may charge a
                reasonable, cost-based fee.
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "6pt",
              // backgroundColor: "#ffffff",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                Ask us to correct your medical record
              </span>
            </strong>
          </p>
          <ul type="disc" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
                // backgroundColor: "#ffffff",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                You can ask us to correct health information about you that you
                think is incorrect or incomplete. Ask us how to do this.
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                marginBottom: "10pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
                // backgroundColor: "#ffffff",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                We may say “no” to your request, but we’ll tell you why in
                writing within 60 days.
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
              // backgroundColor: "#ffffff",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                Request confidential communications
              </span>
            </strong>
          </p>
          <ul type="disc" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
                // backgroundColor: "#ffffff",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                You can ask us to contact you in a specific way (for example,
                home or office phone) or to send mail to a different address.
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                marginBottom: "10pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
                // backgroundColor: "#ffffff",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                We will say “yes” to all reasonable requests.
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
              // backgroundColor: "#ffffff",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                Ask us to limit what we use or share
              </span>
            </strong>
          </p>
          <ul type="disc" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
                // backgroundColor: "#ffffff",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                You can ask us not to use or share certain health information
                for treatment, payment, or our operations. We are not required
                to agree to your request, and we may say “no” if it would affect
                your care.
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                marginBottom: "10pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
                // backgroundColor: "#ffffff",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                If you pay for a service or health care item out-of-pocket in
                full, you can ask us not to share that information for the
                purpose of payment or our operations with your health insurer.
                We will say “yes” unless a law requires us to share that
                information.
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
              // backgroundColor: "#ffffff",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                Get a list of those with whom we’ve shared information
              </span>
            </strong>
          </p>
          <ul type="disc" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
                // backgroundColor: "#ffffff",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                You can ask for a list (accounting) of the times we’ve shared
                your health information for six years prior to the date you ask,
                who we shared it with, and why.
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                marginBottom: "10pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
                // backgroundColor: "#ffffff",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                We will include all the disclosures except for those about
                treatment, payment, and health care operations, and certain
                other disclosures (such as any you asked us to make). We’ll
                provide one accounting a year for free but will charge a
                reasonable, cost-based fee if you ask for another one within 12
                months.
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
              // backgroundColor: "#ffffff",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                Get a copy of this privacy notice
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
              // backgroundColor: "#ffffff",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>
              You can ask for a paper copy of this notice at any time, even if
              you have agreed to receive the notice electronically. We will
              provide you with a paper copy promptly.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
              // backgroundColor: "#ffffff",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                Choose someone to act for you
              </span>
            </strong>
          </p>
          <ul type="disc" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
                // backgroundColor: "#ffffff",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                If you have given someone medical power of attorney or if
                someone is your legal guardian, that person can exercise your
                rights and make choices about your health information.
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                marginBottom: "10pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
                // backgroundColor: "#ffffff",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                We will make sure the person has this authority and can act for
                you before we take any action.
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
              // backgroundColor: "#ffffff",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                File a complaint if you feel your rights are violated
              </span>
            </strong>
          </p>
          <ul type="disc" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
                // backgroundColor: "#ffffff",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                You can complain if you feel we have violated your rights by
                contacting us by mail: Dr. Henry Ejere, Medical Director, 730 E
                Eureka St, Weatherford, Texas, 76086 or by email at&nbsp;
              </span>
              <a
                href="mailto:compliance@ejerewoundcare.com"
                style={{ textDecoration: "none" }}
              >
                <u>
                  <span style={{ fontFamily: "Arial", color: "#467886" }}>
                    compliance@ejerewoundcare.com
                  </span>
                </u>
              </a>
              <span style={{ fontFamily: "Arial" }}>.&nbsp;</span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
                // backgroundColor: "#ffffff",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                You can file a complaint with the U.S. Department of Health and
                Human Services Office for Civil Rights by sending a letter to
                200 Independence Avenue, S.W., Washington, D.C. 20201, calling
                1-877-696-6775, or visiting&nbsp;
              </span>
              <u>
                {/* <span style={{ fontFamily: "Arial", color: "#467886" }}>
                www.hhs.gov/ocr/privacy/hipaa/complaints/
              </span> */}
                <a
                  style={{ fontFamily: "Arial", color: "#467886" }}
                  href="www.hhs.gov/ocr/privacy/hipaa/complaints/"
                >
                  Here
                </a>
              </u>
              <span style={{ fontFamily: "Arial", color: "#0000ff" }}>.</span>
              <span style={{ fontFamily: "Arial" }}>
                We will not retaliate against you for filing a complaint.
              </span>
            </li>
          </ul>
          <h1
            style={{
              marginTop: "18pt",
              marginBottom: "4pt",
              pageBreakInside: "avoid",
              pageBreakAfter: "avoid",
              lineHeight: "116%",
              fontSize: "14pt",
            }}
          >
            <em>
              <span style={{ fontFamily: "Arial" }}>Your Choices</span>
            </em>
          </h1>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                For certain health information, you can tell us your choices
                about what we share.&nbsp;
              </span>
            </strong>
            <span style={{ fontFamily: "Arial" }}>
              If you have a clear preference for how we share your information
              in the situations described below, talk to us. Tell us what you
              want us to do, and we will follow your instructions.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                In these cases, you have both the right and choice to tell us
                to:
              </span>
            </strong>
          </p>
          <ul type="disc" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Share information with your family, close friends, or others
                involved in your care
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Share information in a disaster relief situation
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Include your information in a hospital directory
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "0pt",
              lineHeight: "105%",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <em>
              <span style={{ fontFamily: "Arial" }}>
                If you are not able to tell us your preference, for example if
                you are unconscious, we may go ahead and share your information
                if we believe it is in your best interest. We may also share
                your information when needed to lessen a serious and imminent
                threat to health or safety.
              </span>
            </em>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                In these cases, we never share your information unless you give
                us written permission:
              </span>
            </strong>
          </p>
          <ul type="disc" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>Marketing purposes</span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Sale of your information
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                marginBottom: "10pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Most sharing of psychotherapy notes
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                In the case of fundraising:
              </span>
            </strong>
          </p>
          <ul type="disc" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                We may contact you for fundraising efforts, but you can tell us
                not to contact you again.
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "36pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
          </p>
          <h1
            style={{
              marginTop: "9.4pt",
              marginBottom: "9.4pt",
              pageBreakInside: "avoid",
              pageBreakAfter: "avoid",
              lineHeight: "116%",
              fontSize: "14pt",
            }}
          >
            <em>
              <span style={{ fontFamily: "Arial" }}>
                Our Uses and Disclosures
              </span>
            </em>
          </h1>
          <h2
            style={{
              marginTop: "11.6pt",
              marginBottom: "11.6pt",
              pageBreakInside: "avoid",
              pageBreakAfter: "avoid",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
              How do we typically use or share your health information? We
              typically use or share your health information in the following
              ways:
            </span>
          </h2>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>Treat you</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>
              We can use your health information and share it with other
              professionals who are treating you.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "0pt",
            }}
          >
            <em>
              <span style={{ fontFamily: "Arial" }}>
                Example: A doctor treating you for an injury asks another doctor
                about your overall health condition.
              </span>
            </em>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "0pt",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>Run our organization</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>
              We can use and share your health information to run our practice,
              improve your care, and contact you when necessary.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "0pt",
            }}
          >
            <em>
              <span style={{ fontFamily: "Arial" }}>
                Example: We use health information about you to manage your
                treatment and services.
              </span>
            </em>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                Bill for your services
              </span>
            </strong>
          </p>
          <p style={{ marginTop: "0pt", marginBottom: "0pt" }}>
            <span style={{ fontFamily: "Arial" }}>
              We can use and share your health information to bill and get
              payment from health plans or other entities.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "0pt",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "0pt",
            }}
          >
            <em>
              <span style={{ fontFamily: "Arial" }}>
                Example: We give information about you to your health insurance
                plan so it will pay for your services.
              </span>
            </em>
          </p>
          <h2
            style={{
              marginTop: "11.6pt",
              marginBottom: "11.6pt",
              pageBreakInside: "avoid",
              pageBreakAfter: "avoid",
              lineHeight: "125%",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>
              How else can we use or share your health information?
            </span>
          </h2>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "96%",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>
              We are allowed or required to share your information in other ways
              – usually in ways that contribute to the public good, such as
              public health and research.&nbsp;
            </span>
            <a name="_Int_3nDTlulR">
              <span style={{ fontFamily: "Arial" }}>
                We have to meet many conditions in the law before we can share
                your information for these purposes.
              </span>
            </a>
            <span style={{ fontFamily: "Arial" }}>
              &nbsp;For more information click
            </span>
            <span style={{ fontFamily: "Arial" }}>&nbsp;&nbsp;</span>
            {/* <a
            href="http://www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/index.html"
            style={{ textDecoration: "none" }}
          > */}
            <u>
              {/* <span style={{ fontFamily: "Arial", color: "#467886" }}>
                www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/index.html
              </span> */}
              <a
                style={{ fontFamily: "Arial", color: "#467886" }}
                href="http://www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/index.html"
              >
                Here
              </a>
            </u>
            {/* </a> */}
            <span style={{ fontFamily: "Arial" }}>.</span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                Help with public health and safety issues
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>
              We can share health information about you for certain situations
              such as:
            </span>
          </p>
          <ul type="disc" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>Preventing disease</span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Helping with product recalls
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Reporting adverse reactions to medications
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Reporting suspected abuse, neglect, or domestic violence
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                marginBottom: "10pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                Preventing or reducing a serious threat to anyone’s health or
                safety
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>Do research</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>
              We can use or share your information for health research.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>Comply with the law</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>
              We will share information about you if state or federal laws
              require it, including with the Department of Health and Human
              Services if it wants to see that we’re complying with federal
              privacy law.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                Respond to organ and tissue donation requests
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>
              We can share health information about you with organ procurement
              organizations.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                Work with a medical examiner or funeral director
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>
              We can share health information with a coroner, medical examiner,
              or funeral director when an individual dies.
            </span>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                Address workers’ compensation, law enforcement, and other
                government requests
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginLeft: "18pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>
              We can use or share health information about you:
            </span>
          </p>
          <ul type="disc" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                For workers’ compensation claims
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                For law enforcement purposes or with a law enforcement official
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                With health oversight agencies for activities authorized by law
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                marginBottom: "10pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                For special government functions such as military, national
                security, and presidential protective services
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>
                Respond to lawsuits and legal actions
              </span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "105%",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>
              We can share health information about you in response to a court
              or administrative order, or in response to a subpoena.
            </span>
          </p>
          <h1
            style={{
              marginTop: "9.4pt",
              marginBottom: "9.4pt",
              pageBreakInside: "avoid",
              pageBreakAfter: "avoid",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>Our Responsibilities</span>
          </h1>
          <ul type="disc" style={{ margin: "0pt", paddingLeft: "0pt" }}>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "96%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                We are required by law to maintain the privacy and security of
                your protected health information.
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "96%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                We will let you know promptly if a breach occurs that may have
                compromised the privacy or security of your information.
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                lineHeight: "96%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                We must follow the duties and privacy practices described in
                this notice and give you a copy of it.
              </span>
            </li>
            <li
              style={{
                marginLeft: "28.52pt",
                marginBottom: "10pt",
                lineHeight: "105%",
                paddingLeft: "7.48pt",
                fontFamily: "serif",
              }}
            >
              <span style={{ fontFamily: "Arial" }}>
                We will not use or share your information other than as
                described here unless you tell us we can in writing. If you tell
                us we can, you may change your mind at any time. Let us know in
                writing if you change your mind.
              </span>
            </li>
          </ul>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "96%",
            }}
          >
            <strong>
              <span style={{ fontFamily: "Arial" }}>For more information:</span>
            </strong>
          </p>
          <p
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              lineHeight: "96%",
            }}
          >
            {/* <span style={{ fontFamily: "Arial" }}>&nbsp;</span>
          <a
            href="http://www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html"
            style={{ textDecoration: "none" }}
          >
            <u>
              <span style={{ fontFamily: "Arial", color: "#467886" }}>www</span>
            </u>
          </a>
          <a
            href="http://www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html"
            style={{ textDecoration: "none" }}
          > */}
            <u>
              {/* <span style={{ fontFamily: "Arial", color: "#467886" }}>
                .hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html
              </span> */}
              <a
                style={{ fontFamily: "Arial", color: "#467886" }}
                href="http://www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html"
              >
                Click Here.
              </a>
            </u>
            {/* </a> */}
            {/* <span style={{ fontFamily: "Arial", color: "#0000ff" }}>.</span> */}
          </p>
          <h1
            style={{
              marginTop: "9.4pt",
              marginBottom: "9.4pt",
              pageBreakInside: "avoid",
              pageBreakAfter: "avoid",
              lineHeight: "134%",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: "Arial" }}>
              Changes to the Terms of this Notice:
            </span>
          </h1>
          <h1
            style={{
              marginTop: "9.4pt",
              marginBottom: "9.4pt",
              pageBreakInside: "avoid",
              pageBreakAfter: "avoid",
              lineHeight: "105%",
              fontSize: "12pt",
            }}
          >
            <span style={{ fontFamily: "Arial", fontWeight: "normal" }}>
              We can change the terms of this notice, and the changes will apply
              to all information we have about you. The new notice will be
              available upon request, in our office, and on our web site.&nbsp;
            </span>
          </h1>
        </div>
      </div>
    </Layout>
  );
}
