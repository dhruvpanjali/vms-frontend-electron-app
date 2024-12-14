import React, { useEffect, useState } from 'react'
import Table from '../components/tables/CustomTable'

export default function HomePage() {
  const columnsTable1 = [
    {
      title: 'Heat No.',
      dataIndex: 'heatNo'
      // render: (text) => <a>{text}</a>
      // align: 'right'
    },
    {
      title: 'Sample ID',
      dataIndex: 'sampleID'
      // render: (text) => <a>{text}</a>
      // align: 'right'
    },
    {
      title: 'Operator',
      dataIndex: 'operator'
      // render: (text) => <a>{text}</a>
      // align: 'right'
    },
    {
      title: 'Grade Name',
      dataIndex: 'gradeName'
      // render: (text) => <a>{text}</a>
      // align: 'right'
    },
    {
      title: 'Grade Group',
      dataIndex: 'gradeGroup'
      // render: (text) => <a>{text}</a>
      // align: 'right'
    },
    {
      title: 'Grade Desc',
      dataIndex: 'gradeDesc'
      // render: (text) => <a>{text}</a>
      // align: 'right'
    }
  ]
  const dataTable1 = [
    {
      key: '1',
      heatNo: 1231231,
      sampleID: 'L3',
      operator: 'Santosh',
      gradeName: '',
      gradeGroup: '',
      gradeDesc: ''
    }
  ]
  const columnsTable2 = [
    { title: 'SNo', dataIndex: 'key' },
    {
      title: 'C % Conc',
      dataIndex: 'cC'
      // render: (text) => <a>{text}</a>
      // align: 'right'
    },
    {
      title: 'Mn % Conc',
      dataIndex: 'MnC'
      // render: (text) => <a>{text}</a>
      // align: 'right'
    },
    {
      title: 'Si % Conc',
      dataIndex: 'SiC'
      // render: (text) => <a>{text}</a>
      // align: 'right'
    },
    {
      title: 'S % Conc',
      dataIndex: 'SC'
      // render: (text) => <a>{text}</a>
      // align: 'right'
    },
    {
      title: 'P % Conc',
      dataIndex: 'PC'
      // render: (text) => <a>{text}</a>
      // align: 'right'
    },
    {
      title: 'Cr % Conc',
      dataIndex: 'CrC'
      // render: (text) => <a>{text}</a>
      // align: 'right'
    },
    {
      title: 'Ni % Conc',
      dataIndex: 'NiC'
      // render: (text) => <a>{text}</a>
      // align: 'right'
    },
    {
      title: 'Mo % Conc',
      dataIndex: 'MoC'
      // render: (text) => <a>{text}</a>
      // align: 'right'
    },
    {
      title: 'Cu % Conc',
      dataIndex: 'CuC'
      // render: (text) => <a>{text}</a>
      // align: 'right'
    },
    {
      title: 'V % Conc',
      dataIndex: 'VC'
      // render: (text) => <a>{text}</a>
      // align: 'right'
    }
  ]
  const dataTable2 = [
    {
      key: '1',
      cC: 20,
      MnC: 0.589,
      SiC: 0.568,
      SC: 0.789,
      PC: 0.147,
      CrC: 0.145,
      NiC: 0.741,
      MoC: 0.125,
      CuC: 0.12,
      VC: 0.456
    },
    {
      key: '2',
      cC: 5,
      MnC: 0.499,
      SiC: 0.578,
      SC: 0.779,
      PC: 0.157,
      CrC: 0.135,
      NiC: 0.751,
      MoC: 0.135,
      CuC: 0.13,
      VC: 0.466
    },
    {
      key: '3',
      cC: 5,
      MnC: 0.479,
      SiC: 0.588,
      SC: 0.769,
      PC: 0.167,
      CrC: 0.125,
      NiC: 0.761,
      MoC: 0.145,
      CuC: 0.14,
      VC: 0.476
    }
  ]

  const [meanData, setMeanData] = useState({})

  const CalcMean = (dataTable2) => {
    // Filtering keys other than index
    const keys = Object.keys(dataTable2[0]).filter((key) => key !== 'key')
    const means = {}

    keys.forEach((key) => {
      // Each key total
      const total = dataTable2.reduce((sum, row) => sum + row[key], 0)
      // Each key mean
      means[key] = (total / dataTable2.length).toFixed(3) // Rounded to 3 decimal places
    })

    return means
  }

  return (
    <div className="flex flex-col gap-4">
      <Table
        columns={columnsTable1}
        data={dataTable1}
        title={() => <span className="font-bold">{'Sample IDs'}</span>}
      />
      <Table
        columns={columnsTable2}
        data={dataTable2}
        showMeanSummary={true}
      />
      <Table
        columns={columnsTable2}
        data={dataTable2}
        showMeanSummary={true}
      />
      <Table
        columns={columnsTable2}
        data={dataTable2}
        showMeanSummary={true}
      />
    </div>
  )
}
