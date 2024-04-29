"use client"

import { getTotaisPorCategoria } from '@/app/actions/movimentacoes/dashboard';
import { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, Rectangle, Tooltip, XAxis, YAxis } from 'recharts';

export function BarChartCategoria() {

    const [data, setData] = useState([])

    useEffect(() => {
        getTotaisPorCategoria().then( data => setData(data))
    }, [])

    return (
        <BarChart
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
          <XAxis dataKey="categoria" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="valor" fill="#ff0066" activeBar={<Rectangle fill="#ff006666" />} />
        </BarChart>
    );
}
