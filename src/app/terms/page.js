
const TermsOfUse = () => {

  const termsSectionStyling = "mb-8 font-karla";
  const termsHeaderStyling = "text-2xl font-lora mb-4";

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold font-lora mb-4">Terms of Use</h1>
      <p className="text-gray-600 mb-6 font-karla">Last Updated: Sept 8, 2024</p>

      <section className={termsSectionStyling}>
        <p>
          Welcome to TeachTo, a tool designed to assist
          special education teachers in generating Individualized Education
          Program (IEP) goals. Please read these Terms of Use carefully before
          using our service.
        </p>
        <br />
        <p>
          By accessing or using TeachTo (the “Service”), you
          agree to be bound by these Terms of Use. If you do not agree to these
          terms, you should not use the Service.
        </p>
      </section>

      <section className={termsSectionStyling}>
        <h2 className={termsHeaderStyling}>1. Use of the Service</h2>
        <p>
          The Service is provided for educational purposes only. It is intended
          to assist teachers by generating suggested IEP goals based on the
          input provided. However, the Service does not guarantee the
          appropriateness or completeness of the suggested goals for any
          specific individual. The final responsibility for the IEP goals rests
          with the teacher.
        </p>
      </section>

      <section className={termsSectionStyling}>
        <h2 className={termsHeaderStyling}>2. User Data and Privacy</h2>
        <p>
          We do not collect or store any personal information or data from users
          of the Service. Any input provided by the user during their
          interaction with the Service is used solely to generate IEP goal
          suggestions in real-time and is not retained after the session.
        </p>
        <br />
        <p>
          Please note that while we do not store your data, you are responsible
          for safeguarding any information you input into the Service,
          especially if it pertains to student records, in compliance with
          applicable data privacy regulations such as FERPA (Family Educational
          Rights and Privacy Act).
        </p>
      </section>

      <section className={termsSectionStyling}>
        <h2 className={termsHeaderStyling}>3. Intellectual Property</h2>
        <p>
          All content and materials made available through the Service,
          including but not limited to text, images, and software, are the
          intellectual property of Let Teachers Teach LLC or its licensors. You may
          not use, reproduce, or distribute any of the materials without prior
          written consent.
        </p>
      </section>

      <section className={termsSectionStyling}>
        <h2 className={termsHeaderStyling}>4. Disclaimer of Warranties</h2>
        <p>
          The Service is provided "as is" and "as available" without any
          warranties of any kind, either express or implied. Let Teachers Teach LLC
          does not guarantee that the Service will be error-free, secure, or
          uninterrupted.
        </p>
      </section>

      <section className={termsSectionStyling}>
        <h2 className={termsHeaderStyling}>5. Limitation of Liability</h2>
        <p>
          In no event shall Let Teachers Teach LLC be liable for any damages
          arising out of your use of the Service, including but not limited to
          incidental, consequential, or punitive damages, whether or not Let Teachers 
          Teach LLC has been advised of the possibility of such damages.
        </p>
      </section>

      <section className={termsSectionStyling}>
        <h2 className={termsHeaderStyling}>
          6. Modifications to Terms of Use
        </h2>
        <p>
          We reserve the right to modify these Terms of Use at any time. Any
          changes will be posted on this page with an updated "Last Updated"
          date. Continued use of the Service after such changes indicates your
          acceptance of the revised terms.
        </p>
      </section>

      <section className={termsSectionStyling}>
        <h2 className={termsHeaderStyling}>7. Governing Law</h2>
        <p>
          These Terms of Use shall be governed by and construed in accordance
          with the laws of the State of Ohio, without regard to its conflict
          of law provisions.
        </p>
      </section>

      <section className={termsSectionStyling}>
        <h2 className={termsHeaderStyling}>8. Contact Information</h2>
        <p>
          If you have any questions about these Terms of Use, please shoot us an email
          at owen@iukaimpact.com.
        </p>
      </section>
    </div>
  );
};

export default TermsOfUse;
