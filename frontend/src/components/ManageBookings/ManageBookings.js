import React from 'react'
import { useEffect, useState } from 'react'
export default function ManageBookings() {

    const data = [
        {
            "id": 5,
            "spotId": 4,
            "userId": 3,
            "startDate": "2024-11-20T00:00:00.000Z",
            "endDate": "2024-11-20T00:00:00.000Z",
            "createdAt": "2023-09-12T22:09:00.099Z",
            "updatedAt": "2023-09-12T22:09:00.099Z",
            "Spot": {
                "id": 4,
                "ownerId": 2,
                "address": "1422 North Dawn Drive",
                "city": "Indio Hills",
                "state": "California",
                "country": "United States",
                "lat": 36.08123,
                "lng": -94.167422,
                "name": "Salt Water Pool/ Spa/ BBQ/ Swim-Up Bar/ Fire Pit",
                "description": "REMOTE LOCATION.",
                "price": 894,
                "createdAt": "2023-09-12T21:40:43.772Z",
                "updatedAt": "2023-09-12T21:40:43.772Z",
                "previewImage": "https://a0.muscache.com/im/pictures/88d46041-60a0-4064-ae28-03423174766c.jpg?im_w=720"
            }
        }
    ]

    const [bookings, setBookings] = useState(data)

  return (
    <div>

    </div>
  )
}
