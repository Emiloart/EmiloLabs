import { PageHero, Contact } from "../site-shared";

function ContactPage() {
  return (
    <>
      <PageHero
        label="CONTACT"
        title="Start a conversation with Emilo Labs."
        summary="For partnerships, research, product, media, careers, or general inquiries, contact the institution directly."
      />
      <Contact />
    </>
  );
}

export default ContactPage;
