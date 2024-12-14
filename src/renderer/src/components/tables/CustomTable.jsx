import React from 'react'
import { Table } from 'antd'

export default function CustomTable({ children, showMeanSummary, ...props }) {
  const CalcMean = (pageData) => {
    // Filtering keys other than index
    const keys = Object.keys(pageData[0]).filter((key) => key !== 'key')
    const means = {}
    keys.forEach((key) => {
      // Each key total
      const total = pageData.reduce((sum, row) => sum + row[key], 0)
      // Each key mean
      means[key] = (total / pageData.length).toFixed(3) // Rounded to 3 decimal places
    })
    return means
  }
  return (
    <div>
      <Table
        {...props}
        columns={props.columns}
        dataSource={props.data}
        bordered
        size="small"
        pagination={false}
        summary={(currentData) => {
          const meanList = CalcMean(currentData)
          return showMeanSummary ? (
            <Table.Summary.Row className='bg-Grey2/10'>
              <Table.Summary.Cell index={0} className='font-bold'>Mean</Table.Summary.Cell>
              {props.columns
                .slice(1) // Skip the SNo column
                .map((col, index) => (
                  <Table.Summary.Cell className='font-bold' key={index} index={index + 1}>
                    {meanList[col.dataIndex] || ''}
                  </Table.Summary.Cell>
                ))}
            </Table.Summary.Row>
          ) : (
            <></>
          )
        }}
      />
    </div>
  )
}
