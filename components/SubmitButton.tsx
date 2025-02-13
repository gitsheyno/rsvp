// /components/Submit.tsx
'use client'

import { Button } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

const Submit = ({ label, ...btnProps }: { label: string }) => {
  const { pending } = useFormStatus()

  return (
    <Button {...btnProps} type="submit" isLoading={pending}>
      {label}
    </Button>
  )
}

export default Submit
