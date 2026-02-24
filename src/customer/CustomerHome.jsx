import React, { useEffect, useState } from 'react';

export default function CustomerHome() {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('currentCustomer');
    if (stored) {
      try {
        setCustomer(JSON.parse(stored));
      } catch (err) {
        console.error('Failed to parse currentCustomer from sessionStorage', err);
      }
    }
  }, []);

  if (!customer) {
    return (
      <div>
        <h2>Customer Home</h2>
        <p>Please log in to view your information.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome, {customer.fullName}</h2>
      <div className="customer-info">
        <p><strong>Username:</strong> {customer.username}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Contact:</strong> {customer.contactNo}</p>
        <p><strong>Location:</strong> {customer.location}</p>
        {customer.registeredAt && (
          <p><strong>Registered At:</strong> {customer.registeredAt}</p>
        )}
      </div>
    </div>
  );
}
