"use client";

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
import {
  ContactFormValues,
  getContactFormSchema,
} from "@/lib/contact-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useForm } from "react-hook-form";
export function ContactForm() {
  const t = useTranslations("contactForm");
  const validationMessages = useTranslations("validation");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(getContactFormSchema(validationMessages)),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    // Handle form submission
    console.log(data);
  }

  return (
    <div className="bg-primary ">
    <div className='rounded-tl-lg rounded-tr-lg bg-white pt-[80px] pb-[120px]'>
      <div className="container">
      <h2 className='title text-primary mb-4'>{t("title")}</h2>
      <div className='flex justify-between mt-[130px] gap-[40px]'>
        <div className="flex-1">
        <Image className="rounded-lg" src="/contact.png" width={630} height={602} alt="contact" />
        </div>
        <div className="flex-1">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='legal'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t("legal")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-[20px]">
              <div className="flex-1">
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t("name")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
              </div>
              <div className="flex-1">
              <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t("lastName")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
              </div>
              </div>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={t("email")}
                      type='email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={t("phone")}
                      type='email'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder='Type your message here...'
                      className='resize-none'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type='submit'>{t("submit")}</Button>
          </form>
        </Form>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}
