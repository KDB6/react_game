import React from 'react'

import { categorys } from "../utils/contents"

const Category = ({selectCategory, setSelectCaegory}) => {
  return (
    <div>
      {categorys.map((category) => (
        <button key={category.name} onClick={() => setSelectCaegory(selectCategory)}>
        <span>{category.icon}</span>
        <span>{category.name}</span>
      </button>
      ))}
    </div>
  )
}

export default Category