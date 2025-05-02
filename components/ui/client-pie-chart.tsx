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
  // Cores mais escuras
  if (imc < 18.5) return isDark ? '#7d8f69' : '#6b7b58'; // Sage mais escuro
  if (imc < 25) return isDark ? '#3a5a40' : '#2d4a32'; // Fern Green mais escuro
  if (imc < 30) return isDark ? '#8fa876' : '#7a9162'; // Honeydew mais escuro
  return isDark ? '#cc9400' : '#b38200'; // Amarelo/Laranja mais escuro
};

const getBmiCategory = (bmi: number): string => {
  if (bmi < 18.5) return "Abaixo do Peso";
  if (bmi < 25) return "Peso Normal";
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
      sparkline: { enabled: true },
      foreColor: theme === 'dark' ? '#e9ecef' : '#344e41', // Cor base para textos
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
          background: theme === 'dark' ? '#2d3f33' : '#c8c4bc', // Cores de fundo mais escuras
          strokeWidth: '100%',
          margin: 5,
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.2
          }
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: '16px', // Aumentado
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            color: theme === 'dark' ? '#e9ecef' : '#344e41',
            offsetY: -10
          },
          value: {
            show: true,
            fontSize: '28px', // Aumentado
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            color: imcColor,
            offsetY: 5,
            formatter: (val: number): string => val.toFixed(1)
          },
          total: {
            show: true,
            label: imcCategory,
            fontSize: '14px', // Aumentado
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            color: theme === 'dark' ? '#e9ecef' : '#344e41',
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [imcColor],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100]
      }
    },
    tooltip: {
      enabled: true,
      theme: theme === 'dark' ? 'dark' : 'light',
      style: {
        fontSize: '14px',
        fontFamily: "'Inter', sans-serif",
      },
      y: {
        formatter: (value: number): string => {
          return [
            `IMC: ${value.toFixed(1)}`,
            `Classificação: ${imcCategory}`,
            `Peso: ${weight}kg`,
            `Altura: ${height}cm`
          ].join('\n');
        }
      },
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        return '<div class="custom-tooltip" style="padding: 8px; background-color:grey">' +
          '<div style="font-weight: 600; margin-bottom: 4px;">Suas Métricas:</div>' +
          `<div>IMC: ${series[seriesIndex]} (${imcCategory})</div>` +
          `<div>Peso: ${weight}kg</div>` +
          `<div>Altura: ${height}cm</div>` +
          '</div>';
      },
      fixed: {
        enabled: false,
        position: 'topRight',
        offsetX: 0,
        offsetY: 0,
      },
      marker: {
        show: false,
      },
      items: {
        display: 'flex',
      },
      cssClass: 'apexcharts-tooltip-custom',
    },
    stroke: {
      lineCap: 'round',
      width: 3, // Linha mais grossa
    },
    series: [imcValue],
    labels: ['IMC'],
    states: {
      hover: {
        filter: {
          type: 'none',
        }
      },
      active: {
        filter: {
          type: 'none',
        }
      }
    },
  };

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