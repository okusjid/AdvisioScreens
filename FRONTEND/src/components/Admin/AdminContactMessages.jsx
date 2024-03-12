import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const AdminContactMessages = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/contact/');
        const data = JSON.parse(response.data);
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contact messages:', error);
      }
    };

    fetchContacts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.fields.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-blue-200 to-indigo-300 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Contact Messages</h2>
        <input
          type="text"
          className="mt-4 md:mt-0 form-input px-4 py-2 rounded-md border-2 border-gray-300"
          placeholder="Search by subject..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full text-sm md:text-base text-left text-gray-600 dark:text-gray-400">
          <thead className="text-xs md:text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 rounded-t-lg">
            <tr>
              <th scope="col" className="py-3 px-6">Email</th>
              <th scope="col" className="py-3 px-6">Subject</th>
              <th scope="col" className="py-3 px-6">Message</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {filteredContacts.length > 0 ? (
                filteredContacts.map((contact, index) => (
                  <motion.tr
                    key={contact.id} // Assuming each contact has a unique 'id' field
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-300 ease-in-out"
                  >
                    <td className="py-4 px-6">{contact.fields.email}</td>
                    <td className="py-4 px-6">{contact.fields.subject}</td>
                    <td className="py-4 px-6 break-words">{contact.fields.message}</td>
                  </motion.tr>
                ))
              ) : (
                <motion.tr
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <td colSpan="3" className="text-center py-4 px-6">No messages found for the given subject.</td>
                </motion.tr>
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminContactMessages;
