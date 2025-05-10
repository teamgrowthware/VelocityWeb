import { useEffect, useState } from "react"
import { getCenters } from "../../servies/services"

const UpcomingBatch = () => {
    const [centerData, setCenterData] = useState<any>([])

    useEffect(() => {
        const getData = async () => {
            const data = await getCenters()
            setCenterData(data?.data?.data)
        }
        getData()
    }, [])
    return (
        <>
            <div className='row'>
                <h3>Upcoming Batches</h3>
                <div className='eventWrapper'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th style={{ width: '150px' }}>Course Name</th>
                                <th style={{ width: '100px' }}>Duration</th>
                                <th style={{ width: '100px' }}>Date</th>
                                <th style={{ width: '60px' }}>Slot </th>
                                <th style={{ width: '70px' }}>Payment</th>

                            </tr>
                        </thead>
                        <tbody>
                            {centerData?.map((item: any) => {
                                return (
                                    <>
                                        <tr>
                                            <td data-label="Course Name" style={{ fontSize: '14px', lineHeight: '18px' }}>
                                                <span>
                                                    {item.name}  {item.start_date !== 'TBD' ? <span className='newTag'>New</span> : ''}
                                                </span>
                                            </td>

                                            <td data-label="Duration"> {item?.duration} </td>
                                            <td data-label="Date"> {item.start_date} </td>
                                            <td data-label="Slot"> {item.batch_days} </td>
                                            <td data-label="Payment">
                                                {item.end_date === 'https://www.google.com' ?
                                                    <button className='btn btn-outline-primary btn-sm' disabled={item.end_date === 'https://www.google.com'}>
                                                        Pay Now</button> : <a aria-disabled={true} className='btn btn-primary btn-sm' rel="noopener noreferrer" target='_blank' href={item.end_date}>Pay Now</a>}
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UpcomingBatch