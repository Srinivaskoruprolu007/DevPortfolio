import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/email";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await sendEmail(data);
      toast({
        title: "Message sent successfully",
        description:
          "Thanks for reaching out. I will get back to you within one business day.",
        duration: 5000,
      });
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Failed to send message",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again in a moment.",
        variant: "destructive",
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass mx-auto max-w-none rounded-[28px] border border-border/60 p-6 shadow-custom-xl sm:p-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
          aria-labelledby="contact-form-heading"
          noValidate
        >
          <div className="mb-8 text-center">
            <h3 id="contact-form-heading" className="mb-2 text-2xl font-bold">
              Start the conversation
            </h3>
            <p className="text-muted-foreground">
              A few details about the product, scope, or team is more than
              enough to get started.
            </p>
          </div>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel htmlFor="contact-name" className="text-base font-semibold">
                  Full name
                </FormLabel>
                <FormControl>
                  <Input
                    id="contact-name"
                    autoComplete="name"
                    placeholder="Your full name"
                    className={`h-12 text-base transition-all duration-300 input-enhanced ${
                      form.formState.errors.name
                        ? "border-destructive focus:border-destructive focus:ring-destructive shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
                        : "hover:border-primary/50 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                    }`}
                    aria-describedby={
                      form.formState.errors.name ? "name-error" : undefined
                    }
                    aria-invalid={!!form.formState.errors.name}
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage
                  id="name-error"
                  role="alert"
                  className="flex items-center gap-2 rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive"
                >
                  {form.formState.errors.name && (
                    <>
                      <AlertCircle
                        className="h-4 w-4 flex-shrink-0 text-destructive"
                        aria-hidden="true"
                      />
                      <span>{form.formState.errors.name.message}</span>
                    </>
                  )}
                </FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel htmlFor="contact-email" className="text-base font-semibold">
                  Email address
                </FormLabel>
                <FormControl>
                  <Input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={`h-12 text-base transition-all duration-300 input-enhanced ${
                      form.formState.errors.email
                        ? "border-destructive focus:border-destructive focus:ring-destructive shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
                        : "hover:border-primary/50 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                    }`}
                    aria-describedby={
                      form.formState.errors.email ? "email-error" : undefined
                    }
                    aria-invalid={!!form.formState.errors.email}
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage
                  id="email-error"
                  role="alert"
                  className="flex items-center gap-2 rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive"
                >
                  {form.formState.errors.email && (
                    <>
                      <AlertCircle
                        className="h-4 w-4 flex-shrink-0 text-destructive"
                        aria-hidden="true"
                      />
                      <span>{form.formState.errors.email.message}</span>
                    </>
                  )}
                </FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel htmlFor="contact-message" className="text-base font-semibold">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell me about the product, timeline, or problem you want solved."
                    className={`min-h-[160px] resize-y text-base transition-all duration-300 input-enhanced ${
                      form.formState.errors.message
                        ? "border-destructive focus:border-destructive focus:ring-destructive shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
                        : "hover:border-primary/50 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
                    }`}
                    aria-describedby={
                      form.formState.errors.message
                        ? "message-error"
                        : "message-help"
                    }
                    aria-invalid={!!form.formState.errors.message}
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <div id="message-help" className="text-sm text-muted-foreground">
                  Minimum 10 characters required
                </div>
                <FormMessage
                  id="message-error"
                  role="alert"
                  className="flex items-center gap-2 rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive"
                >
                  {form.formState.errors.message && (
                    <>
                      <AlertCircle
                        className="h-4 w-4 flex-shrink-0 text-destructive"
                        aria-hidden="true"
                      />
                      <span>{form.formState.errors.message.message}</span>
                    </>
                  )}
                </FormMessage>
              </FormItem>
            )}
          />

          <div className="pt-4">
            <Button
              type="submit"
              className="btn-gradient h-14 w-full text-lg font-semibold shadow-custom-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-custom-xl disabled:hover:scale-100"
              disabled={isSubmitting}
              aria-describedby="submit-help"
            >
              {isSubmitting ? (
                <>
                  <Loader2
                    className="mr-3 h-5 w-5 animate-spin"
                    aria-hidden="true"
                  />
                  <span className="animate-pulse">Sending message...</span>
                </>
              ) : (
                <span>Send message</span>
              )}
            </Button>

            <p
              id="submit-help"
              className="mt-4 text-center text-sm text-muted-foreground"
            >
              I typically respond within one business day.
            </p>
          </div>

          {form.formState.isSubmitSuccessful && !isSubmitting && (
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-center dark:border-green-800 dark:bg-green-900/20">
              <p className="font-medium text-green-700 dark:text-green-300">
                Thank you. Your message has been sent successfully.
              </p>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}
