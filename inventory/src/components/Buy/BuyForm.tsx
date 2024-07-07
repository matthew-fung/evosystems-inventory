import Parts from '@/api/Parts'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'

const formSchema = z.object({
  type: z.string(),
  brand: z.string().min(2, {
    message: 'Brand must be at least 2 characters.',
  }),
  model: z.string().min(2, {
    message: 'Model must be at least 2 characters.',
  }),
  capacity: z.number().optional(),
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

const formFieldsMap = {
  CPU: ['brand', 'model', 'price'],
  Motherboard: ['brand', 'model', 'price'],
  RAM: ['brand', 'model', 'capacity', 'price'],
  GPU: ['brand', 'model', 'price'],
  Storage: ['brand', 'model', 'capacity', 'price'],
  PSU: ['brand', 'model', 'capacity', 'price'],
  Network: ['brand', 'model'],
  Case: ['brand', 'model', 'price'],
}

export function BuyForm() {
  const { toast } = useToast()
  const [selectedType, setSelectedType] = useState(itemTypes[0])
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      type: 'CPU',
      brand: '',
      model: '',
      capacity: 0,
      price: 0,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Remove 'capacity' from values if not present in formFieldsMap
    if (!formFieldsMap[selectedType].includes('capacity')) {
      delete values.capacity
    }

    await Parts.add(values)

    toast({
      title: 'Purchase saved',
    })

    // Reset form after submission
    form.reset({
      type: selectedType,
      brand: '',
      model: '',
      capacity: 0,
      price: 0,
    })
  }

  const handleTypeChange = value => {
    setSelectedType(value)
    form.reset({
      type: value,
      brand: '',
      model: '',
      capacity: 0,
      price: 0,
    })
  }

  const renderFormField = name => {
    switch (name) {
      case 'brand':
        return (
          <FormField
            key={name}
            name={name}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand</FormLabel>
                <FormControl>
                  <Input
                    className="text-base"
                    placeholder="Item Brand"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )
      case 'model':
        return (
          <FormField
            key={name}
            name={name}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Model</FormLabel>
                <FormControl>
                  <Input
                    className="text-base"
                    placeholder="Item Model"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )
      case 'capacity':
        return (
          <FormField
            key={name}
            name={name}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Capacity</FormLabel>
                <FormControl>
                  <Input
                    className="text-base"
                    placeholder="Capacity"
                    {...field}
                    onChange={e =>
                      field.onChange(
                        e.target.value ? parseInt(e.target.value, 10) : ''
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )
      case 'price':
        return (
          <FormField
            key={name}
            name={name}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    className="text-base"
                    placeholder="Item Price"
                    {...field}
                    type="number"
                    pattern="[0-9]*"
                    onChange={e =>
                      field.onChange(
                        e.target.value ? parseInt(e.target.value, 10) : ''
                      )
                    }
                    onFocus={() => {
                      field.onChange('')
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )
      default:
        return null
    }
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
              <Select
                onValueChange={value => {
                  handleTypeChange(value)
                  field.onChange(value)
                }}
                defaultValue={field.value}
              >
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
        {formFieldsMap[selectedType].map(renderFormField)}

        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default BuyForm
