from flask import Flask, request, render_template, redirect, url_for, session
from database import db
from werkzeug.utils import secure_filename
import hashlib
import filetype
import os
import mysql.connector
UPLOAD_FOLDER = 'static/uploads'

app = Flask(__name__)

app.secret_key = "s3cr3t_k3y"
app.config['UPLOAD_FOLDER']=UPLOAD_FOLDER
# Conexión a la base de datos
conn = mysql.connector.connect(
    host="localhost",
    user="cc5002",
    password="programacionweb",
    database="tarea2"
)
cursor = conn.cursor(dictionary=True)

@app.route("/")
def portada():
    cursor.execute("SELECT * FROM actividades ORDER BY id DESC LIMIT 5")
    ultimas_actividades = cursor.fetchall()
    return render_template("portada.html", actividades=ultimas_actividades)

@app.route("/agregar")
def agregar():
    return render_template("agregar.html")

@app.route("/listado")
def listado():
    cursor.execute("SELECT * FROM actividades")
    todas = cursor.fetchall()
    return render_template("listado.html", actividades=todas)

@app.route("/estadisticas")
def estadisticas():
    # lógica para generar estadísticas
    return render_template("estadisticas.html")

if __name__ == "__main__":
    app.run(debug=True)