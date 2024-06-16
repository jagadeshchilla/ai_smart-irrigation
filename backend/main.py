from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timedelta
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
from yolofastapi.routers import yolo
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



class RelayStatusPayload(BaseModel):
    relay_status: List[int]


class SensorData(BaseModel):
    soil_moisture: list[int]
    temperature: int


class SensorStatus:
    def __init__(self):
        self.latest_sensor_data = {"soil_moisture": [
            1]*25, "temperature": None, "timestamp": None, "growth_stage": None}

    def update_sensor_data(self, data: SensorData):
        self.latest_sensor_data["soil_moisture"] = data.soil_moisture
        self.latest_sensor_data["temperature"] = data.temperature
        current_time = datetime.utcnow()
        if current_time is not None:
            self.latest_sensor_data["timestamp"] = current_time
        else:
            print("Warning: Failed to retrieve current time.")
            return
        # Print received values
        for i, value in enumerate(self.latest_sensor_data["soil_moisture"]):
            print(f"Soil Moisture {i+1}: {value}")
        print(f"Temperature: {data.temperature}")

    def get_latest_sensor_data(self):
        return self.latest_sensor_data


class SensorStatusfive:
    def __init__(self):
        self.latest_sensor_data_five = {"soil_moisture": [
            1]*5, "temperature": None, "timestamp": None, "growth_stage": None}

    def update_sensor_data_five(self, data: SensorData):
        self.latest_sensor_data_five["soil_moisture"] = data.soil_moisture
        self.latest_sensor_data_five["temperature"] = data.temperature
        current_time_five = datetime.utcnow()
        if current_time_five is not None:
            self.latest_sensor_data_five["timestamp"] = current_time_five
        else:
            print("Warning: Failed to retrieve current time.")
            return
        # Print received values
        for i, value in enumerate(self.latest_sensor_data_five["soil_moisture"]):
            print(f"Soil Moisture {i+21}: {value}")
        print(f"Temperature: {data.temperature}")

    def get_latest_sensor_data_five(self):
        return self.latest_sensor_data_five


class SensorStatusfour:
    def __init__(self):
        self.latest_sensor_data_four = {"soil_moisture": [
            1]*5, "temperature": None, "timestamp": None, "growth_stage": None}

    def update_sensor_data_four(self, data: SensorData):
        self.latest_sensor_data_four["soil_moisture"] = data.soil_moisture
        self.latest_sensor_data_four["temperature"] = data.temperature
        current_time_four = datetime.utcnow()
        if current_time_four is not None:
            self.latest_sensor_data_four["timestamp"] = current_time_four
        else:
            print("Warning: Failed to retrieve current time.")
            return
        # Print received values
        for i, value in enumerate(self.latest_sensor_data_four["soil_moisture"]):
            print(f"Soil Moisture {i+16}: {value}")
        print(f"Temperature: {data.temperature}")

    def get_latest_sensor_data_four(self):
        return self.latest_sensor_data_four


class SensorStatusthree:
    def __init__(self):
        self.latest_sensor_data_three = {"soil_moisture": [
            1]*5, "temperature": None, "timestamp": None, "growth_stage": None}

    def update_sensor_data_three(self, data: SensorData):
        self.latest_sensor_data_three["soil_moisture"] = data.soil_moisture
        self.latest_sensor_data_three["temperature"] = data.temperature
        current_time_three = datetime.utcnow()
        if current_time_three is not None:
            self.latest_sensor_data_three["timestamp"] = current_time_three
        else:
            print("Warning: Failed to retrieve current time.")
            return

        # Print received values
        for i, value in enumerate(self.latest_sensor_data_three["soil_moisture"]):
            print(f"Soil Moisture {i+11}: {value}")
        print(f"Temperature: {data.temperature}")

    def get_latest_sensor_data_three(self):
        return self.latest_sensor_data_three


class SensorStatustwo:
    def __init__(self):
        self.latest_sensor_data_two = {"soil_moisture": [
            1]*5, "temperature": None, "timestamp": None, "growth_stage": None}

    def update_sensor_data_two(self, data: SensorData):
        self.latest_sensor_data_two["soil_moisture"] = data.soil_moisture
        self.latest_sensor_data_two["temperature"] = data.temperature
        current_time_two = datetime.utcnow()
        if current_time_two is not None:
            self.latest_sensor_data_two["timestamp"] = current_time_two
        else:
            print("Warning: Failed to retrieve current time.")
            return

        # Print received values
        for i, value in enumerate(self.latest_sensor_data_two["soil_moisture"]):
            print(f"Soil Moisture {i+6}: {value}")
        print(f"Temperature: {data.temperature}")

    def get_latest_sensor_data_two(self):
        return self.latest_sensor_data_two


class SensorStatusone:
    def __init__(self):
        self.latest_sensor_data_one = {"soil_moisture": [
            1]*5, "temperature": None, "timestamp": None, "growth_stage": None}

    def update_sensor_data_one(self, data: SensorData):
        self.latest_sensor_data_one["soil_moisture"] = data.soil_moisture
        self.latest_sensor_data_one["temperature"] = data.temperature
        current_time_one = datetime.utcnow()
        if current_time_one is not None:
            self.latest_sensor_data_one["timestamp"] = current_time_one
        else:
            print("Warning: Failed to retrieve current time.")
            return

        # Print received values
        for i, value in enumerate(self.latest_sensor_data_one["soil_moisture"]):
            print(f"Soil Moisture {i+1}: {value}")
        print(f"Temperature: {data.temperature}")

    def get_latest_sensor_data_one(self):
        return self.latest_sensor_data_one


sensor_status = SensorStatus()
sensor_status_1 = SensorStatusone()
sensor_status_2 = SensorStatustwo()
sensor_status_3 = SensorStatusthree()
sensor_status_4 = SensorStatusfour()
sensor_status_5 = SensorStatusfive()


def is_data_stale(current_time, max_data_age):
    if (
        sensor_status.latest_sensor_data["timestamp"] is not None
        and current_time - sensor_status.latest_sensor_data["timestamp"] > max_data_age
    ):
        return True
    return False


def get_sensor_status():
    return sensor_status


def get_sensor_status_1():
    return sensor_status_1


def get_sensor_status_2():
    return sensor_status_2


def get_sensor_status_3():
    return sensor_status_3


def get_sensor_status_4():
    return sensor_status_4


def get_sensor_status_5():
    return sensor_status_5


async def connect_to_mongo():
    try:
        mongo_client = AsyncIOMotorClient("mongodb://localhost:27017")
        # Replace "your_database_name" with your desired database name
        db = mongo_client["A"]
        return db
    except Exception as e:
        print(f"Error connecting to MongoDB: {e}")
        raise


async def close_mongo_connection(mongo_client: AsyncIOMotorClient):
    try:
        mongo_client.close()
    except Exception as e:
        print(f"Error closing MongoDB connection: {e}")
        raise


@app.post("/sensor_data_endpoint", response_model=None)
async def receive_sensor_data(data: SensorData, sensor_status: SensorStatus = Depends(get_sensor_status),
                              db: AsyncIOMotorClient = Depends(connect_to_mongo)):
    current_time = datetime.utcnow()

    # If data received is empty, consider it as a disconnection
    if not data.soil_moisture or data.temperature is None:
        raise HTTPException(status_code=503, detail="Sensor disconnected")

    if len(data.soil_moisture) < 25:
        raise HTTPException(
            status_code=400, detail="Invalid number of soil moisture values. Expected 25.")

    sensor_status.update_sensor_data(data)
    print("Received sensor data:", data)

    if is_data_stale(current_time, max_data_age=timedelta(minutes=5)):
        raise HTTPException(status_code=503, detail="Sensor disconnected")

    # Store data in MongoDB for individual sensors
    sensor_data_collection = db["sensor_data"]
    for i, value in enumerate(sensor_status.latest_sensor_data["soil_moisture"]):
        try:
            await sensor_data_collection.insert_one({
                "sensor_number": i + 1,
                "soil_moisture": value,
                "temperature": data.temperature,
                "timestamp": current_time
            })
        except Exception as e:
            print(f"Error inserting data into MongoDB: {e}")
            raise

    return {"message": "Received sensor data"}


