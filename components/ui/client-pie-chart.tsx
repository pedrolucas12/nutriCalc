// components/ui/client-apex-chart.tsx
"use client";

import { cn } from '@/lib/utils';
import { ApexOptions } from 'apexcharts';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-xs text-primary-500">Carregando Gráfico...</div>
});

interface ClientOnlyApexChartProps {
  imcValue: number;
  weight: number;
  height: number;
  className?: string;
}

const getImcColor = (imc: number, theme: string | undefined): string => {
  const isDark = theme === 'dark';
  if (imc < 18.5) return isDark ? '#a3b18a' : '#a3b18a'; // Sage
  if (imc < 25) return isDark ? '#588157' : '#588157'; // Fern Green
  if (imc < 30) return isDark ? '#bfdf99' : '#bfdf99'; // Honeydew-400
  return isDark ? '#FFB800' : '#FFB800'; // Amarelo/Laranja
};

const getBmiCategory = (bmi: number): string => {
    if (bmi < 18.5) return "Abaixo";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Sobrepeso";
    return "Obesidade";
};

const ClientOnlyApexChart = ({ imcValue, weight, height, className }: ClientOnlyApexChartProps) => {
  const { theme } = useTheme();

  const imcCategory = getBmiCategory(imcValue);
  const imcColor = getImcColor(imcValue, theme);

  const options: ApexOptions = {
    chart: {
      height: '100%',
      type: 'radialBar',
      sparkline: { enabled: true }
    },
    plotOptions: {
      radialBar: {
        offsetY: -10,
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 5,
          size: '60%',
          background: 'transparent',
        },
        track: {
          background: theme === 'dark' ? '#3a5a40' : '#dad7cd', // hunter_green / timberwolf
          strokeWidth: '100%',
          margin: 5,
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: '12px',
            fontWeight: 600,
            color: theme === 'dark' ? '#a3b18a' : '#3a5a40', // Sage / Hunter Green
            offsetY: -10
          },
          value: {
            show: true,
            fontSize: '24px',
            fontWeight: 'bold',
            color: imcColor,
            offsetY: 5,
            formatter: (val: number): string => val.toFixed(1)
          },
          total: { // Label da Categoria
            show: true,
            label: imcCategory,
            fontSize: '10px',
            fontWeight: 400,
            // --- ALTERAÇÃO AQUI ---
            // Use cores mais escuras da sua paleta para maior contraste
            color: theme === 'dark' ? '#6a687a' : '#344e41', // Dim Gray / Brunswick Green
            // -----------------------
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.4,
        gradientToColors: [imcColor],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100]
      }
    },
    tooltip: {
        enabled: true,
        fillSeriesColor: false,
        theme: theme ?? 'light',
        y: {
            formatter: (value: number): string =>
                `IMC: ${value.toFixed(1)} (${imcCategory})\n(Peso: ${weight}kg, Altura: ${height}cm)`
        },
        marker: { show: false },
        style: { fontSize: '11px' },
    },
    stroke: {
      lineCap: 'round'
    },
    series: [imcValue],
    labels: ['IMC'],
    states: {
        hover: { filter: { type: 'none' } },
        active: { filter: { type: 'none' } }
    }
    
  };

  // Renderiza apenas no cliente
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  if (!isClient) {
    return <div className="w-full h-full flex items-center justify-center text-xs text-primary-500">Carregando Gráfico...</div>;
  }

  return (
    <div className={cn("w-full h-full", className)}>
      <ApexChart options={options} series={options.series} type="radialBar" height="100%" width="100%" />
    </div>
  );
};

export default ClientOnlyApexChart;
