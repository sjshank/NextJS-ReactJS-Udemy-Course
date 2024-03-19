import React from 'react'
import { SetConsultingTimeOut } from '../lib/setTheTimeout';

const Consulting = async () => {
    await SetConsultingTimeOut();
  return (
    <div>Consulting</div>
  )
}

export default Consulting