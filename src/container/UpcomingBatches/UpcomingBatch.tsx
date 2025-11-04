import { useEffect, useState } from "react"
import { getCenters } from "../../servies/services"
import { Calendar, ChevronRight, Clock, CreditCard, Users } from "lucide-react"

const UpcomingBatch = () => {
  const [centerData, setCenterData] = useState<any>([])
  const parseCustomDate = (dateStr: string): Date | null => {
    if (!dateStr || dateStr === "TBD") return null
    const cleanDateStr = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1")
    const parsed = Date.parse(cleanDateStr)
    return isNaN(parsed) ? null : new Date(parsed)
  }

  useEffect(() => {
    const getData = async () => {
      const response = await getCenters()
      const data = response?.data?.data || []
      const sortedData = [...data].sort((a, b) => {
        const dateA = parseCustomDate(a.start_date)
        const dateB = parseCustomDate(b.start_date)
        if (!dateA && !dateB) return 0
        if (!dateA) return 1
        if (!dateB) return -1

        return dateA.getTime() - dateB.getTime()
      })

      setCenterData(sortedData)
    }

    getData()
  }, [])
  return (
    <>
      <style>{`

        .batch-card {
          border: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .batch-card:hover {
          box-shadow: 0 12px 30px rgba(13, 110, 253, 0.15);
          transform: translateY(-2px);
        }

        .table-responsive {
          border-radius: 1rem;
        }

        .table {
          font-size: 0.95rem;
        }

        .table thead th {
          background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
          color: white !important;
          border: none;
          padding: 1.2rem 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .table tbody tr {
          border-bottom: 1px solid #e8e8e8;
        }

        .table tbody tr:hover {
          box-shadow: inset 0 0 0 1px rgba(13, 110, 253, 0.1);
        }

        .table tbody td {
          // padding: 1.2rem 0.8rem;
          vertical-align: middle;
        }
          .tablecontent{
          font-weight:600 
          }

        .course-badge {
          background: linear-gradient(135deg, #0d6efd, #0a58ca);
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          color: white;
          font-weight: 700;
          font-size: 0.875rem;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
        }

        .course-name {
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .badge-coming {
          background-color: #fff3cd !important;
          color: #664d03 !important;
          font-size: 0.65rem;
          font-weight: 600;
          padding: 0.35rem 0.6rem;
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #374151;
        }

        .icon-wrapper svg {
          color: #0d6efd;
          flex-shrink: 0;
        }

        .pay-btn {
          background: linear-gradient(135deg, #0d6efd, #0a58ca);
          border: none;
          color: white;
          font-weight: 300;
          padding: 0.44rem 1rem;
          border-radius: 0.5rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
          font-size:12px
        }

        .pay-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0a58ca, #0040b6);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .pay-btn:hover::before {
          left: 0;
        }

        .pay-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(13, 110, 253, 0.35);
          color: white;
          text-decoration: none;
        }

        .pay-btn:active {
          transform: translateY(0);
          box-shadow: 0 4px 12px rgba(13, 110, 253, 0.25);
        }

        .pay-btn:disabled {
          background: linear-gradient(135deg, #6c757d, #5a6268);
          box-shadow: 0 4px 12px rgba(108, 117, 125, 0.2);
          cursor: not-allowed;
          opacity: 0.7;
        }

        .pay-btn:disabled:hover {
          transform: none;
          box-shadow: 0 4px 12px rgba(108, 117, 125, 0.2);
        }

        .chevron-icon {
          transition: transform 0.3s ease;
        }

        .pay-btn:hover .chevron-icon {
          transform: translateX(4px);
        }
      `}</style>
      <div className='row'>

        <h4 className="display-6 fw-bold text-dark my-2">Upcoming Batches</h4>
        <div className="card batch-card">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Duration</th>
                  <th>Start Date</th>
                  <th>Schedule</th>
                  <th className="text-center">Payment</th>
                </tr>
              </thead>
              <tbody>
                {centerData?.map((item: any, idx: number) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="course-badge">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="course-name">{item.name}</p>
                          {/* {item.start_date !== 'TBD' && (
                            <span className="badge badge-new">New Batch</span>
                          )} */}
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="icon-wrapper">
                        <Clock size={18} />
                        <span className="tablecontent">{item.duration}</span>
                      </div>
                    </td>

                    <td>
                      <div className="icon-wrapper">
                        <Calendar size={18} />
                        {item.start_date === 'TBD' ? (
                          <span className="badge badge-coming">Coming Soon</span>
                        ) : (
                          <span className="tablecontent">
                            {/* {new Date(item.start_date).toLocaleDateString('en-US', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })} */}
                            {item.start_date}
                          </span>
                        )}
                      </div>
                    </td>

                    <td>
                      <div className="icon-wrapper">
                        <Users size={18} />
                        <span className="tablecontent">{item.batch_days}</span>
                      </div>
                    </td>

                    <td className="text-center ">

                      {item.end_date === 'https://www.google.com' ? (
                        <button
                          disabled
                          className="pay-btn"
                        >
                          <CreditCard size={16} />
                          Pay Now
                        </button>
                      ) : (
                        <a
                          href={item.end_date}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pay-btn"
                        >
                          <CreditCard size={16} />
                          Pay Now
                          <ChevronRight size={16} className="chevron-icon" />
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpcomingBatch