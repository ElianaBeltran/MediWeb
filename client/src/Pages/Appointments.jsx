import React, { useEffect, useState } from "react";
import axios from 'axios'

const Appointments = () =>{
    const [appointments, setAppointments] = useState( [] )

    useEffect( () => {
        const fetchAllAppoitnments = async ()=> {
          try{
            const res = await axios.get("http://localhost:8800/appointments")
            setAppointments(res.data)
          }catch(err){
            console.log(err)
          }  
        }
        fetchAllAppoitnments()
    }, [])

    return (
        <div>
            <h1>Your Appointments</h1>
            <div className="appointments">
                {appointments.map(appointment=>(
                    <div className="appointment">
                        <h4>{appointment.doctorName}</h4>
                        <h4>{appointment.appointmentDesc}</h4>
                        <h4>{appointment.appointmentDate}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Appointments
    