const API_BASE_URL = process.env.REACT_APP_API_URL || '';

export const fetchBusinessData = async (name, location) => {
  try {
    console.log('Fetching business data for:', { name, location });
    const response = await fetch(`${API_BASE_URL}/.netlify/functions/business-data`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, location }),
    });
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', errorText);
      throw new Error(`Failed to fetch business data: ${response.status} ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Business data received:', data);
    return data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

export const regenerateHeadline = async (name, location) => {
  try {
    console.log('Regenerating headline for:', { name, location });
    const response = await fetch(`${API_BASE_URL}/.netlify/functions/business-data?name=${encodeURIComponent(name)}&location=${encodeURIComponent(location)}`);
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', errorText);
      throw new Error(`Failed to regenerate headline: ${response.status} ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Headline regenerated:', data);
    return data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};
