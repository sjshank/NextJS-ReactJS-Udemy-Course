import ContactForm from "@/components/Contact/contactForm";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Let us know how can I help to answer your query."
        />
      </Head>
      <div>
        <Toaster />
      </div>
      <ContactForm />
    </>
  );
};

export default ContactPage;
