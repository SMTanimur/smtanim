import { contacts } from "@constants/data";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./contact/contact-form";

const HomeContact = () => {

  return (
    <section className="py-10  relative">
      
      <div className="layout-container relative">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
        <div className="grid gap-12 mt-10 place-items-center lg:grid-cols-2">
          <ContactForm />
          <div>
            <h3>Other places</h3>
            <ul className="mt-5">
              {contacts.map((contact) => (
                <li key={contact.type} className="mb-5">
                  <Link
                    href={contact.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-3"
                  >
                    <Image
                      width={30}
                      height={30}
                      alt={contact.type}
                      src={contact.image}
                      className="rounded-full"
                    />
                    <span>{contact.display}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
