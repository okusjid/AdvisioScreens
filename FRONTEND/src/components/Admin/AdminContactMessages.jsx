import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminContactMessages = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/contact/');
        const data = JSON.parse(response.data); // Since Django returns a JSON string
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contact messages:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Contact Messages</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">Email</th>
              <th scope="col" className="py-3 px-6">Subject</th>
              <th scope="col" className="py-3 px-6">Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6">{contact.fields.email}</td>
                <td className="py-4 px-6">{contact.fields.subject}</td>
                <td className="py-4 px-6">{contact.fields.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminContactMessages;
