import { Line, ResponsiveContainer, LineChart, YAxis, XAxis, Tooltip, CartesianGrid } from 'recharts';

const LineChartCOMP = ({ data, color }) => {
    const price = data.map((value, index) => ({ index, value }))


    // console.log(price);.toLocaleString().toFixed(2)
    return (
        <ResponsiveContainer width='100%' height="100%" aspect={2/1} className={'mt-3'} >
            <LineChart
                data={price}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
                
            >
                <CartesianGrid strokeDasharray="auto auto" vertical={false} />
                <Tooltip contentStyle={{'backgroundColor':'#0599','border':'none'}} />
                <XAxis tick={false} />
                <YAxis type="number" domain={['dataMin', 'dataMax']} orientation='right' tick={false}  />
                <Line className='text-emerald-500' type="basis" dataKey={(price) => price.value[1]} strokeWidth={4}
                    stroke={color} fill={color} dot={false} isAnimationActive={false} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default LineChartCOMP;
