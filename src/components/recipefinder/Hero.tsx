"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define Form Rules / Schema
const formSchema = z.object({
  search: z.string().min(1, {}),
});

export default function Hero() {
  // Define Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <header className="bg-blue-200 p-8">
      <div className="grid min-h-[50vh] w-full place-items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl">
            Selamat datang di
          </h1>
          <h1 className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl text-green-600">
            Simple Recipe Finder
          </h1>
          <h1 className="mx-auto w-full !text-gray-500 lg:text-lg text-base">
            Luangkan waktu anda untuk mempelajari resep baru melalui website ini
          </h1>
          <div className="mt-8 grid w-full place-items-start md:justify-center">
            <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="search"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex gap-2">
                            <Input
                              placeholder="Cari Resep"
                              {...field}
                              className="w-full"
                            />
                            <Button type="submit">Cari</Button>
                          </div>
                        </FormControl>
                        <FormDescription>
                          Cari resep dengan menggunakan input yang telah
                          disediakan
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
