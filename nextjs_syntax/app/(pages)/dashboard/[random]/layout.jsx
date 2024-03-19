import React from 'react'

//We cannot use useSearchParams here as layouts do not re-render on navigation
const DynamicRouteLayout = ({children, params}) => {
    console.log("Inside DynamicRouteLayout", params);
  return (
    <div>{children}</div>
  )
}

export default DynamicRouteLayout