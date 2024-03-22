// import React, { useEffect, useState } from 'react';

// const InboxComponent: React.FC = () => {
//   const [emails, setEmails] = useState([]);

//   useEffect(() => {
//     const fetchEmails = async () => {
//       try {
//         const response = await fetch('https://graph.microsoft.com/v1.0/me/messages', {
//           headers: {
//             Authorization: `Bearer ${accessToken}`, // Replace accessToken with the actual access token
//           },
//         });
//         const data = await response.json();
//         setEmails(data.value); // Assuming the email data is in the 'value' property of the response
//       } catch (error) {
//         console.error('Error fetching emails:', error);
//       }
//     };

//     fetchEmails();
//   }, []);

//   return (
//     <div>
//       <h2>Inbox</h2>
//       <ul>
//         {emails.map((email: any) => (
//           <li key={email.id}>
//             <strong>From:</strong> {email.sender.emailAddress.name}<br />
//             <strong>Subject:</strong> {email.subject}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default InboxComponent;
