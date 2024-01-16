import React, { useEffect, useState } from "react"

const FormChallenge = () => {
  const [itemsInPersonsCart, setItemsInPersonsCart] = useState("")
  const [lines, setLines] = useState([
    [900, 850, 750],
    [800, 750, 650],
    [700, 650, 550],
    [10000],
  ])

  const handleAddItems = (e) => {
    // TODO:
    /*
    loop through all lines 
    find line with least items
    push the items in person cart to the line.
    123 
    */
    e.preventDefault()
    let leastItemsAmount = null
    let lineWithLeast = null

    for (let line of lines) {
      const totalInLine = line.reduce((acc, curr) => acc + curr, 0)
      console.log({ totalInLine })
      if (leastItemsAmount === null) {
        leastItemsAmount = totalInLine
        lineWithLeast = line
      } else if (totalInLine < leastItemsAmount) {
        leastItemsAmount = totalInLine
        lineWithLeast = line
      }
    }
    console.log("check", leastItemsAmount, lineWithLeast)
    if (!lineWithLeast) {
      return
    } else {
      setLines((prev) =>
        prev.map((line) => {
          return line === lineWithLeast ? [...line, itemsInPersonsCart] : line
        })
      )
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prev) =>
        prev.map((line) =>
          [line[0] - 1, ...line.slice(1)].filter((val) => val > 0)
        )
      )
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div className="flex justify-center items-center flex-col m-auto">
      <div className="bg-purple-300 p-9 m-11">
        <form action="" onSubmit={handleAddItems}>
          <input
            className="border-2 border-gray-500"
            value={itemsInPersonsCart}
            onChange={(e) => setItemsInPersonsCart(e.target.valueAsNumber)}
            type="number"
            required
          />
          <button className="bg-red-200 border-2 border-gray-500 ml-2">
            Checkout
          </button>
        </form>
        <div className="flex gap-8 mt-3">
          {lines.map((data, id) => (
            <div key={id} className="flex flex-col gap-3">
              X
              {data.map((d) => (
                <div className="bg-green-300 p-3  ">{d}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FormChallenge
