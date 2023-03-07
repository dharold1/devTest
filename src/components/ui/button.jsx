import React from 'react'

function Button(props) {
  return (
    <div>
       <button class="bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-7 border border-white hover:border-transparent ">
  {props.children}
</button>
    </div>
  )
}

export default Button
