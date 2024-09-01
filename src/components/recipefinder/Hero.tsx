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
import { useEffect } from "react";

// Define Form Rules / Schema
const formSchema = z.object({
  search: z.string().min(1, {}),
});

export default function Hero() {
  const handleSearch = (searchValue: string) => {
    if (searchValue) {
      const currentUrl = new URL(window.location.origin);
      currentUrl.searchParams.set('search', searchValue);

      // Redirect to the new URL with the search parameter
      window.location.href = currentUrl.toString();
    }
  }

  const clearSearchParam = () => {
    const currentUrl = new URL(window.location.origin);
    currentUrl.searchParams.delete('search');

    // Update the browser's URL without reloading the page
    window.history.pushState({}, '', currentUrl.pathname + currentUrl.search);
    window.location.reload();
  };

  const getSearchParam = () => {
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get('search');
    if (searchParam) {
      return searchParam;
    }
    return '';
  }

  // Define Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    handleSearch(values.search);
  }

  useEffect(() => {
    form.setValue('search', getSearchParam())
  }, [])

  return (
    <header className="bg-blue-200 p-8">
      <div className="grid min-h-[50vh] w-full place-items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl">
            Welcome to
          </h1>
          <h1 className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl text-green-600">
            Simple Recipe Finder
          </h1>
          <h1 className="mx-auto w-full !text-gray-500 lg:text-lg text-base">
            Spend your time to learn new recipe and improve your cooking skill through this website
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
                              placeholder="Find a food"
                              {...field}
                              className="w-full"
                            />
                            <Button type="submit" className="bg-green-600 hover:bg-green-700">Find</Button>
                            <Button type="button" variant={'destructive'} onClick={clearSearchParam}>Reset</Button>
                          </div>
                        </FormControl>
                        <FormDescription>
                          Look for a recipe by inputting the name of the food you want to try
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
