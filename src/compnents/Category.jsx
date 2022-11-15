import React from 'react'

import { categorys } from "../utils/contents"

const Category = () => {
  return (
    <div>
      {categorys.map((category) => (
        <button>
        <span>{category.icon}</span>
        <span>{category.name}</span>
      </button>
      ))}
    </div>
  )
}

export default Category