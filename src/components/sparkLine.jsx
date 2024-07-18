import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';

const SparkLine = ({ data, fill, stroke }) => {
    const price = data.price.map((value, index) => ({ index, value }))
    return (
        <div className=' '>

            <ResponsiveContainer width='100%' height={40} aspect={4.5}  className={''} >
                <LineChart
                    data={price}
                    margin={{
                        top: 3,
                        right: 5,
                        left: -60,
                        bottom: 3,
                    }}

                >
                    <YAxis type="number" ticks={false} tick={false} allowDataOverflow={false} domain={['dataMin', 'dataMax']} axisLine={false} allowDecimals={false} />
                    <Line type="basis" dataKey='value' strokeWidth={2} stroke={stroke} fill={fill} dot={false} isAnimationActive={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}


export default SparkLine