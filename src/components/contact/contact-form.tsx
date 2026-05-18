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
import {
  useForm,
  type ControllerRenderProps,
  type FieldErrors,
  type FieldPath,
} from "react-hook-form";

type ContactFieldName = FieldPath<ContactFormValues>;

type ContactInputFieldProps = {
  autoComplete?: string;
  disabled: boolean;
  errors: FieldErrors<ContactFormValues>;
  field: ControllerRenderProps<ContactFormValues, ContactFieldName>;
  id: string;
  label: string;
  name: ContactFieldName;
  placeholder: string;
  type?: string;
};

type ContactTextareaFieldProps = Omit<
  ContactInputFieldProps,
  "autoComplete" | "type"
> & {
  helpText: string;
  helpTextId: string;
};

const FIELD_ERROR_CLASS =
  "flex items-center gap-2 rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive";

function getEnhancedInputClassName(hasError: boolean, baseClassName: string) {
  return `${baseClassName} transition-all duration-300 input-enhanced ${
    hasError
      ? "border-destructive focus:border-destructive focus:ring-destructive shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
      : "hover:border-primary/50 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
  }`;
}

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
              <ContactInputField
                autoComplete="name"
                disabled={isSubmitting}
                errors={form.formState.errors}
                field={field}
                id="contact-name"
                label="Full name"
                name="name"
                placeholder="Your full name"
              />
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <ContactInputField
                autoComplete="email"
                disabled={isSubmitting}
                errors={form.formState.errors}
                field={field}
                id="contact-email"
                label="Email address"
                name="email"
                placeholder="you@company.com"
                type="email"
              />
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <ContactTextareaField
                disabled={isSubmitting}
                errors={form.formState.errors}
                field={field}
                helpText="Minimum 10 characters required"
                helpTextId="message-help"
                id="contact-message"
                label="Message"
                name="message"
                placeholder="Tell me about the product, timeline, or problem you want solved."
              />
            )}
          />

          <ContactSubmitSection isSubmitting={isSubmitting} />

          <ContactSuccessMessage
            isVisible={form.formState.isSubmitSuccessful && !isSubmitting}
          />
        </form>
      </Form>
    </div>
  );
}

function ContactInputField({
  autoComplete,
  disabled,
  errors,
  field,
  id,
  label,
  name,
  placeholder,
  type,
}: ContactInputFieldProps) {
  const error = errors[name];
  const errorId = `${name}-error`;

  return (
    <FormItem className="space-y-3">
      <FormLabel htmlFor={id} className="text-base font-semibold">
        {label}
      </FormLabel>
      <FormControl>
        <Input
          id={id}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={getEnhancedInputClassName(!!error, "h-12 text-base")}
          aria-describedby={error ? errorId : undefined}
          aria-invalid={!!error}
          disabled={disabled}
          {...field}
        />
      </FormControl>
      <ContactFieldError id={errorId} message={error?.message} />
    </FormItem>
  );
}

function ContactTextareaField({
  disabled,
  errors,
  field,
  helpText,
  helpTextId,
  id,
  label,
  name,
  placeholder,
}: ContactTextareaFieldProps) {
  const error = errors[name];
  const errorId = `${name}-error`;

  return (
    <FormItem className="space-y-3">
      <FormLabel htmlFor={id} className="text-base font-semibold">
        {label}
      </FormLabel>
      <FormControl>
        <Textarea
          id={id}
          placeholder={placeholder}
          className={getEnhancedInputClassName(
            !!error,
            "min-h-[160px] resize-y text-base"
          )}
          aria-describedby={error ? errorId : helpTextId}
          aria-invalid={!!error}
          disabled={disabled}
          {...field}
        />
      </FormControl>
      <div id={helpTextId} className="text-sm text-muted-foreground">
        {helpText}
      </div>
      <ContactFieldError id={errorId} message={error?.message} />
    </FormItem>
  );
}

function ContactFieldError({
  id,
  message,
}: {
  id: string;
  message: unknown;
}) {
  return (
    <FormMessage id={id} role="alert" className={FIELD_ERROR_CLASS}>
      {message ? (
        <>
          <AlertCircle
            className="h-4 w-4 flex-shrink-0 text-destructive"
            aria-hidden="true"
          />
          <span>{String(message)}</span>
        </>
      ) : null}
    </FormMessage>
  );
}

function ContactSubmitSection({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <div className="pt-4">
      <Button
        type="submit"
        className="btn-gradient h-14 w-full text-lg font-semibold shadow-custom-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-custom-xl disabled:hover:scale-100"
        disabled={isSubmitting}
        aria-describedby="submit-help"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-3 h-5 w-5 animate-spin" aria-hidden="true" />
            <span className="animate-pulse">Sending message...</span>
          </>
        ) : (
          <span>Send message</span>
        )}
      </Button>

      <p id="submit-help" className="mt-4 text-center text-sm text-muted-foreground">
        I typically respond within one business day.
      </p>
    </div>
  );
}

function ContactSuccessMessage({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-center dark:border-green-800 dark:bg-green-900/20">
      <p className="font-medium text-green-700 dark:text-green-300">
        Thank you. Your message has been sent successfully.
      </p>
    </div>
  );
}
