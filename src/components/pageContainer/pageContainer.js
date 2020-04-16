import React, { Component } from 'react'
const blockStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
}
const PageContainer = (props) => {
  return (
    <div
      style={blockStyle}
    >
      {props.children}
    </div>
  )
}

export default PageContainer