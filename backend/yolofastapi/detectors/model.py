from ultralytics import YOLO
import cv2

model = YOLO('model.pt')
results = model("p2.jpg", show=True)
cv2.waitKey(0)
