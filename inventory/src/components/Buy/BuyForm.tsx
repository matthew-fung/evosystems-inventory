import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '../ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const formSchema = z.object({
  type: z.string(),
  brand: z.string().min(2, {
    message: 'name must be at least 2 characters.',
  }),
  model: z.string().min(2, {
    message: 'name must be at least 2 characters.',
  }),
  capacity: z.number().int().positive(),
  price: z.number().int().positive(),
})

const itemTypes = [
  'CPU',
  'Motherboard',
  'RAM',
  'GPU',
  'Storage',
  'PSU',
  'Network',
  'Case',
]

export function BuyForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      type: 'CPU',
      brand: '',
      model: '',
      capacity: 0,
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    //   TODO: Save the form values to DB
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the type of item purchased" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {itemTypes.map(itemType => (
                    <SelectItem
                      className="text-base"
                      key={itemType}
                      value={itemType}
                    >
                      {itemType}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="brand"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item Brand</FormLabel>
              <FormControl>
                <Input className="text-base" placeholder="Brand" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="model"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item model</FormLabel>
              <FormControl>
                <Input className="text-base" placeholder="Model" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="capacity"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Capacity</FormLabel>
              <FormControl>
                <Input
                  className="text-base"
                  placeholder="Capacity in GB"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="price"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item price</FormLabel>
              <FormControl>
                <Input
                  className="text-base"
                  placeholder="Item price"
                  {...field}
                  type="number"
                  pattern="[0-9]*"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default BuyForm
