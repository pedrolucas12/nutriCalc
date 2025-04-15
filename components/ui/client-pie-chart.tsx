// components/ui/client-apex-chart.tsx
"use client";

import { ApexOptions } from 'apexcharts';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ClientOnlyApexChartProps {
  imcValue: number;
  weight: number;
  height: number;
}

// Função para determinar a cor com base no IMC
const getImcColor = (imc: number, theme: string | undefined): string => {
  const isDark = theme === 'dark';
  if (imc < 18.5) return isDark ? '#a3b18a' : '#a3b18a'; // Sage (Abaixo) - Usando Sage para ambos temas por enquanto
  if (imc < 25) return isDark ? '#588157' : '#588157'; // Fern Green (Normal)
  if (imc < 30) return isDark ? '#bfdf99' : '#bfdf99'; // Honeydew-400 (Sobrepeso) - Amarelo/Verde claro
  return isDark ? '#FFB800' : '#FFB800'; // Amarelo/Laranja (Obesidade) - Exemplo
};

// Função para determinar a categoria do IMC
const getBmiCategory = (bmi: number): string => {
    if (bmi < 18.5) return "Abaixo";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Sobrepeso";
    return "Obesidade";
};

const ClientOnlyApexChart = ({ imcValue, weight, height }: ClientOnlyApexChartProps) => {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const imcCategory = getBmiCategory(imcValue);
  const imcColor = getImcColor(imcValue, theme);

  // Configurações do gráfico ApexCharts - Estilo Gauge Futurista
  const options: ApexOptions = {
    chart: {
      height: '100%',
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: -10, // Desloca o gráfico um pouco para cima
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 5,
          size: '60%', // Buraco um pouco maior
          background: 'transparent', // Fundo transparente
          image: undefined, // Sem imagem no centro
        },
        track: {
          background: theme === 'dark' ? '#3a5a40' : '#dad7cd', // Cor da trilha de fundo
          strokeWidth: '100%',
          margin: 5,
          dropShadow: { // Sombra sutil na trilha
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: { // Label "IMC"
            show: true,
            fontSize: '12px',
            fontWeight: 600,
            color: theme === 'dark' ? '#a3b18a' : '#3a5a40', // Sage / Hunter Green
            offsetY: -10 // Posição acima do valor
          },
          value: { // Valor numérico do IMC
            show: true,
            fontSize: '24px',
            fontWeight: 'bold',
            color: imcColor, // Cor dinâmica baseada no valor
            offsetY: 5, // Posição abaixo do label "IMC"
            formatter: (val: number): string => val.toFixed(1)
          },
          total: { // Label da Categoria (Abaixo, Normal, etc.)
            show: true,
            label: imcCategory, // Mostra a categoria
            fontSize: '10px',
            fontWeight: 400,
            color: theme === 'dark' ? '#a4a2b0' : '#6a687a', // Dim Gray
          }
        }
      }
    },
    fill: {
      // Gradiente sutil na barra principal
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.4,
        gradientToColors: [imcColor], // Usa a cor dinâmica
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
              // Esta linha já inclui peso e altura
              `IMC: ${value.toFixed(1)} (${imcCategory})<br/>(Peso: ${weight}kg, Altura: ${height}cm)`
      },
      marker: {
          show: false,
      },
      style: {
          fontSize: '11px',
      },
  },
    stroke: {
      lineCap: 'round'
    },
    series: [imcValue], // Valor do IMC
    labels: ['IMC'], // Label usado em dataLabels.name
    // Define a escala máxima do gauge (ex: 40 para cobrir a maioria dos IMCs)
    // Isso é feito implicitamente pelo valor máximo esperado na série.
    // Para visualização de limites, precisaríamos de múltiplas séries ou outro tipo.
    // Vamos focar na cor dinâmica por enquanto.
    states: {
        hover: { filter: { type: 'none' } }, // Remove filtro de hover padrão
        active: { filter: { type: 'none' } } // Remove filtro ativo padrão
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {typeof window !== 'undefined' && (
        <ReactApexChart options={options} series={options.series} type="radialBar" height="100%" width="100%" />
      )}
    </div>
  );
};

export default ClientOnlyApexChart;
