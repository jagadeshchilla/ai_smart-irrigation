import React, { useEffect, useState } from 'react'
import axios from 'axios';
import GaugeChart from 'react-gauge-chart';
import '../styles/projects.css';



const Projects = () => {
  const [sensorData, setSensorData] = useState({
    soil_moisture: [], // Initialize as an empty array
    temperature: null,
    timestamp: null,
  });
  const [sensorHistory, setSensorHistory] = useState([]);
  const [lastUpdateTimestamp, setLastUpdateTimestamp] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await axios.get('http://localhost:80/latest_sensor_data', { timeout: 10000 });
        handleSensorDataResponse(response);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
        handleSensorDisconnect();
      }
    };
    

    // Fetch sensor data initially
    fetchSensorData();

    // Set up interval for real-time updates
    const intervalId = setInterval(() => {
      fetchSensorData();
    }, 2000); // Fetch every 5 seconds

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleSensorDisconnect = () => {
    console.log('Sensor disconnected');
    setSensorData({
      soil_moisture: Array.from({ length: 25 }, () => null),
      temperature: null,
      timestamp: null,
    });
  };

  const handleSensorDataResponse = (response) => {
    console.log('Received raw sensor data:', response.data);

    if (!response.data || response.data.message === 'Sensor disconnected') {
      console.log('Sensor disconnected, skipping update.');
      return;
    }

    console.log('Received sensor data for update:', response.data);

    if (!lastUpdateTimestamp || response.data.timestamp > lastUpdateTimestamp) {
      setSensorData(response.data);
      setSensorHistory((prevHistory) => [...prevHistory, response.data]);
      setLastUpdateTimestamp(response.data.timestamp);
      console.log('Received sensor data:', response.data);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Upload the image and get the result
      const response = await axios.post('http://localhost/yolo/', formData);
      setResult(response.data);

      // Send YOLO detection information to FastAPI server
      const yoloResponse = await axios.post('http://localhost:80/yolo_detection_endpoint', {
        labels: response.data.labels,
      });

      console.log('Response from YOLO detection endpoint:', yoloResponse.data);

      // Fetch the detected image from the server
      const imageResponse = await axios.get(`http://localhost/yolo/${response.data.id}`, {
        responseType: 'arraybuffer', // Ensure binary data is handled correctly
      });

      // Convert the binary data to a data URL
      const imageDataUrl = `data:image/png;base64,${btoa(
        new Uint8Array(imageResponse.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
      )}`;

      // Set the imageUrl state to display the detected image
      setImageUrl(imageDataUrl);
    } catch (error) {
      setResult('Error detecting growth stage.');
      console.error(error);
    }
  };
  //create a function to show only particular group stages  of plant
  
  const gaugeOptions = {
    arcPadding: 0.1,
    arcWidth: 0.15,
    textColor: '#2E2E2E',
    formatTextValue: (value) => `${Math.round(value * 100)}%`,
    needleColor: '#2E7D32',
    needleBaseColor: '#2E2E2E',
  };

  const renderGaugeRow = () => {
    const sensorsPerRow = 5; // Number of columns
    const numRows = Math.ceil(sensorData.soil_moisture.length / sensorsPerRow);
  
    return (
      <div className="gauge-row">
        {Array.from({ length: numRows }, (_, row) => (
          <div key={row} className="gauge-column">
            {sensorData.soil_moisture.slice(row * sensorsPerRow, (row + 1) * sensorsPerRow).map((moisture, index) => {
              const numericMoisture = typeof moisture === 'number' ? moisture : null;
              const normalizedMoisture = numericMoisture !== null ? numericMoisture / 100 : null;
              
  
              return (
                <div key={index} className="gauge-chart-container">
                  <h3>Soil Moisture Sensor {row * sensorsPerRow + index + 1}</h3>
                  <GaugeChart
                    id={`soilMoistureGauge${row * sensorsPerRow + index + 1}`}
                    percent={normalizedMoisture}
                    colors={['#F0F0F0', '#2E7D32']}
                    {...gaugeOptions}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };
  

  return (
    <div className="combined-app-container">
      <h1 className="title">AI Smart Irrigation</h1>
      <div className="sensor-data-container">
        {sensorData.timestamp !== null ? (
          <div>
            <div className="gauge-container">
              {renderGaugeRow()}
              <div className="gauge-chart-container">
                <h3>Temperature Sensor</h3>
                <GaugeChart
                  id="temperatureGauge"
                  percent={sensorData.temperature !== null ? sensorData.temperature / 100 : null}
                  colors={['#F0F0F0', '#F57C00']}
                  {...gaugeOptions}
                />
              </div>
            </div>
            <div className="sensor-history-table-container">
              <table className="sensor-history-table">
                <thead>
                  <tr>
                    <th>Timestamp</th>
                    <th>Soil Moisture</th>
                    <th>Temperature</th>
                  </tr>
                </thead>
                <tbody>
                  {sensorHistory.map((data, index) => (
                    <tr key={index}>
                      <td>{new Date(data.timestamp).toLocaleString()}</td>
                      <td>{data.soil_moisture.join(', ')}</td>
                      <td>{data.temperature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>Sensor data not available</p>
        )}
      </div>
      <div className="image-processing-container">
        <h2>Pomegranate Growth Stage Detection</h2>
        <input type="file" onChange={handleFileChange} accept="image/*" style={{ margin: '10px' }} />
        <button
          onClick={uploadImage}
          style={{
            backgroundColor: '#2ecc71',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Detect Growth Stage
        </button>
        {result && result.labels && (
          <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <h3>Growth Stages Detected</h3>
            <p style={{ fontWeight: 'bold' }}>Growth Stage: {result.labels.join(', ')}</p>
            {/* Display the detected image here */}
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Detected Image"
                style={{ maxWidth: '100%', border: '1px solid #ddd', borderRadius: '5px' }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects