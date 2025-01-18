import React from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast, Bounce } from "react-toastify";

function ContactFormCard({ serviceId, templateId, publicKey }) {
  const schema = z.object({
    from_firstName: z.string().nonempty("Please enter your first name"),
    from_lastName: z.string().nonempty("Please enter your last name"),
    from_email: z
      .string()
      .nonempty("Please enter your email address")
      .email("You must provide a valid email address"),
    from_phoneNumber: z
      .string()
      .nonempty("Please enter your phone number.")
      .min(10, "The phone number must have exactly 10 characters.")
      .max(15),
    from_message: z.string().nonempty("Please enter your message").min(10),
    to_name: z.string().optional(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      to_name: "Digital Pebbles",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(serviceId, templateId, data, publicKey);
      toast.success("Thank you! Your message has been sent successfully.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      reset();
    } catch (error) {
      toast.error("Failed to send your message. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <>
      <div className="w-full lg:w-3/5 h-auto flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-auto flex flex-col md:grid grid-cols-2 items-center justify-items-center border-y-cyan-400 border-y-2 rounded-sm shadow-xl gap-5 md:gap-7 p-5"
        >
          <div className="w-full">
            <label htmlFor="first_name">First Name</label> <br />
            <input
              {...register("from_firstName")}
              id="first_name"
              type="text"
              placeholder="Enter your first name"
              className="w-full p-3 rounded-sm outline-none border-[1px] border-gray-300 focus:border-cyan-400 mt-1"
            />
            {errors.from_firstName && (
              <div className="text-red-500 pt-1">
                {errors.from_firstName.message}
              </div>
            )}
          </div>

          <div className="w-full">
            <label htmlFor="last_name">Last Name</label> <br />
            <input
              {...register("from_lastName")}
              id="last_name"
              type="text"
              placeholder="Enter your last name"
              className="w-full p-3 rounded-sm outline-none border-[1px] border-gray-300 focus:border-cyan-400 mt-1"
            />
            {errors.from_lastName && (
              <div className="text-red-500 pt-1">
                {errors.from_lastName.message}
              </div>
            )}
          </div>

          <div className="w-full hidden">
            <label htmlFor="to_name">Last Name</label> <br />
            <input
              {...register("to_name")}
              id="to_name"
              type="text"
              placeholder="Enter your last name"
              className="w-full p-3 rounded-sm outline-none border-[1px] border-gray-300 focus:border-cyan-400 mt-1"
            />
            {errors.from_lastName && (
              <div className="text-red-500 pt-1">
                {errors.from_lastName.message}
              </div>
            )}
          </div>

          <div className="w-full">
            <label htmlFor="email">Email</label> <br />
            <input
              {...register("from_email")}
              id="email"
              type="text"
              placeholder="Enter your email address"
              className="w-full p-3 rounded-sm outline-none border-[1px] border-gray-300 focus:border-cyan-400 mt-1"
            />
            {errors.from_email && (
              <div className="text-red-500 pt-1">
                {errors.from_email.message}
              </div>
            )}
          </div>

          <div className="w-full">
            <label htmlFor="phoneNumber">Phone Number</label> <br />
            <input
              {...register("from_phoneNumber")}
              id="phoneNumber"
              type="text"
              placeholder="Enter your phone number"
              className="w-full p-3 rounded-sm outline-none border-[1px] border-gray-300 focus:border-cyan-400 mt-1"
            />
            {errors.from_phoneNumber && (
              <div className="text-red-500 pt-1">
                {errors.from_phoneNumber.message}
              </div>
            )}
          </div>

          <div className="w-full h-auto col-span-2">
            <label htmlFor="message">Message</label> <br />
            <textarea
              id="message"
              {...register("from_message")}
              placeholder="Enter your message"
              className="w-full min-h-52 resize-none p-3 rounded-sm outline-none border-[1px] border-gray-300 focus:border-cyan-400 mt-1"
            ></textarea>
            {errors.from_message && (
              <div className="text-red-500 pt-1">
                {errors.from_message.message}
              </div>
            )}
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-400 py-2 px-5 text-lg capitalize text-white rounded-3xl cursor-pointe z-[999]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactFormCard;
