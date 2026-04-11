const API_URL = import.meta.env.VITE_API_URL;

const authHeaders = (token) => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
});

const request = async (endpoint, token, options = {}) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: authHeaders(token),
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Request failed');
  return data;
};

export const reservationService = {
  create: (token, payload) =>
    request('/reservations/create', token, {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  getAll: (token) => request('/reservations/all', token),

  update: (token, id, payload) =>
    request(`/reservations/update/${id}`, token, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    }),

  remove: (token, id) =>
    request(`/reservations/delete/${id}`, token, { method: 'DELETE' }),
};
