'use client'

import { createToDoDirectly } from './actions';

export default function Button({children}) {
  return <div onClick={async () => {
    const data = await createToDoDirectly('运动')
    alert(JSON.stringify(data))
  }}>{children}</div>
}