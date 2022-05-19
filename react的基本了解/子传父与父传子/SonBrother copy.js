import React from 'react'

export default function SonBrother(props) {
  return (
    <div>
      {/* 子传父也通过props */}
      {props.num}
    </div>
  )
}
