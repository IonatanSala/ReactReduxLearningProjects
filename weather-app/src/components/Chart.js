import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

const Chart = ({data, color, units}) => {

  let average = data.reduce(function(total, currentValue) {
    return total + currentValue
  }) / data.length;

  average = Math.round(average)

  return (
    <div>
      <Sparklines height={120} width={180} data={data} >
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <h2>{average} {units}</h2>
    </div>
  )
}

export default Chart
