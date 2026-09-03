import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit, reset] = useForm("xqpkbwza", {
    data: {
      subject: "New Portfolio Contact Message",
    },
  });

  if (state.succeeded) {
    return (
      <div className="rounded-[2rem] border border-aqua/20 bg-aqua/5 p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-aqua/10">
            <span className="text-lg text-aqua">✓</span>
          </div>

          <p className="font-mono text-xs font-bold tracking-[0.18em] text-aqua">
            MESSAGE SENT
          </p>
        </div>

        <h3 className="mt-6 font-display text-3xl font-bold text-ink">
          Thanks for reaching out.
        </h3>

        <p className="mt-3 max-w-md text-sm leading-6 text-ink/60">
          Your message has been submitted successfully. I’ll get back to you
          as soon as possible.
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-7 rounded-xl bg-ink px-5 py-3 text-xs font-black uppercase tracking-wider text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-ink/10 bg-paper/80 p-7 shadow-[0_20px_60px_rgba(20,20,20,0.06)] backdrop-blur-sm lg:p-8"
    >
      {/* Header */}
      <div className="mb-7">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ember">
          LET'S TALK
        </p>

        <h3 className="mt-2 font-display text-2xl font-bold text-ink">
          Have a project in mind?
        </h3>

        <p className="mt-2 max-w-md text-sm leading-6 text-ink/50">
          Tell me a little about what you're building and I'll get back to
          you.
        </p>
      </div>

      {/* Name + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-[10px] font-black uppercase tracking-[0.16em] text-ink/50"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3.5 text-sm text-ink outline-none transition-all duration-300 placeholder:text-ink/25 focus:border-ember focus:bg-white focus:ring-2 focus:ring-ember/10"
          />

          <ValidationError
            field="name"
            prefix="Name"
            errors={state.errors}
            className="mt-2 text-xs text-red-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[10px] font-black uppercase tracking-[0.16em] text-ink/50"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3.5 text-sm text-ink outline-none transition-all duration-300 placeholder:text-ink/25 focus:border-ember focus:bg-white focus:ring-2 focus:ring-ember/10"
          />

          <ValidationError
            field="email"
            prefix="Email"
            errors={state.errors}
            className="mt-2 text-xs text-red-500"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-2 block text-[10px] font-black uppercase tracking-[0.16em] text-ink/50"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={7}
          placeholder="Tell me what you're building..."
          className="w-full resize-none rounded-xl border border-ink/10 bg-white/60 px-4 py-3.5 text-sm leading-6 text-ink outline-none transition-all duration-300 placeholder:text-ink/25 focus:border-ember focus:bg-white focus:ring-2 focus:ring-ember/10"
        />

        <ValidationError
          field="message"
          prefix="Message"
          errors={state.errors}
          className="mt-2 text-xs text-red-500"
        />
      </div>

      {/* General Error */}
      {state.errors && (
        <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
          <p className="text-xs font-semibold leading-5 text-red-500">
            Something went wrong while sending your message. Please try again.
          </p>
        </div>
      )}

      {/* Submit */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={state.submitting}
          className="group rounded-xl bg-ink px-6 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember disabled:cursor-not-allowed disabled:opacity-50"
        >
          {state.submitting ? (
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 animate-spin rounded-full border-2 border-paper/30 border-t-paper" />
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Send message
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          )}
        </button>

        <p className="text-[11px] leading-5 text-ink/35">
          Your message goes directly to my inbox.
        </p>
      </div>
    </form>
  );
}