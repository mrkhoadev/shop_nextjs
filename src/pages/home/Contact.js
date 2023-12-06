import ContactForm from "@/components/ContactForm";
import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container max-w-7xl mx-auto min-h-[100vh] flex justify-center items-center flex-col gap-y-8">
        {/* Title  */}
        <div className="section-title">
          <h2 className="text-4xl font-bold text-100 flex gap-x-6 justify-center">
            <p className="flex gap-x-2">
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                L
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                I
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                Ê
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                N
              </span>
            </p>
            <p className="flex gap-x-2">
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                H
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                Ệ
              </span>
            </p>
          </h2>
        </div>
        {/* content  */}
        <div className="flex gap-8 mt-5 w-full">
          <iframe
            className="flex-1"
            width="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.4064000497674!2d105.78126121547308!3d20.976340386026827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acd2d89877d7%3A0xe55435164e9b4695!2zMTk3IFRy4bqnbiBQaMO6LCBQLiBWxINuIFF1w6FuLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1650976801748!5m2!1svi!2s"
            frameBorder="0"
          />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
