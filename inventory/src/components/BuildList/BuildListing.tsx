import React from 'react'

import { BuildProps } from '@/types'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'

function BuildListing({ build }: { build: BuildProps }) {
  const { name, status, cost, soldPrice, listDate, soldDate } = build
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          {name}
          <Badge>{status}</Badge>
          <Badge variant="secondary">{status}</Badge>
        </CardTitle>
        <CardDescription>
          <p>{listDate}</p>
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="">
        <div>
          <p>Sold price: ${soldPrice}</p>
          <Separator className="my-2" />
          Cost: ${cost}
          <Separator orientation="horizontal" />
          <p>Sold date: {soldDate}</p>
          <Separator orientation="horizontal" />
          <p>Days to sell: 3</p>
        </div>
      </CardFooter>
    </Card>
  )
}
export default BuildListing
