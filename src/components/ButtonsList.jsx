import React from "react"
import Button from "./Button"

const List = ["All", "Mixes", "Music", "Comedy", "Programming"]

const ButtonsList = () => {
  return (
    <div className="flex">
      {List.map((data) => (
        <Button name={data} key={data} />
      ))}
    </div>
  )
}

export default ButtonsList
