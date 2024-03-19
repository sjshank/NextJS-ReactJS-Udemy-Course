import { Links } from '@/app/components/Links'
import { SetServicePageTimeOut } from '@/app/lib/setTheTimeout';
import React from 'react'

const About = async () => {
    await SetServicePageTimeOut();
  return (
    <div>
        <h2>About Page</h2>
        <br/>
        <Links/>
        <br/>
        <div style={{height:'700px'}}></div>
        <h3 id="abtBottom">Page ends here</h3>
    </div>
  )
}

export default About