@app.post("/sensor_data_endpoint_bud", response_model=None)
async def send_sensor_data_to_fastapi_bud(data: SensorData):
    # Your processing logic goes here
    # For example, you can manually update the SensorStatus class
    sensor_status_1.update_sensor_data_one(data)
    print("Received sensor data:", data)

    return {"message": "Sensor data received successfully"}


@app.post("/sensor_data_endpoint_flower", response_model=None)
async def send_sensor_data_to_fastapi_flower(data: SensorData):
    # Your processing logic goes here
    # For example, you can manually update the SensorStatus class
    sensor_status_2.update_sensor_data_two(data)
    print("Received sensor data:", data)

    return {"message": "Sensor data received successfully"}


@app.post("/sensor_data_endpoint_earlyfruit", response_model=None)
async def send_sensor_data_to_fastapi_earlyfruit(data: SensorData):
    # Your processing logic goes here
    # For example, you can manually update the SensorStatus class
    sensor_status_3.update_sensor_data_three(data)
    print("Received sensor data:", data)

    return {"message": "Sensor data received successfully"}


@app.post("/sensor_data_endpoint_midgrowth", response_model=None)
async def send_sensor_data_to_fastapi_midgrowth(data: SensorData):
    # Your processing logic goes here
    # For example, you can manually update the SensorStatus class
    sensor_status_4.update_sensor_data_four(data)
    print("Received sensor data:", data)

    return {"message": "Sensor data received successfully"}


@app.post("/sensor_data_endpoint_ripe", response_model=None)
async def send_sensor_data_to_fastapi_ripe(data: SensorData):
    # Your processing logic goes here
    # For example, you can manually update the SensorStatus class
    sensor_status_5.update_sensor_data_five(data)
    print("Received sensor data:", data)

    return {"message": "Sensor data received successfully"}

@app.get("/latest_sensor_data")
async def get_latest_sensor_data(sensor_status: SensorStatus = Depends(get_sensor_status),
                                 db: AsyncIOMotorClient = Depends(connect_to_mongo)):
    current_time = datetime.utcnow()
    max_data_age = timedelta(seconds=1000)

    if is_data_stale(current_time, max_data_age):
        raise HTTPException(status_code=503, detail="Sensor disconnected")

    latest_sensor_data = sensor_status.get_latest_sensor_data()

    latest_sensor_data_str = {
        "soil_moisture": latest_sensor_data["soil_moisture"],
        "temperature": latest_sensor_data["temperature"],
        "timestamp": latest_sensor_data["timestamp"].isoformat(),
    }

    return latest_sensor_data_str


@app.get("/latest_sensor_data_one")
async def get_latest_sensor_data_one(sensor_status_1: SensorStatusone = Depends(get_sensor_status_1),
                                     db: AsyncIOMotorClient = Depends(connect_to_mongo)):
    current_time = datetime.utcnow()
    max_data_age = timedelta(seconds=15)

    if is_data_stale(current_time, max_data_age):
        raise HTTPException(status_code=503, detail="Sensor disconnected")

    latest_sensor_data_one = sensor_status_1.get_latest_sensor_data_one()

    latest_sensor_data_str_one = {
        "soil_moisture": latest_sensor_data_one["soil_moisture"],
        "temperature": latest_sensor_data_one["temperature"],
        "timestamp": latest_sensor_data_one["timestamp"].isoformat(),

    }

    return latest_sensor_data_str_one


@app.get("/latest_sensor_data_two")
async def get_latest_sensor_data_two(sensor_status_2: SensorStatustwo = Depends(get_sensor_status_2),
                                     db: AsyncIOMotorClient = Depends(connect_to_mongo)):
    current_time = datetime.utcnow()
    max_data_age = timedelta(seconds=15)

    if is_data_stale(current_time, max_data_age):
        raise HTTPException(status_code=503, detail="Sensor disconnected")

    latest_sensor_data_two = sensor_status_2.get_latest_sensor_data_two()

    latest_sensor_data_str_two = {
        "soil_moisture": latest_sensor_data_two["soil_moisture"],
        "temperature": latest_sensor_data_two["temperature"],
        "timestamp": latest_sensor_data_two["timestamp"].isoformat(),
    }

    return latest_sensor_data_str_two


