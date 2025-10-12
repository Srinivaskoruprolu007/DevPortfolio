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
        title: "Message sent successfully!",
        description:
          "Thank you for your message. I'll get back to you within 24 hours.",
      });
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Failed to send message",
        description:
          "Something went wrong. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 sm:space-y-6"
        aria-labelledby="contact-form-heading"
        noValidate
      >
        <h3 id="contact-form-heading" className="sr-only">
          Contact form
        </h3>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="contact-name">Full Name *</FormLabel>
              <FormControl>
                <Input
                  id="contact-name"
                  placeholder="Enter your full name"
                  className={`h-11 sm:h-10 text-base sm:text-sm ${form.formState.errors.name ? "border-destructive focus:border-destructive focus:ring-destructive" : ""}`}
                  aria-describedby={
                    form.formState.errors.name ? "name-error" : undefined
                  }
                  aria-invalid={!!form.formState.errors.name}
                  {...field}
                />
              </FormControl>
              <FormMessage
                id="name-error"
                role="alert"
                className="flex items-center gap-1"
              >
                {form.formState.errors.name && (
                  <AlertCircle
                    className="h-3 w-3 text-destructive"
                    aria-hidden="true"
                  />
                )}
                {form.formState.errors.name?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="contact-email">Email Address *</FormLabel>
              <FormControl>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="your.email@example.com"
                  className={`h-11 sm:h-10 text-base sm:text-sm ${form.formState.errors.email ? "border-destructive focus:border-destructive focus:ring-destructive" : ""}`}
                  aria-describedby={
                    form.formState.errors.email ? "email-error" : undefined
                  }
                  aria-invalid={!!form.formState.errors.email}
                  {...field}
                />
              </FormControl>
              <FormMessage
                id="email-error"
                role="alert"
                className="flex items-center gap-1"
              >
                {form.formState.errors.email && (
                  <AlertCircle
                    className="h-3 w-3 text-destructive"
                    aria-hidden="true"
                  />
                )}
                {form.formState.errors.email?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="contact-message">Message *</FormLabel>
              <FormControl>
                <Textarea
                  id="contact-message"
                  placeholder="Tell me about your project or inquiry..."
                  className={`min-h-[120px] sm:min-h-[100px] resize-y text-base sm:text-sm ${form.formState.errors.message ? "border-destructive focus:border-destructive focus:ring-destructive" : ""}`}
                  aria-describedby={
                    form.formState.errors.message
                      ? "message-error"
                      : "message-help"
                  }
                  aria-invalid={!!form.formState.errors.message}
                  {...field}
                />
              </FormControl>
              <div id="message-help" className="text-xs text-muted-foreground">
                Minimum 10 characters required
              </div>
              <FormMessage
                id="message-error"
                role="alert"
                className="flex items-center gap-1"
              >
                {form.formState.errors.message && (
                  <AlertCircle
                    className="h-3 w-3 text-destructive"
                    aria-hidden="true"
                  />
                )}
                {form.formState.errors.message?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full h-12 sm:h-10 text-base sm:text-sm font-medium"
          disabled={isSubmitting}
          aria-describedby="submit-help"
        >
          {isSubmitting ? (
            <>
              <Loader2
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
              Sending Message...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
        <p
          id="submit-help"
          className="text-xs text-muted-foreground text-center"
        >
          I typically respond within 24 hours
        </p>
      </form>
    </Form>
  );
}
