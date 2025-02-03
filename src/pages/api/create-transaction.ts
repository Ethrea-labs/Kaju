import type { NextApiRequest, NextApiResponse } from 'next';

type ApiResponse = {
  data?: any;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt, address } = req.body;

  if (!prompt || !address) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  const brianAPIUrl = "https://api.brianknows.org/api/v0/agent/transaction";
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Brian-Api-Key': process.env.BRIAN_API_KEY || '' // Make sure to add this to your .env file
    },
    body: JSON.stringify({
      prompt,
      address
    })
  };
  
  try {
    const response = await fetch(brianAPIUrl, options);
    
    if (!response.ok) {
      throw new Error(`API returned ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      error: error instanceof Error ? error.message : "Failed to create transaction" 
    });
  }
}