@app.get("/latest_sensor_data_three")
async def get_latest_sensor_data_three(sensor_status_3: SensorStatusthree = Depends(get_sensor_status_3),
                                       db: AsyncIOMotorClient = Depends(connect_to_mongo)):
    current_time = datetime.utcnow()
    max_data_age = timedelta(seconds=15)

    if is_data_stale(current_time, max_data_age):
        raise HTTPException(status_code=503, detail="Sensor disconnected")

    latest_sensor_data_three = sensor_status_3.get_latest_sensor_data_three()

    latest_sensor_data_str_three = {
        "soil_moisture": latest_sensor_data_three["soil_moisture"],
        "temperature": latest_sensor_data_three["temperature"],
        "timestamp": latest_sensor_data_three["timestamp"].isoformat(),
    }

    return latest_sensor_data_str_three


@app.get("/latest_sensor_data_four")
async def get_latest_sensor_data_four(sensor_status_4: SensorStatusfour = Depends(get_sensor_status_4),
                                      db: AsyncIOMotorClient = Depends(connect_to_mongo)):
    current_time = datetime.utcnow()
    max_data_age = timedelta(seconds=15)

    if is_data_stale(current_time, max_data_age):
        raise HTTPException(status_code=503, detail="Sensor disconnected")

    latest_sensor_data_four = sensor_status_4.get_latest_sensor_data_four()

    latest_sensor_data_str_four = {
        "soil_moisture": latest_sensor_data_four["soil_moisture"],
        "temperature": latest_sensor_data_four["temperature"],
        "timestamp": latest_sensor_data_four["timestamp"].isoformat(),
    }

    return latest_sensor_data_str_four


@app.get("/latest_sensor_data_five")
async def get_latest_sensor_data_five(sensor_status_5: SensorStatusfive = Depends(get_sensor_status_5),
                                      db: AsyncIOMotorClient = Depends(connect_to_mongo)):
    current_time = datetime.utcnow()
    max_data_age = timedelta(seconds=15)

    if is_data_stale(current_time, max_data_age):
        raise HTTPException(status_code=503, detail="Sensor disconnected")

    latest_sensor_data_five = sensor_status_5.get_latest_sensor_data_five()

    latest_sensor_data_str_five = {
        "soil_moisture": latest_sensor_data_five["soil_moisture"],
        "temperature": latest_sensor_data_five["temperature"],
        "timestamp": latest_sensor_data_five["timestamp"].isoformat(),
    }

    return latest_sensor_data_str_five


@app.post("/relay_status_endpoint", response_model=None)
async def receive_relay_status(relay_status: RelayStatusPayload, db: AsyncIOMotorClient = Depends(connect_to_mongo)):
    # Update the relay status in the database or perform any other desired actions

    print(f"Received Relay Status: {relay_status.relay_status}")

    return {"message": "Received relay status data"}


app.include_router(yolo.router)


class YOLODetection(BaseModel):
    labels: List[str]


@app.post("/yolo_detection_endpoint", response_model=None)
async def receive_yolo_detection(yolo_data: YOLODetection, sensor_status: SensorStatus = Depends(get_sensor_status)):
    current_time = datetime.utcnow()

    # Update the sensor_status with YOLO detection information
    sensor_status.latest_sensor_data["growth_stage"] = yolo_data.labels
    sensor_status.latest_sensor_data["timestamp"] = current_time

    # Print received values
    print(f"Growth Stage Detected: {', '.join(yolo_data.labels)}")

    return {"message": "Received YOLO detection data"}


@app.get("/latest_growth_stage")
async def get_latest_growth_stage(sensor_status: SensorStatus = Depends(get_sensor_status)):
    latest_growth_stage = sensor_status.get_latest_sensor_data()[
        "growth_stage"]
    if latest_growth_stage is None:
        raise HTTPException(
            status_code=404, detail="No growth stage data available")
    return {"growth_stage": latest_growth_stage}

if __name__ == "__main__":
    import uvicorn
    import os

    config = uvicorn.Config(app, host="0.0.0.0", port=int(
        os.environ.get("PORT", 80)), lifespan="on")
    server = uvicorn.Server(config)
    server.run()
