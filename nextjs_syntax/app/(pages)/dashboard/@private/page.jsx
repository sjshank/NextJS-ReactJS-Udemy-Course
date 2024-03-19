import { SetServicePageTimeOut } from '@/app/lib/setTheTimeout';
import React from 'react'

//Here @private acts like a slot for dashboard segment
const Private = async() => {
    await SetServicePageTimeOut();
  return (
    <div>Private</div>
  )
}

export default Private