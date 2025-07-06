const API_BASE_URL = process.env.REACT_APP_API_URL || '';

export const fetchBusinessData = async (name, location) => {
  const response = await fetch(`${API_BASE_URL}/.netlify/functions/business-data`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, location }),
  });
  if (!response.ok) throw new Error('Failed to fetch business data');
  return response.json();
};

export const regenerateHeadline = async (name, location) => {
  const response = await fetch(`${API_BASE_URL}/.netlify/functions/business-data?name=${encodeURIComponent(name)}&location=${encodeURIComponent(location)}`);
  if (!response.ok) throw new Error('Failed to regenerate headline');
  return response.json();
};
