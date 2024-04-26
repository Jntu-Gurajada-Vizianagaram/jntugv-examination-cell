// // // Sample data for notifications



// export const getNotifications = () => [
//     {
//       "description": "test notification",
//       "link": "http://localhost:3000/add_notification",
//       "date": 13,
//       "month": "May",
//       "year": 2024,
//       "type": "notifications",
//       "isLink": true
//   },
//   {
//       "description": "my notification",
//       "link": "google.com",
//       "date": 2024,
//       "month": "Apr",
//       "year": 7,
//       "type": "notifications",
//       "isLink": false
//   },
//   {
//       "description": "my notification1",
//       "link": "google.com",
//       "date": 2024,
//       "month": "Apr",
//       "year": 7,
//       "type": "notifications",
//       "isLink": false
//   },
//   {
//       "description": "my notification3",
//       "link": "google.com",
//       "date": 2024,
//       "month": "Apr",
//       "year": 7,
//       "type": "notifications",
//       "isLink": false
//   },
//   {
//       "description": "my notification 8",
//       "link": "abc.com",
//       "date": 2024,
//       "month": "Apr",
//       "year": 7,
//       "type": "notifications",
//       "isLink": false
//   },
//   {
//       "description": "my notification 9",
//       "link": "abc.com",
//       "date": 2024,
//       "month": "Apr",
//       "year": 7,
//       "type": "notifications",
//       "isLink": false
//   },
//   {
//       "description": "my notification 10",
//       "link": "abc.com",
//       "date": 2024,
//       "month": "Apr",
//       "year": 7,
//       "type": "notifications",
//       "isLink": false
//   },
//   {
//       "description": "aaaaa",
//       "link": "aa.com",
//       "date": 2024,
//       "month": "Apr",
//       "year": 7,
//       "type": "notifications",
//       "isLink": false
//   },
//   {
//       "description": "jbdjewbjc",
//       "link": "google.com",
//       "date": 2024,
//       "month": "Apr",
//       "year": 5,
//       "type": "notifications",
//       "isLink": false
//   }
// ]
  
import axios from 'axios';

export const getNotifications = async () => {
  try {
    const response = await axios.get('http://localhost:4000/notifications');
    const formattedData = response.data?.map(item => {
      const dateParts = item.date.split('-');
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const monthIndex = parseInt(dateParts[1]) - 1;
      return {
          description: item.title,
          link: item.url,
          date: parseInt(dateParts[0]),
          month: monthNames[monthIndex],
          year: parseInt(dateParts[2]),
          type: "notifications",
          isLink: item.url.startsWith("http")
      };
  });
    return formattedData; 
  } catch (error) {
    console.error(error);
    return []; 
  }
}