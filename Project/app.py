from flask import Flask, request, jsonify
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage
from email.mime.text import MIMEText
from flask_cors import CORS
import re
import os

app = Flask(__name__)
CORS(app)
# SMTP configuration (replace with your details)
SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587
SENDER_EMAIL = 'aayushmansingh120205@gmail.com'  # Replace with your Gmail address (used for authentication)
SENDER_PASSWORD = 'utztxjuzzqfizajk'  # Replace with your Gmail App Password
RECIPIENT_EMAIL = 'aayushmansingh120205@gmail.com'  # Replace with the fixed recipient email
PREDEFINED_SUBJECT = 'Photo Attachment from Webpage'  # Predefined subject
PREDEFINED_MESSAGE = 'This is an automated email with a photo attachment.'  # Predefined message
MAX_FILE_SIZE = 20 * 1024 * 1024  # 20MB limit (Gmail allows ~25MB total email size)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/send_email', methods=['POST'])
def send_email():
    try:
        # Get sender email and file
        from_email = request.form.get('from')
        if not from_email or not re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', from_email):
            return jsonify({'error': 'Invalid sender email format'}), 400

        if 'file' not in request.files:
            return jsonify({'error': 'No photo uploaded'}), 400
        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No photo selected'}), 400

        # Validate file type (only images)
        allowed_extensions = {'png', 'jpg', 'jpeg', 'gif'}
        if not '.' in file.filename or file.filename.rsplit('.', 1)[1].lower() not in allowed_extensions:
            return jsonify({'error': 'Invalid file type. Use PNG, JPG, JPEG, or GIF'}), 400

        # Check file size
        file.seek(0, os.SEEK_END)
        file_size = file.tell()
        if file_size > MAX_FILE_SIZE:
            return jsonify({'error': 'Photo too large (max 20MB)'}), 400
        file.seek(0)  # Reset file pointer

        # Create email
        msg = MIMEMultipart()
        msg['From'] = from_email  # Use user-provided sender email
        msg['To'] = RECIPIENT_EMAIL  # Use fixed recipient
        msg['Subject'] = PREDEFINED_SUBJECT

        # Attach predefined message
        msg.attach(MIMEText(PREDEFINED_MESSAGE, 'plain'))

        # Attach photo
        img_data = file.read()
        img = MIMEImage(img_data, name=file.filename)
        msg.attach(img)

        # Connect to SMTP server
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)  # Authenticate with fixed Gmail credentials
        server.sendmail(SENDER_EMAIL, RECIPIENT_EMAIL, msg.as_string())
        server.quit()

        return jsonify({'message': 'Email sent successfully'}), 200
    except Exception as e:
        print("Error while sending email:", str(e))  # <-- Add this for debugging
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)