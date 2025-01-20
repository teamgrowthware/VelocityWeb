import moment from "moment"
import { DisplayName } from "../Utility/Utility"

const InfoBox = ({
    data,
}: any) => {
    return (
        <li className="mail-item" style={{ margin: "0px" }}>
            <div className="mail-avatar">{DisplayName(data)}</div>
            <div className="mail-item-body">
                <div className="d-flex align-items-center">
                    <span className="mail-sender">{data?.first_name + " " + data?.last_name}</span>
                </div>
                <h6 className="mail-subject"><span>{data?.system_email_id}</span></h6>
            </div>
        </li>
    )
}

export default InfoBox