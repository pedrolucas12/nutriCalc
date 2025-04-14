// components/ui/client-apex-chart.tsx

"use client";

import { ApexOptions } from 'apexcharts';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Define a interface para as props
interface ClientOnlyApexChartProps {
  imcValue: number;
  weight: number;
  height: number;
}

const ClientOnlyApexChart = ({ imcValue, weight, height }: ClientOnlyApexChartProps) => {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Configurações do gráfico ApexCharts
  const options: ApexOptions = {
    chart: { /* ... (como antes) ... */ },
    plotOptions: { /* ... (como antes) ... */ },
    fill: {
      colors: ['#588157'] // fern-green
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['IMC'],
    series: [imcValue], // Usa o valor do IMC recebido via prop
    tooltip: {
        enabled: true,
        y: {
            formatter: function(value: number): string {
                // Usa as props 'weight' e 'height' para o texto do tooltip
                return `IMC: ${value.toFixed(1)} (Peso: ${weight}kg, Altura: ${height}cm)`;
            }
        },
        theme: theme ?? 'light'
    },
    states: { /* ... (como antes) ... */ }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {typeof window !== 'undefined' && (
        <ApexChart options={options} series={options.series} type="radialBar" height="100%" width="100%" />
      )}
    </div>
  );
};

export default ClientOnlyApexChart;
