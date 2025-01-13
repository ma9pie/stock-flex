import * as d3 from 'd3';
import dayjs from 'dayjs';
import React, { useEffect, useRef } from 'react';

interface Tick {
  price: number;
  time: number;
}

interface Props {
  data: Tick[];
}

const MARGIN = { top: 30, bottom: 30, left: 30, right: 30 };

const BaseLineChart = ({ data }: Props) => {
  const ref = useRef<SVGSVGElement | null>(null);

  const init = () => {
    if (!ref.current) {
      return null;
    }

    d3.select(ref.current).selectAll('*').remove();

    const { clientWidth, clientHeight } = ref.current;
    const paneWidth = clientWidth - MARGIN.right;
    const paneHeight = clientHeight - MARGIN.bottom;

    const svg = d3.select(ref.current);
    svg.attr('viewBox', `0 0 ${clientWidth} ${clientHeight}`);

    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.time) as [number, number])
      .range([MARGIN.left, paneWidth]);

    const y = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.price) as [number, number])
      .range([paneHeight, MARGIN.top]);

    const line = d3
      .line<Tick>()
      .x((d) => x(d.time))
      .y((d) => y(d.price))
      .curve(d3.curveMonotoneX);

    svg.selectAll('*').remove();

    // X축
    svg
      .append('g')
      .attr('transform', `translate(0, ${paneHeight})`)
      .call(
        d3
          .axisBottom(x)
          .tickFormat((d) =>
            dayjs(Number(d) * 1000).format('YYYY-MM-DD HH:mm:ss')
          )
          .tickSize(0)
          .tickPadding(20)
      );

    // Y축
    svg
      .append('g')
      .attr('transform', `translate(${MARGIN.left}, 0)`)
      .call(d3.axisLeft(y).tickSize(0));

    // 라인 그리기
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'var(--black900)')
      .attr('stroke-width', 2)
      .attr('d', line);

    const area = d3
      .area<Tick>()
      .x((d) => x(d.time))
      .y0(paneHeight)
      .y1((d) => y(d.price))
      .curve(d3.curveMonotoneX);

    // 그래디언트 영역 그리기
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'url(#areaGradient)')
      .attr('d', area);

    const gradient = svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'areaGradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    gradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', 'rgba(0, 0, 255, 0.5)');

    gradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', 'rgba(0, 0, 255, 0)');

    return svg;
  };

  useEffect(() => {
    init();
    window.addEventListener('resize', init);

    return () => {
      window.removeEventListener('resize', init);
    };
  }, [data]);

  return (
    <svg
      ref={ref}
      style={{
        width: '100%',
        height: 400,
      }}
    />
  );
};

export default BaseLineChart;
