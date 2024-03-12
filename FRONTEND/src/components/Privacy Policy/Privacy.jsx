import React from "react";

const Privacy = () => {
  return (
    <div className="text-center text-gray-800 text-lg mx-auto max-w-2xl mt-8 px-4">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">
        🔒 Your Privacy Matters to Us! Read Our Privacy Policy
      </h1>

      <h2 className="text-2xl font-bold mb-3">Introduction</h2>
      <p className="mb-6">
        Welcome to AdvisioScreens ("," "us", "our", and "we"), a website located
        at www.AdvisioScreens.com (the "Site") and operated by AdvisioScreens,
        Inc. We are committed to maintaining robust privacy protections for our
        Users. Our Privacy Policy ("Privacy Policy") is designed to help you
        understand how we collect, use, and safeguard the information you
        provide to us and to assist you in making informed decisions when using
        our Service. Capitalized terms have the same meaning as defined in our
        Terms of Use. By accepting our Privacy Policy and Terms of Use (found
        here: located at www.adquick.com/terms), you consent to our collection,
        storage, use and disclosure of your personal information as described in
        this Privacy Policy
      </p>

      <h2 className="text-2xl font-bold mb-3">
        Children's Online Privacy Protection Act (COPPA)
      </h2>
      <p className="mb-6">
        We do not intentionally gather Personal Information from visitors who
        are under the age of 13.
      </p>

      <h2 className="text-2xl font-bold mb-3">Types of Data We Collect</h2>
      <p className="mb-3">
        We collect "Non-Personal Information" and "Personal Information."
        Non-Personal Information includes information that cannot be used to
        personally identify you, such as anonymous usage data, general
        demographic information we may collect, referring/exit pages and URLs,
        platform types, preferences you submit and preferences that are
        generated based on the data you submit and number of clicks.
      </p>
      <p className="mb-6">
        "Personal Information" means data that allows someone to identify or
        contact you, including, for example, your name, address, telephone
        number, e-mail address, as well as any other non-public information
        about you that is associated with or linked to any of the foregoing
        data.
      </p>

      <h2 className="text-2xl font-bold mb-3">
        Information Collected via Technology
      </h2>
      <p className="mb-3">
        • In an effort to improve the quality of the Service, we track
        information provided to us by your browser or by our software
        application when you view or use the Service, such as the website you
        came from (known as the "referring URL"), the type of browser you use,
        the device from which you connected to the Service, the time and date of
        access, and other information that does not personally identify you. We
        track this information using cookies, or small text files which include
        an anonymous unique identifier. Cookies are sent to a user's browser
        from our servers and are stored on the user's computer hard drive.
        Sending a cookie to a user's browser enables us to collect Non-Personal
        information about that user and keep a record of the user's preferences
        when utilizing our services, both on an individual and aggregate basis.
        The information we collect with cookies is not sold, rented, or shared
        with any outside parties. Users who disable their Web browser's ability
        to accept cookies will be able to browse our Site but may not be able to
        successfully use our Service
      </p>
      <p className="mb-6">
        We use both session ID cookies and persistent cookies. A session ID
        cookie expires when you close your browser. A persistent cookie remains
        on your hard drive for an extended period of time. You can remove
        persistent cookies by following directions provided in your Internet
        browser's "help" file. Persistent cookies enable us to track and target
        the interests of our users to enhance the experience on our Site. This
        privacy policy covers the use of cookies by our Site only and does not
        cover the use of cookies by any advertisers.
      </p>

      <h2 className="text-2xl font-bold mb-3">Contact information</h2>
      <p>
        If you have any questions about this Privacy Policy or the Service,
        please contact us at{" "}
        <a
          href="mailto:AdvisioScreens@gmail.com"
          className="text-blue-500 hover:underline"
        >
          AdvisioScreens@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Privacy;