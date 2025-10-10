"use client"
const errorBoundary = ({error}:{error:Error}) => {
  return (
    <div>
      <h1>{error.message}</h1>
    </div>
  )
}

export default errorBoundary
