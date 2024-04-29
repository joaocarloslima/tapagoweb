"use client"

import { getTotaisPorMes } from '@/app/actions/movimentacoes/dashboard';
import { useEffect, useState } from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export function LineChartMovimentacoes (){

    const [ data, setData ] = useState([])

    useEffect(() => {
        getTotaisPorMes().then(data => setData(data))
    }, [])

    return (
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="receita" stroke="#00FF66" />
          <Line type="monotone" dataKey="despesa" stroke="#FF0066" />
        </LineChart>
    );
}
