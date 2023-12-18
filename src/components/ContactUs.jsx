import { useState } from "react";
import { useForm } from "react-hook-form"
import SectionTitle from "./SectionTitle";

export default function ContactUs() {
    const [contacted, setContacted] = useState(false);

    const {
        trigger,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (e) => {
        e.preventDefault();
        const isValid = await trigger();
        if (!isValid) {
            return;
        }
        //do the post here
        setContacted(true);
    };

    const inputStyles = `text-slate-600 w-full rounded-lg px-5 py-3 mt-5`;

    const errorStyles = 'mt-1 text-red-500';

    return (
        <section className='py-20 align-element bg-emerald-100' id='contact'>
            <SectionTitle text='get in touch' />
            {contacted ? <div className="text-slate-500">
                Thank you for contacting me. I will be in contact shortly.
            </div>
                :
                <form
                    target=""
                    onSubmit={onSubmit}
                    action=""
                    method="POST"
                >
                    {/* register your input into the hook by invoking the "register" function */}
                    <input
                        type="text"
                        className={inputStyles}
                        placeholder="Name"
                        aria-label="name"
                        {...register("name", {
                            required: true,
                            maxLength: 50
                        })}
                    />
                    {errors.name && (
                        <p className={errorStyles}>
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLength" && "Name is too long"}
                        </p>
                    )}
                    <input
                        type="text"
                        className={inputStyles}
                        placeholder="Email"
                        aria-label="email"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                    />
                    {errors.email && (
                        <p className={errorStyles}>
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "pattern" && "Invalid email address."}
                        </p>
                    )}
                    <textarea
                        className={inputStyles}
                        placeholder="Message"
                        rows={4}
                        cols={50}
                        {...register("message", {
                            required: true,
                            maxLength: 2000,
                        })}
                    />
                    {errors.message && (
                        <p className={errorStyles}>
                            {errors.message.type === "required" &&
                                "This field is required."}
                            {errors.message.type === "maxLength" &&
                                "Max length is 2000 char."}
                        </p>
                    )}
                    <input type="submit" aria-label="submit"
                        className="bg-emerald-600 tracking-wider capitalize mt-5 w-full rounded-lg px-5 py-3 text-white hover:cursor-pointer hover:bg-emerald-900" />
                </form>}
        </section >
    )
}