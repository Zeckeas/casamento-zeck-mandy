export const setupKeepAlive = () => {
  const INTERVAL = 5 * 60 * 1000; // 5 minutos
  const apiUrl = 'https://ltbvmrmjlclicafmygac.supabase.co/functions/v1/keep-alive';

  const keepAlive = async () => {
    try {
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        }
      });

      if (!response.ok) throw new Error('Keep-alive request failed');

      const data = await response.json();
      console.log('✅ Keep-alive successful:', data);
    } catch (error) {
      console.error('❌ Keep-alive error:', error);
    }
  };

  keepAlive();
  const intervalId = setInterval(keepAlive, INTERVAL);
  return () => clearInterval(intervalId);
};
