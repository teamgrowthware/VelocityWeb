
export const Features = [
    { "id": 1, "feature": 'DashboardUserModule', "dev": true, "prod": true, },
    { "id": 2, "feature": 'DashboardPostModule', "dev": true, "prod": true, },
    { "id": 3, "feature": 'DashboardLeaveModule', "dev": true, "prod": true, },
    { "id": 4, "feature": 'DashboardAppointmentModule', "dev": true, "prod": true, },
    { "id": 5, "feature": 'DashboardCommentsModule', "dev": true, "prod": true, },
]

export const isFeatureActive = (feature: string) => {
    // @ts-ignore
    const profile_details = JSON.parse(localStorage.getItem("profile_details"));

    const featureStatus = Features.find((f) => {
        return f.feature === feature
    })
    if (profile_details?.email_id === 'balaji.image@gmail.com' || profile_details?.email_id === 'mangesh.prabhudesai@gmail.com') {
        return true
    } else {
        if (process.env.REACT_APP_MODE === 'production') {
            return featureStatus?.prod
        } else {
            return featureStatus?.dev
        }
    }
}