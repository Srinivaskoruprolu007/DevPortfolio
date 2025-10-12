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
        title: "✅ Message sent successfully!",
        description:
          "Thank you for your message. I'll get back to you within 24 hours.",
        duration: 5000,
      });
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "❌ Failed to send message",
        description:
          "Something went wrong. Please try again or contact me directly via email.",
        variant: "destructive",
        duration: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass p-8 rounded-2xl shadow-custom-xl max-w-2xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
          aria-labelledby="contact-form-heading"
          noValidate
        >
          <div className="text-center mb-8">
            <h3 id="contact-form-heading" className="text-2xl font-bold mb-2">
              Let's Start a Conversation 💬
            </h3>
            <p className="text-muted-foreground">
              I'd love to hear about your project or just say hello!
            </p>
          </div>
          
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel 
                  htmlFor="contact-name" 
                  className="text-base font-semibold flex items-center gap-2"
                >
                  👤 Full Name *
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="contact-name"
                      placeholder="Enter your full name"
                      className={`h-12 text-base transition-all duration-300 input-enhanced ${
                        form.formState.errors.name 
                          ? "border-destructive focus:border-destructive focus:ring-destructive shadow-[0_0_0_3px_rgba(239,68,68,0.1)]" 
                          : "focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] hover:border-primary/50"
                      }`}
                      aria-describedby={
                        form.formState.errors.name ? "name-error" : undefined
                      }
                      aria-invalid={!!form.formState.errors.name}
                      disabled={isSubmitting}
                      {...field}
                    />
                    {isSubmitting && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage
                  id="name-error"
                  role="alert"
                  className="flex items-center gap-2 text-sm bg-destructive/10 text-destructive px-3 py-2 rounded-md"
                >
                  {form.formState.errors.name && (
                    <>
                      <AlertCircle
                        className="h-4 w-4 text-destructive flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{form.formState.errors.name?.message}</span>
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
                <FormLabel 
                  htmlFor="contact-email" 
                  className="text-base font-semibold flex items-center gap-2"
                >
                  📧 Email Address *
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your.email@example.com"
                      className={`h-12 text-base transition-all duration-300 input-enhanced ${
                        form.formState.errors.email 
                          ? "border-destructive focus:border-destructive focus:ring-destructive shadow-[0_0_0_3px_rgba(239,68,68,0.1)]" 
                          : "focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] hover:border-primary/50"
                      }`}
                      aria-describedby={
                        form.formState.errors.email ? "email-error" : undefined
                      }
                      aria-invalid={!!form.formState.errors.email}
                      disabled={isSubmitting}
                      {...field}
                    />
                    {isSubmitting && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormMessage
                  id="email-error"
                  role="alert"
                  className="flex items-center gap-2 text-sm bg-destructive/10 text-destructive px-3 py-2 rounded-md"
                >
                  {form.formState.errors.email && (
                    <>
                      <AlertCircle
                        className="h-4 w-4 text-destructive flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{form.formState.errors.email?.message}</span>
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
                <FormLabel 
                  htmlFor="contact-message" 
                  className="text-base font-semibold flex items-center gap-2"
                >
                  💬 Message *
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Textarea
                      id="contact-message"
                      placeholder="Tell me about your project, ideas, or just say hello! I'm excited to hear from you..."
                      className={`min-h-[140px] resize-y text-base transition-all duration-300 input-enhanced ${
                        form.formState.errors.message 
                          ? "border-destructive focus:border-destructive focus:ring-destructive shadow-[0_0_0_3px_rgba(239,68,68,0.1)]" 
                          : "focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] hover:border-primary/50"
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
                    {isSubmitting && (
                      <div className="absolute right-3 top-3">
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </FormControl>
                <div 
                  id="message-help" 
                  className="text-sm text-muted-foreground flex items-center gap-1"
                >
                  ℹ️ Minimum 10 characters required
                </div>
                <FormMessage
                  id="message-error"
                  role="alert"
                  className="flex items-center gap-2 text-sm bg-destructive/10 text-destructive px-3 py-2 rounded-md"
                >
                  {form.formState.errors.message && (
                    <>
                      <AlertCircle
                        className="h-4 w-4 text-destructive flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span>{form.formState.errors.message?.message}</span>
                    </>
                  )}
                </FormMessage>
              </FormItem>
            )}
          />

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full h-14 text-lg font-semibold btn-gradient shadow-custom-lg hover:shadow-custom-xl transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none disabled:hover:scale-100"
              disabled={isSubmitting}
              aria-describedby="submit-help"
            >
              {isSubmitting ? (
                <>
                  <Loader2
                    className="mr-3 h-5 w-5 animate-spin"
                    aria-hidden="true"
                  />
                  <span className="animate-pulse">Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <span className="ml-2 text-xl">🚀</span>
                </>
              )}
            </Button>
            
            <p
              id="submit-help"
              className="text-sm text-muted-foreground text-center mt-4 flex items-center justify-center gap-1"
            >
              <span>⏱️</span>
              I typically respond within 24 hours
            </p>
          </div>
          
          {/* Success state indicator */}
          {form.formState.isSubmitSuccessful && !isSubmitting && (
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-green-700 dark:text-green-300 font-medium flex items-center justify-center gap-2">
                <span className="text-xl">✨</span>
                Thank you! Your message has been sent successfully.
              </p>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}
